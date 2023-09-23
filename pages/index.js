import config from "@config/config.json";
import Base from "@layouts/Baseof";
import Cta from "@layouts/components/Cta";
import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import { getListPage } from "../lib/contentParser";

const Home = ({ frontmatter }) => {
  const { banner, feature, services, workflow, call_to_action } = frontmatter;
  const { title } = config.site;

  return (
    <Base title={title}>
      {/* Banner */}
      <section className="section pb-[50px]">
        <div className="container">
          <div className="row text-center">
            <div className="mx-auto lg:col-10">
              <h1 className="font-primary font-bold">{banner.title}</h1>
              <p className="mt-4">{markdownify(banner.content)}</p>
              {banner.button.enable && (
                <Link
                  className="btn btn-primary mt-4"
                  href={banner.button.link}
                  rel={banner.button.rel}
                >
                  {banner.button.label}
                </Link>
              )}
              <Image
                className="mx-auto mt-12 rounded-lg"
                src={banner.image}
                width={750}
                height={390}
                alt="banner image"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="section bg-theme-light">
        <div className="container">
          <div className="text-center">
            <h2>About us</h2>
            <p className="mt-5 ">
              Founded in 2022 as a company specializing in 3PL services, VJ Supply Chain has emerged as a prominent logistics solutions provider in Canada with a strong customer-centric approach. We excel at simplifying, quantifying, qualifying, and detailing the intricate logistics involved in transporting cargo from point A to point B.
            </p>
          </div>
          <div className="container section">
            <div className="flex md:flex-row flex-col mt-5 justify-between items-center">
              <div className="w-full md:w-1/2 mx-auto">
                <h2 className="font-bold leading-[40px]">Vision & Strategy</h2>
                <p className="mt-5">
                  At VJ Supply Chain, our vision is to pioneer innovative and sustainable logistics solutions. Our strategy revolves around leveraging technology and global supply chain expertise for seamless and cost-effective services. We&apos;re dedicated to optimizing operations, reducing environmental impact, and exceeding client expectations through strategic excellence.
                </p>
              </div>
              <div className="w-full md:w-1/2">
                <div>
                  <Image
                    className="mx-auto rounded-lg"
                    src={banner.image}
                    width={750}
                    height={390}
                    alt="banner image"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Why choose us */}
      <section className="section ">
        <div className="container">
          <div className="text-center">
            <h2>Why choose us</h2>
            <p className="mt-5 ">
              Innovative Solutions, Reliability, Cost-Efficiency, Environmental Responsibility, Global Expertise, Customer Satisfaction, Advanced Technology, Customization, Experienced Team, Industry Leadership, Proven Track Record, Partnership Approach, Global Reach, Sustainability Focus.
            </p>
          </div>
          {/* <div className="container">
            <div className="flex flex-row mt-5 justify-between items-center">
              <div className="w-1/2 mr-10">
                <div>
                  <Image
                    className="mx-auto rounded-lg"
                    src={banner.image}
                    width={750}
                    height={390}
                    alt="banner image"
                    priority
                  />
                </div>
              </div>
              <div className="w-1/2 mx-auto">
                <h2 className="font-bold leading-[40px]">Vision & Strategy</h2>
                <p className="mt-5">
                  At VJ Supply Chain, our vision is to pioneer innovative and sustainable logistics solutions. Our strategy revolves around leveraging technology and global supply chain expertise for seamless and cost-effective services. We're dedicated to optimizing operations, reducing environmental impact, and exceeding client expectations through strategic excellence.
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </section>

      {/* Features */}
      <section className="section bg-theme-light">
        <div className="container">
          <div className="text-center">
            <h2>{markdownify(feature.title)}</h2>
            <p className="mt-5 ">{markdownify(feature.description)}</p>
          </div>
          <div className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-2">
            {feature.features.map((item, i) => (
              <div
                className="feature-card rounded-xl bg-white p-5 pb-8 text-center"
                key={`feature-${i}`}
              >
                {item.icon && (
                  <Image
                    className="mx-auto"
                    src={item.icon}
                    width={30}
                    height={30}
                    alt=""
                  />
                )}
                <div className="mt-4">
                  {markdownify(item.name, "h3", "h5")}
                  <p className="mt-3">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* services */}
      {services.map((service, index) => {
        const isOdd = index % 2 > 0;
        return (
          <section
            key={`service-${index}`}
            className={`section ${isOdd && "bg-theme-light"}`}
          >
            <div className="container">
              <div className="items-center gap-8 md:grid md:grid-cols-2">
                {/* Carousel */}
                <div className={`service-carousel ${!isOdd && "md:order-2"}`}>
                  <Swiper
                    modules={[Autoplay, Pagination]}
                    pagination={
                      service.images.length > 1 ? { clickable: true } : false
                    }
                    autoplay={{
                      delay: 5000,
                      disableOnInteraction: false,
                    }}
                    init={service?.images > 1 ? false : true}
                  >
                    {/* Slides */}
                    {service?.images.map((slide, index) => (
                      <SwiperSlide key={index}>
                        <Image src={slide} alt="" width={600} height={500} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

                {/* Content */}
                <div
                  className={`service-content mt-5 md:mt-0 ${!isOdd && "md:order-1"
                    }`}
                >
                  <h2 className="font-bold leading-[40px]">{service?.title}</h2>
                  <ul className="list-disc mt-4 mb-2 ml-5">
                    <li>Apparel</li>
                    <li>Automotive</li>
                    <li>Construction</li>
                    <li>Consumer Packaged Goods</li>
                    <li>Healthcare</li>
                    <li>Manufacturers</li>
                    <li>Renewable Energy (Wind, Solar, Hydro)</li>
                    <li>Oil and Gas</li>
                  </ul>
                  {service.button.enable && (
                    <Link
                      href={service?.button.link}
                      className="cta-link inline-flex items-center text-primary"
                    >
                      {service?.button.label}
                      <Image
                        className="ml-1"
                        src="/images/arrow-right.svg"
                        width={18}
                        height={14}
                        alt="arrow"
                      />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* workflow */}
      {/* <section className="section pb-0">
        <div className="mb-8 text-center">
          {markdownify(
            workflow.title,
            "h2",
            "mx-auto max-w-[400px] font-bold leading-[44px]"
          )}
          {markdownify(workflow.description, "p", "mt-3")}
        </div>
        <Image
          src={workflow.image}
          alt="workflow image"
          width={1920}
          height={296}
        />
      </section> */}

      {/* Cta */}
      {/* <Cta cta={call_to_action} /> */}
    </Base>
  );
};

export const getStaticProps = async () => {
  const homePage = await getListPage("content/_index.md");
  const { frontmatter } = homePage;
  return {
    props: {
      frontmatter,
    },
  };
};

export default Home;
