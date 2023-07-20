import Link from 'next/link'
import Date from '@/components/Date'

import {getSortedPostsData} from '@/lib/posts'
import Image from "next/image";

type AllPostsData = {
  date: string
  title: string
  id: string
}[]

// Change this url to change the image!
const imageUrl = 'https://unsplash.com/photos/P_nM4HIeX8Y';
const imageKey = imageUrl.split('/').at(-1);

export default function Home() {
  const allPostsData: AllPostsData = getSortedPostsData()

  return (
      <div>
        <section>
          <p className={'prose'}>
            Hi my name is Oliver, welcome to my website
          </p>
          <div className={'my-4'}>
            <i>
              Check out the repo{' '}
              <button className={'btn btn-primary'}>
                <Link href={'https://github.com/oliversloan/tech-journey-blog'}>
                  <span className={'text-primary-content'}>
                    here
                  </span>
                </Link>
              </button>
            </i>
          </div>
        </section>

        <div className={'my-4'}>
          <Image className={'rounded'} src={`https://source.unsplash.com/${imageKey}`} alt={'My Image'} width={500}
                 height={500}/>
        </div>

        <section className={'prose'}>
          <h2>Blog</h2>
          <ul>
            {allPostsData.map(({id, date, title}) => (
                <li key={id}>
                  <div>
                    <Link href={`/posts/${id}`}>{title}</Link>
                    <br/>
                    <small>
                      <Date dateString={date}/>
                    </small>
                  </div>
                </li>
            ))}
          </ul>
        </section>
      </div>
  )
}
