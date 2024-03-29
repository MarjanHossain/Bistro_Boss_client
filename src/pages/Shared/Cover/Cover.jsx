import { Parallax, Background } from 'react-parallax';

const Cover = ({ img, heading }) => {
    return (
        <section >
            <Parallax
                blur={{ min: -3000, max: 50 }}
                bgImage={img}
                bgImageAlt="the dog"
                strength={-200}
            >
                <div className="hero h-[600px]">
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md bg-gray-500 w-full bg-opacity-30 py-10">
                            <h1 className="mb-5 text-purple-700 text-5xl font-bold uppercase">{heading}</h1>
                            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

                        </div>
                    </div>
                </div>
            </Parallax>

        </section>
    );
};

export default Cover;