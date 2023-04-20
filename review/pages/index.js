import Layout from '../components/layout';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  const start = new Date('2022-03-01');
  const days = new Date() - start;
  const today = Math.floor(days / (1000 * 60 * 60 * 24));

  return (
    <Layout>
      <Head>
        <title>얌얌 기록장</title>
        <meta name='description' content='냠냠쩝쩝 맛도리 여정' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <section>
        <section class='text-gray-600 body-font'>
          <div class='container mx-auto flex px-5 py-24 items-center justify-center flex-col'>
            <h1 className='title-font sm:text-4xl text-3xl mb-4 font-light text-gray-700'>
              오늘 우리는{' '}
              <span className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
                {today + 1}
              </span>
              일 째 되는 날
            </h1>
            <div class='text-center lg:w-2/3 w-full'>
              <p class='mb-8 leading-relaxed'>
                여기가자, 이거 맛있겠다 말만 한 곳만 거진 삼천오백개... <br />
                이정도면 다 까먹을게 분명하니 저장해두고 맛있던 곳들, 재밌던
                곳들 <br />다 저장해서 나중에 또 가기로 해
              </p>
              <div class='flex justify-center'>
                <Link href='/list'>
                  <button class='ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg'>
                    리스트 보기
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </section>
    </Layout>
  );
}
