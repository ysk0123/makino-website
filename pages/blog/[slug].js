import { getPostBySlug, getAllSlugs } from '../../lib/api'
import { extractText } from '../../lib/extract-text'
import { prevNextPost } from '../../lib/prev-next-post'
import Meta from '../../components/meta'
import Container from '../../components/container'
import PostHeader from '../../components/post-header'
import PostBody from '../../components/post-body'
import { TwoColumn, TwoColumnMain, TwoColumnSidebar } from '../../components/two-column'
import ConvertBody from '../../components/convert-body'
import PostCategories from '../../components/post-categories'
import Pagination from '../../components/pagination'
import Image from 'next/image'
import { getPlaiceholder } from 'plaiceholder'
import path from 'path'

//　ローカルの代替アイキャッチ画像
import { eyecatchLocal } from '../../lib/constants'

export default function Post ({
    title,
    publish,
    content,
    eyecatch,
    categories,
    description,
    prevPost,
    nextPost,
}) {
    return (
        <Container>
            <Meta
                pageTitle={title}
                pageDesc={description}
                pageImg={eyecatch.url}
                pageImgW={eyecatch.width}
                pageImgH={eyecatch.height}
            />
            <article>
            <PostHeader title={title} subtitle="Blog Article" publish={publish} />
            <figure>
                <Image
                    src={eyecatch.url}
                    alt=""
                    width={eyecatch.width}
                    height={eyecatch.height}
                    sizes="(min-width: 1152px) 1152px, 100vw"
                    priority
                    placeholder={isExternalUrl(eyecatch.url) ? undefined : "blur"}
                    blurDataURL={eyecatch.blurDataURL}
                    style={{
                        width: '100%',
                        height: 'auto',
                    }}
                />
            </figure>
            <TwoColumn>
                <TwoColumnMain>
                    <PostBody>
                        <ConvertBody contentHTML= {content} />
                    </PostBody>
                </TwoColumnMain>
                <TwoColumnSidebar>
                    <PostCategories categories={categories} />
                </TwoColumnSidebar>
            </TwoColumn>
            <Pagination
                prevText={prevPost.title}
                prevUrl={prevPost.slug ? `/blog/${prevPost.slug}` : ''}
                nextText={nextPost.title}
                nextUrl={nextPost.slug ? `/blog/${nextPost.slug}` : ''}
            />
            </article>
        </Container>
    )
}

export async function getStaticPaths(){
    const allSlugs = await getAllSlugs()
    
    return{
        paths: allSlugs.map(({ slug }) => `/blog/${slug}`),
        fallback: false,
    }
}

function isExternalUrl(url) {
  return url.startsWith('http://') || url.startsWith('https://');
}

export async function getStaticProps(context){
    const slug = context.params.slug
    const post = await getPostBySlug(slug)

    if (!post) {
        return {
            notFound: true,
        }
    }

    const description = extractText(post.content)
    const eyecatch = post.eyecatch ?? eyecatchLocal

    let blurDataURL = '';
    if (!isExternalUrl(eyecatch.url)) {
        // ローカル画像の場合のみplaiceholderを使う
        let imagePath = eyecatch.url;
        if (imagePath.startsWith('/')) {
            imagePath = path.join(process.cwd(), 'public', imagePath);
        }
        const { base64 } = await getPlaiceholder(imagePath);
        blurDataURL = base64;
    }
    eyecatch.blurDataURL = blurDataURL;

    const allSlugs = await getAllSlugs()
    const [prevPost, nextPost] = prevNextPost(allSlugs, slug)

    return {
        props:{
            title: post.title,
            publish: post.publishDate,
            content: post.content,
            eyecatch: eyecatch,
            categories: post.categories,
            description: description,
            prevPost: prevPost,
            nextPost: nextPost,
        },
    }
}