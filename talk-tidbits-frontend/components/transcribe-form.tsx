import { useForm } from 'react-hook-form'
import RadioGroup from './form/form-components/radio-group'
import Form from './form/form'
import { Input } from './form/form-components/input'

export default function TranscribeForm() {
  const { watch } = useForm<any>()
  const onSubmit = (data: any) => console.log(data)

  console.log(watch('transcriptionTarget'))

  return (
    <Form
      onSubmit={onSubmit}
      className="flex flex-col items-center w-full gap-6"
    >
      <div className="form-control w-full">
        <label className="label">
          <span className="label-text">Select audio file to transcribe.</span>
        </label>
        <Input
          type="file"
          name="audioFile"
          className="file-input file-input-bordered file-input-md w-full"
        />
      </div>
      <div className="w-full">
        <label className="label">
          <span className="label-text">Transcribe using Local or OpenAI?</span>
        </label>
        <div className="form-control">
          <RadioGroup
            name="transcriptionTarget"
            options={[
              { label: 'Local', value: 'local' },
              { label: 'OpenAI', value: 'openai' },
            ]}
          />
        </div>
      </div>
      <Input type="submit" value="Submit" className="btn" />
    </Form>
  )
}
