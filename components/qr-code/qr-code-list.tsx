import { clsx } from 'utils/clsx';

import { downloadStores } from './constants';
import QRCode from './qr-code';

export default function QRCodeList() {
  return (
    <div className={clsx('hidden gap-4', 'md:flex md:justify-center', 'lg:gap-6')}>
      {downloadStores.map((store, index) => (
        <QRCode key={index} store={store} />
      ))}
    </div>
  );
}
