import { useForm } from 'react-hook-form'
import RadioGroup from './form/form-components/radio-group'
import Form from './form/form'
import { Input } from './form/form-components/input'

export default function TranscribeForm() {
  const { watch } = useForm<any>()
  const onSubmit = (data: any) => console.log(data)

  console.log(watch('transcriptionTarget'))

  return (
    <Form onSubmit={onSubmit}>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Select audio file to transcribe.</span>
        </label>
        <Input type="file" name="audioFile" />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Transcribe using Local or OpenAI?</span>
        </label>
        <RadioGroup
          name="transcriptionTarget"
          options={[
            { label: 'Local', value: 'local' },
            { label: 'OpenAI', value: 'openai' },
          ]}
        />
      </div>
      <Input type="submit" value="Submit"></Input>
    </Form>
  )
}
