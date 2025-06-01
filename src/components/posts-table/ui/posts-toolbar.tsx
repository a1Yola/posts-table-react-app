import { useCallback, useState } from "react";
import { Button } from "@headlessui/react";
import type { AsyncListData } from "react-stately";

import { CreatePostModal } from "@/components/create-post-modal";
import type { Post } from "@/shared";

interface PostsToolbarProps {
  disabled: boolean;
  listApi: AsyncListData<Post>;
  nextPage: number | null;
}

export const PostsToolbar = ({
  disabled,
  listApi,
  nextPage,
}: PostsToolbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <>
      <div
        className="sticky top-0 flex flex-wrap items-center px-4 py-3
          border-0 backdrop-blur-md backdrop-saturate-150 bg-white/30 sm:rounded-xl"
      >
        <div className="px-2 w-full max-w-full flex-grow flex-1">
          <h1 className="font-semibold text-blue text-base sm:text-xl">
            Посты
          </h1>
        </div>
        <div className="px-2 w-full max-w-full flex-grow flex-1 text-right">
          <Button
            className="bg-blue text-white text-xs font-bold uppercase px-4 py-2 rounded outline-none
              hover:cursor-pointer hover:bg-blue-500 active:bg-blue-600 focus:outline-none
              ease-linear transition-all duration-150"
            onClick={openModal}
            disabled={disabled}
          >
            Добавить
          </Button>
        </div>
      </div>
      <CreatePostModal
        isOpen={isOpen}
        close={closeModal}
        listApi={listApi}
        nextPage={nextPage}
      />
    </>
  );
};
