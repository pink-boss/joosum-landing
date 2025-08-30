interface SubmitConfirmModalProps {
  isOpen: boolean;
  onCancel: () => void;
  onConfirm: () => void;
}

export default function SubmitConfirmModal({
  isOpen,
  onCancel,
  onConfirm,
}: SubmitConfirmModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black opacity-[0.5]"
        onClick={onCancel}
      />
      <div className="relative h-auto min-h-[254px] w-[90vw] max-w-[422px] rounded-[10px] bg-white p-4 md:p-5">
        <div className="flex h-full flex-col">
          <div className="flex flex-1 flex-col items-center justify-center py-6 text-center md:py-8">
            <h2 className="mb-3 text-xl font-bold text-black md:mb-4 md:text-2xl">
              문의를 제출 하시겠습니까?
            </h2>
            <p className="text-sm leading-5 text-[#2f2f2f] md:text-base md:leading-[19px]">
              답변은 3~5일 이내 <br />
              입력한 메일주소로 보내드립니다.
            </p>
          </div>
          <div className="flex gap-3">
            <button
              className="h-12 flex-1 cursor-pointer rounded-lg bg-[#bbbbbb] text-sm font-bold text-white transition-opacity hover:opacity-80 md:h-14 md:text-base"
              onClick={onCancel}
            >
              취소
            </button>
            <button
              className="bg-primary-500 h-12 flex-1 cursor-pointer rounded-lg text-sm font-bold text-white transition-opacity hover:opacity-80 md:h-14 md:text-base"
              onClick={onConfirm}
            >
              확인
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
