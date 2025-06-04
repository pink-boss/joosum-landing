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
      <div className="relative bg-white rounded-[10px] w-[90vw] max-w-[422px] h-auto min-h-[254px] p-4 md:p-5">
        <div className="flex flex-col h-full">
          <div className="flex-1 flex flex-col items-center justify-center text-center py-6 md:py-8">
            <h2 className="text-xl md:text-2xl font-bold text-black mb-3 md:mb-4">
              문의를 제출 하시겠습니까?
            </h2>
            <p className="text-sm md:text-base text-[#2f2f2f] leading-5 md:leading-[19px]">
              답변은 3~5일 이내 <br />
              입력한 메일주소로 보내드립니다.
            </p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={onCancel}
              className="cursor-pointer flex-1 h-12 md:h-14 bg-[#bbbbbb] text-white rounded-lg font-bold text-sm md:text-base hover:opacity-80 transition-opacity"
            >
              취소
            </button>
            <button
              onClick={onConfirm}
              className="flex-1 h-12 md:h-14 cursor-pointer bg-primary-500 text-white rounded-lg font-bold text-sm md:text-base hover:opacity-80 transition-opacity"
            >
              확인
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
