import Image from 'next/legacy/image';
import Link from 'next/link';

export default function ListItem({ data }) {
  const cover = data.cover.file?.url || data.cover.external.url;
  const name = data.properties.name.title[0].plain_text;
  const addr = data.properties.addr.rich_text[0].plain_text;
  const star = data.properties.star.multi_select[0].name;
  const review = data.properties.review.rich_text[0].plain_text;
  return (
    <div className='item'>
      <Image
        src={cover}
        alt='cover img'
        width='100%'
        height='60%'
        layout='responsive'
        objectFit='cover'
        quality={100}
      />
      <div>
        <h1 className='text-xl mt-2 font-bold'>
          {name} ({star})
        </h1>
        <Link href={`https://www.google.com/maps/place/${addr}`}>

        <h3 className='mt-2 text-slate-400 text-md'>{addr}</h3>
        </Link>
        <h3 className='mt-1 text-md'>{review}</h3>
      </div>
    </div>
  );
}
