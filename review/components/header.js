import Link from 'next/link';
import ToggleBtn from './toggle';

export default function Header() {
  return (
    <header class='text-gray-600 body-font'>
      <div class='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
        <Link href='/'>
          <h1 class='flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0'>
            <span class='ml-3 text-xl'>데이트 기록장</span>
          </h1>
        </Link>
        <nav class='md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center'>
          <Link href='/list'>
            <p class='mr-5 hover:text-gray-900'>리스트 보기</p>
          </Link>
          <Link href='/add'>
            <p class='mr-5 hover:text-gray-900'>장소 추가</p>
          </Link>
        </nav>
        <ToggleBtn />
      </div>
    </header>
  );
}
