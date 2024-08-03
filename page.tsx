import { GetStaticProps } from 'next';
import path from 'path';

type AdBannerData = {
  id: number;
  title: string;
  description: string;
  cta: string;
  image: string;
  background: 'light' | 'dark';
};

type HomePageProps = {
  adBanners: AdBannerData[];
};

const Home = ({ adBanners }: HomePageProps) => {
  return (
    <div>
      <h1>Welcome to our Homepage</h1>
      <div className="ad-banner-list">
        {adBanners.map((banner) => (
          <div key={banner.id}>
            <h2>{banner.title}</h2>
            <p>{banner.description}</p>
            <button>{banner.cta}</button>
            <img src={banner.image} alt={banner.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  const filePath = path.join(process.cwd(), 'src/data/adBanners.json');
  const jsonData = await import(filePath);
  const adBanners: AdBannerData[] = jsonData.default;

  return {
    props: {
      adBanners,
    },
  };
};

export default Home;