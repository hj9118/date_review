import Layout from '@/components/layout';
import ListItem from '@/components/list/list-item';
import { TOKEN, DATABASE_ID } from '../config';

export default function List({ projects }) {
  console.log(projects);
  return (
    <Layout>
      <div className='grid grid-cols-1 gap-8 p-12 m-4 md:grid-cols-2'>
        {
          projects.results.map(
            (proj) =>  <ListItem key={proj.id} data={proj} />
          )}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'Notion-Version': '2022-06-28',
      'content-type': 'application/json',
      authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      page_size: 100,
    }),
  };

  const res = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    options
  );
  const projects = await res.json();

  const projectName = projects.results.map(
    (proj) => proj.properties.name.title[0]?.plain_text
  );

  return {
    props: { projects },
    revalidate: 1,
  };
}
