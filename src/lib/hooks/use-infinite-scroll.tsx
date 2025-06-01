import { useEffect, useRef } from "react";
import { useAsyncList } from "react-stately";
import {
  useInView,
  type IntersectionOptions,
} from "react-intersection-observer";

import type { LoadListRequest } from "@/shared";

interface useInfiniteScrollParams<T> {
  loadList: (params: LoadListRequest) => Promise<{
    data: { data: T[]; next: number | null };
    cursor?: string;
  }>;
  intersectionOptions: IntersectionOptions;
}

export const useInfiniteScroll = <T,>({
  loadList,
  intersectionOptions,
}: useInfiniteScrollParams<T>) => {
  const nextPageRef = useRef<number | null>(null);
  const { ref: inViewRef, inView } = useInView(intersectionOptions);

  const listApi = useAsyncList<T>({
    async load({ signal, cursor }) {
      const { data, cursor: nextCursor } = await loadList({ signal, cursor });
      nextPageRef.current = data.next;

      return { items: data.data, cursor: nextCursor };
    },
  });

  const listRef = useRef(listApi);

  useEffect(() => {
    listRef.current = listApi;
  }, [listApi]);

  useEffect(() => {
    const { items, isLoading } = listRef.current;

    if (items.length && !isLoading && inView) {
      listApi.loadMore();
    }
  }, [inView]);

  return {
    inViewRef,
    listApi,
    nextPage: nextPageRef.current,
  };
};
