import {
  CloseButton,
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import type { AsyncListData } from "react-stately";

import { AddPostForm } from "../add-post-form";

import type { Post } from "@/shared";

interface CreatePostModalProps {
  isOpen: boolean;
  close: () => void;
  listApi: AsyncListData<Post>;
  nextPage: number | null;
}

export const CreatePostModal = ({
  isOpen,
  close,
  listApi,
  nextPage,
}: CreatePostModalProps) => {
  return (
    <Dialog
      open={isOpen}
      onClose={close}
      className="relative z-50 focus:outline-none"
    >
      <DialogBackdrop className="fixed inset-0 bg-black/30" />
      <div className="fixed inset-0 w-screen overflow-y-auto p-4">
        <div className="flex min-h-full items-center justify-center">
          <DialogPanel
            transition
            className="relative w-full max-w-md flex flex-col items-center justify-center
            space-y-3 border border-gray-200 rounded-xl bg-white px-12 py-6
            duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
          >
            <CloseButton className="absolute top-2 right-2 hover:cursor-pointer">
              ❌
            </CloseButton>
            <DialogTitle className="font-bold text-blue text-lg">
              Добавление поста
            </DialogTitle>
            <AddPostForm listApi={listApi} close={close} nextPage={nextPage} />
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};
