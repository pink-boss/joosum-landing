import clsx from 'clsx';

import { downloadStores } from './constants';
import QRCode from './QRCode';

export default function QRCodeList() {
  return (
    <div
      className={clsx('hidden gap-4', 'md:flex md:justify-center', 'lg:gap-6')}
    >
      {downloadStores.map((store, index) => (
        <QRCode key={index} store={store} />
      ))}
    </div>
  );
}
