'use client';

import { Dialog } from 'radix-ui';

interface Props {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function SubmitCompleteModal({ isOpen, onOpenChange }: Props) {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-9999 bg-black/50" />
        <Dialog.Content className="fixed top-1/2 left-1/2 z-10000 h-auto min-h-[200px] w-[90vw] max-w-[422px] -translate-x-1/2 -translate-y-1/2 rounded-[10px] bg-white p-4 md:p-5">
          <div className="flex h-full flex-col">
            <div className="flex flex-1 items-center justify-center py-6 md:py-8">
              <Dialog.Title className="text-center text-xl font-bold text-black md:text-2xl">
                문의가 제출 되었습니다.
              </Dialog.Title>
            </div>
            <Dialog.Close asChild>
              <button
                className="bg-primary-500 h-12 w-full cursor-pointer rounded-lg text-sm font-bold text-white transition-opacity hover:opacity-80 md:h-14 md:text-base"
                type="button"
              >
                확인
              </button>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
