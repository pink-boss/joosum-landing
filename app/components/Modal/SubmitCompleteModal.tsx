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
      <div className="relative bg-white rounded-[10px] w-[90vw] max-w-[422px] h-auto min-h-[200px] p-4 md:p-5">
        <div className="flex flex-col h-full">
          <div className="flex-1 flex items-center justify-center py-6 md:py-8">
            <h2 className="text-xl md:text-2xl font-bold text-black text-center">
              문의가 제출 되었습니다.
            </h2>
          </div>
          <button
            onClick={onClose}
            className="w-full h-12 md:h-14 bg-primary-500 text-white rounded-lg font-bold text-sm md:text-base hover:opacity-80 transition-opacity cursor-pointer"
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
}
