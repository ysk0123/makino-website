import Meta from 'components/meta'
import Container from "components/container";
import Hero from "components/hero";
import PostBody from "components/post-body";
import Contact from 'components/contact';
import { TwoColumn, TwoColumnMain, TwoColumnSidebar } from 'components/two-column'
import Image from 'next/image'
import eyecatch from 'images/laceflower.jpg'


export default function About() {
  return (
    <Container>
        <Meta
          pageTitle="About"  pageDesc="About development activities"
          pageImg={eyecatch.src}
          pageImgW={eyecatch.width}
          pageImgH={eyecatch.height}
      />
         <Hero title="About" subtitle="artist makino 経歴" />
    <TwoColumn>
<TwoColumnMain>
<figure>
  <Image
    src={eyecatch}
    alt=""
    layout="responsive"
    sizes="(min-width: 1152px) 1152px,100vw"
    priority
    placeholder="blur"
    />
</figure>
      <PostBody>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
        <p>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit
          amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
          do eiusmod tempor incididunt ut labore et dol
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
        <p>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit
          amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
          do eiusmod tempor incididunt ut labore et dol
        </p>
      </PostBody>
</TwoColumnMain>
<TwoColumnSidebar>

      <Contact />
</TwoColumnSidebar>
    
    </TwoColumn>
    </Container>
  );
}
