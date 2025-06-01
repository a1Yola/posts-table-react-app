import { Button } from "@headlessui/react";

interface PostsToolbarProps {
  disabled: boolean;
}

export const PostsToolbar = ({ disabled }: PostsToolbarProps) => {
  return (
    <div
      className="sticky top-0 flex flex-wrap items-center px-4 py-3
          border-0 backdrop-blur-md backdrop-saturate-150 bg-white/30 sm:rounded-xl"
    >
      <div className="px-2 w-full max-w-full flex-grow flex-1">
        <h1 className="font-semibold text-blue text-base sm:text-xl">Посты</h1>
      </div>
      <div className="px-2 w-full max-w-full flex-grow flex-1 text-right">
        <Button
          className="bg-blue text-white text-xs font-bold uppercase px-4 py-2 rounded outline-none
              hover:cursor-pointer hover:bg-blue-500 active:bg-blue-600 focus:outline-none
              ease-linear transition-all duration-150"
          disabled={disabled}
        >
          Добавить
        </Button>
      </div>
    </div>
  );
};
