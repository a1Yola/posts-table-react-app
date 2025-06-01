import { useState } from "react";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

export const CreatePostModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => {
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button className="hover:cursor-pointer" onClick={open}>
        Open dialog
      </button>
      <Dialog open={isOpen} onClose={close} className="relative z-50">
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="max-w-lg space-y-4 border rounded-xl bg-black p-12">
            <DialogTitle className="font-bold text-white">
              Deactivate account
            </DialogTitle>
            <Description className="text-white">
              This will permanently deactivate your account
            </Description>
            <p className="text-white">
              Are you sure you want to deactivate your account? All of your data
              will be permanently removed.
            </p>
            <div className="flex gap-4 text-white">
              <button className="hover:cursor-pointer" onClick={close}>
                Cancel
              </button>
              <button className="hover:cursor-pointer" onClick={close}>
                Deactivate
              </button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};
