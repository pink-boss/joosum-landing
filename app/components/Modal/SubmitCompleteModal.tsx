interface SubmitCompleteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SubmitCompleteModal({
  isOpen,
  onClose,
}: SubmitCompleteModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black opacity-[0.5]"
        onClick={onClose}
      />
      <div className="relative h-auto min-h-[200px] w-[90vw] max-w-[422px] rounded-[10px] bg-white p-4 md:p-5">
        <div className="flex h-full flex-col">
          <div className="flex flex-1 items-center justify-center py-6 md:py-8">
            <h2 className="text-center text-xl font-bold text-black md:text-2xl">
              문의가 제출 되었습니다.
            </h2>
          </div>
          <button
            className="bg-primary-500 h-12 w-full cursor-pointer rounded-lg text-sm font-bold text-white transition-opacity hover:opacity-80 md:h-14 md:text-base"
            onClick={onClose}
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
}
