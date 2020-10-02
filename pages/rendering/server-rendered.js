import Head from 'next/head'
import Layout from '../../components/layout'
import getWorldTime from '../../factory/httpCalls'
import GetTimeButton from '../../components/common-buttons'
import moment from 'moment';
const dateTimeFormat = "YYYY-MM-DD HH:mm:ss";

export default function ServerRendered({ currentTimePackage }) {
  return (
    <Layout>
		<Head>
		  <title>Server Side Rendering Sample</title>
		</Head>
		<div>
      <h3>
          <div>
              Data was fetched at:
          </div>
          {currentTimePackage &&
            moment(currentTimePackage.datetime).format(dateTimeFormat)}
      </h3>
        <h3>
          <p>
            Click to Get Current Time:
          </p>
          <GetTimeButton />
        </h3>
		</div>
    </Layout>
  )
}

export async function getServerSideProps() {
    // The value of the `props` key will be
    //  passed to the `Home` component
    let currentTimePackage = await getWorldTime();

    return {
        props: {
            currentTimePackage
        }
    }
}
