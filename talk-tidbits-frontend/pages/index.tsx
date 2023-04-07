import TranscribeForm from '@/components/transcribe-form'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>TalkTidbits</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col items-center gap-6">
        <div className="w-full sm:w-3/4 md:w-1/2">
          <TranscribeForm />
        </div>
        <textarea
          placeholder="Transcription Output"
          className="textarea textarea-bordered textarea-md w-full"
        ></textarea>
      </div>
    </>
  )
}
