import {TypeAnimation} from 'react-type-animation';
import Logo from '../projects/subu.jpg';
import CV from './Subham Joshi NewCV.pdf';

export const Home = () => {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = CV;
    link.download = 'SubhamJoshiCV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewCV = () => {
    window.open(CV, '_blank');
  };

  return (
    <div className="flex flex-col-reverse items-center justify-center sm:px-10 lg:pb-40 xl:flex-row xl:pb-0 xl:pt-20">
      <div className="flex w-full flex-col items-center py-10 text-xl xl:w-1/2 xl:items-end">
        <div className="w-fit">
          <p className="text-xl text-themePrimaryColor">
            <span className="span">{'<'}</span>Hi 👋 my name is
          </p>

          <h1 className="pt-2 text-3xl font-bold text-primaryColor opacity-70 sm:text-5xl">
            Shubham Raj Joshi <span className="text-3xl font-extrabold text-themePrimaryColor sm:text-5xl">{'/>'}</span>{' '}
          </h1>
          <TypeAnimation
            sequence={[
              'Full-Stack Developer',
              1000,
              'Software Engineer',
              1000,
              'Back-End Developer',
              1000,
              'Database Engineer',
              1000,
            ]}
            wrapper="span"
            speed={1}
            style={{
              paddingTop: '8px',
              fontWeight: '300',
              fontSize: '1.5rem',
              color: '#768390',
              display: 'inline-block',
            }}
            repeat={Infinity}
          />
          <div className="mt-10 flex w-full flex-col sm:flex-row">
            <button
              className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
              onClick={handleDownloadCV}
            >
              Download CV
            </button>
            <button
              className="ml-4 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
              onClick={handleViewCV}
            >
              View CV
            </button>
          </div>
        </div>
      </div>
      <div className="static: w-ful top-0 flex justify-center xl:relative xl:top-[-64px] xl:w-1/2 xl:pt-10">
        <img
          className="h-[110px] w-[155px] md:h-[150px] md:w-[206px] xl:h-[470px] xl:w-[650px]"
          loading="lazy"
          src={Logo}
          alt="myPhoto"
        />
      </div>
    </div>
  );
};

export default Home;
