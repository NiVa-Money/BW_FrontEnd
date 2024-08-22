import Image from 'next/image'
import Link from 'next/link'

const partners = [
  { name: 'NDTV Profit', logo: '/images/ndtv.png', url: 'https://www.ndtvprofit.com/technology/purpleant-technologies-launches-ai-no-code-chatbot-platform' },
  { name: 'CXO Today', logo: '/images/cxo.png', url: 'https://cxotoday.com/press-release/purpleant-technologies-launches-botwot-revolutionary-ai-no-code-chatbot-platform/' },
  { name: 'Express Computer', logo: '/images/expresscomp.png', url: 'https://www.expresscomputer.in/news/purpleant-technologies-launches-botwot-revolutionary-ai-no-code-chatbot-platform/115267/' },
  { name: 'CRN', logo: '/images/crn.png', url: 'https://www.crn.in/news/purpleant-technologies-launches-botwot-revolutionary-ai-no-code-chatbot-platform/' },
]

const Media: React.FC = () => {
  return (
    <div className="text-white text-center">
      <h1 className="text-6xl font-black">Media</h1>
      <div className="flex justify-around items-center flex-wrap">
        {partners.map((partner) => (
          <div key={partner.name} className="flex-1 max-w-xs">
            <Link href={partner.url} target="_blank" rel="noopener noreferrer">
              <Image
                src={partner.logo}
                alt={partner.name}
                width={150}
                height={0}
                layout="responsive"
                className="cursor-pointer"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Media;
