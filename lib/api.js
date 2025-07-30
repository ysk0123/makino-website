import { createClient } from 'microcms-js-sdk'

export const client = createClient({
    serviceDomain: process.env.SERVICE_DOMAIN,
    apiKey: process.env.API_KEY,
})

export async function getPostBySlug(slug){
    try {
        const post = await client.get({
            endpoint: 'blogs',
            queries: { filters: `slug[equals]${slug}`},
        })
        return post.contents[0]
    } catch (err) {
        console.log('~~ getPostBySlug ~~')
        console.log(err)
    }
}
export async function getAllSlugs(limit = 100){
    try{
        const slugs = await client.get({
            endpoint: 'blogs',
            queries: { fields: 'title,slug', orders: '-publishDate', limit: limit },
        })
        return slugs.contents
    } catch (err) {
        console.log('~~ getAllSlugs ~~')
        console.log(err)
    }
}

export async function getAllCategories(limit = 100){
    try {
        const categories = await client.get({
            endpoint: 'categories',
            queries: {
                fields: 'name,ids,slug',
                limit: limit,
            },
        })
        return categories.contents
    }   catch (err) {
        console.log('~~ getAllCategories ~~')
        console.log(err)
    }
}

export async function getAllPosts(limit = 100){
    try {
        const posts = await client.get({
            endpoint: 'blogs',
            queries: {
                fields: 'title,slug,eyecatch,publishDate',
                orders: '-publishDate',
                limit: limit,
            },
        })
        console.log('microCMS response:', JSON.stringify(posts.contents, null, 2))
        return posts.contents
    } catch (err) {
        console.log('~~ getAllPosts ~~')
        console.log(err)
        return []
    }
}

//ギャラリー用画像データを取得する関数
export async function getGalleryImages(limit = 100) {
    try {
        //microCMSの「gallery」エンドポイントから画像データを取得
        //ここでは、画像のID、タイトル、画像URL、公開日時を取得する
        //公開日時でソートし、指定された数の画像を取得する
        //fieldsパラメータで必要なフィールドを指定
        //ordersパラメータで公開日時の降順にソート
        //limitパラメータで取得する画像の数を制限
        //返り値は画像データの配列
        //例: getGalleryImages(10) で最新の10件の画像データを取得
        //エラーハンドリングも含める
        //microCMSのクライアントを使用してAPIからデータを取得
        //取得したデータは、画像のID、タイトル、画像URL、公開日時
        //などの情報を含むオブジェクトの配列として返す
        //もしエラーが発生した場合は、コンソールにエラーを出力し、空の配列を返す
        //この関数は、ブログのギャラリーセクションで使用され
        //最新の画像を表示するために利用される
        //microCMSのクライアントを作成
        //serviceDomainとapiKeyは環境変数から取得
        //APIからデータを取得する

        //endpointは「gallery」、queriesで必要なフィールドと条件を指定
        //fields: 取得するフィールドを指定
        //orders: 公開日時で降順にソート
        //limit: 取得する画像の数を制限
        //contentsプロパティから画像データの配列を取得
        //取得した画像データを返す
        //もしエラーが発生した場合は、エラーメッセージをコンソールに出力
        //そして空の配列を返す
        //この関数は、ブログのギャラリーセクションで使用され
        //最新の画像を表示するために利用される
        //microCMSのクライアントを作成
        //serviceDomainとapiKeyは環境変数から取得
        //APIからデータを取得する
        //endpointは「gallery」、queriesで必要なフィールドと条件を指定 
        const images = await client.get({
            endpoint: 'gallery',
            queries: {
                fields: 'id,title,eyecatch,publishedAt',
                filters: 'publishedAt[exists]',
                orders: '-publishAt',
                limit: limit,
            },
        })
        return images.contents
    } catch (err) {
        console.log('~~ getGalleryImages ~~')
        console.log(err)
               return []
    }
}