'use client';

import { Dialog } from 'radix-ui';

interface Props {
  onConfirm: () => void;
}

export default function SubmitConfirmModal({ onConfirm }: Props) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 z-50 bg-black/50" />
      <Dialog.Content className="fixed top-1/2 left-1/2 z-50 h-auto min-h-[254px] w-[90vw] max-w-[422px] -translate-x-1/2 -translate-y-1/2 rounded-[10px] bg-white p-4 md:p-5">
        <div className="flex h-full flex-col">
          <div className="flex flex-1 flex-col items-center justify-center py-6 text-center md:py-8">
            <Dialog.Title className="mb-3 text-xl font-bold text-black md:mb-4 md:text-2xl">
              문의를 제출 하시겠습니까?
            </Dialog.Title>
            <Dialog.Description className="text-sm leading-5 text-[#2f2f2f] md:text-base md:leading-[19px]">
              답변은 3~5일 이내 <br />
              입력한 메일주소로 보내드립니다.
            </Dialog.Description>
          </div>
          <div className="flex gap-3">
            <Dialog.Close asChild>
              <button
                className="h-12 flex-1 cursor-pointer rounded-lg bg-[#bbbbbb] text-sm font-bold text-white transition-opacity hover:opacity-80 md:h-14 md:text-base"
                data-testid="cancel_submit_contact"
                type="button"
              >
                취소
              </button>
            </Dialog.Close>
            <button
              className="bg-primary-500 h-12 flex-1 cursor-pointer rounded-lg text-sm font-bold text-white transition-opacity hover:opacity-80 md:h-14 md:text-base"
              data-testid="confirm_submit_contact"
              type="button"
              onClick={onConfirm}
            >
              확인
            </button>
          </div>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  );
}
