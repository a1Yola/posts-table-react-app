import { postsApi } from "@/api";
import { useInfiniteScroll } from "@/lib";
import { Loader } from "@components/ui";
import { PostsToolbar, TableBody, TableHead } from "./ui";

import type { Post } from "@/shared";

export const PostsTable = () => {
  const { inViewRef, listApi, nextPage } = useInfiniteScroll<Post>({
    loadList: postsApi.loadPosts,
    intersectionOptions: { rootMargin: "1000px" },
  });

  const { loadingState, isLoading, items: posts } = listApi;

  if (loadingState === "error")
    return (
      <div className="h-full flex justify-center items-center">
        <p className="text-xl">Упс! Возникла ошибка!</p>
      </div>
    );

  return (
    <div className="w-full sm:py-4 mx-auto">
      <div
        className="relative w-full flex flex-col min-w-0 break-words
        bg-white shadow-lg border border-gray-200 sm:rounded-xl"
      >
        <PostsToolbar
          disabled={isLoading}
          listApi={listApi}
          nextPage={nextPage}
        />

        {loadingState === "loading" ? (
          <Loader className="py-6" />
        ) : posts.length ? (
          <div className="block w-full overflow-x-auto">
            <table className="w-full divide-y divide-gray-200">
              <caption className="px-6 py-3 text-start text-sm text-gray-600">
                Таблица постов с полями id, заголовка, просмотров, публикации,
                автора и тэгов
              </caption>
              <TableHead headers={Object.keys(posts[0])} />
              <TableBody posts={posts} />
            </table>
          </div>
        ) : (
          <div className="flex justify-center py-4">
            <p>Нет результатов</p>
          </div>
        )}

        {nextPage && <Loader ref={inViewRef} className="py-6" />}
      </div>
    </div>
  );
};
