import { PropsWithChildren } from 'react'
import NavBar from './navbar'

export default function PageLayout(props: PropsWithChildren) {
  const items = ['Transcribe', 'Summmarize', 'Collections']
  return (
    <div className="drawer">
      <input id="app-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <NavBar items={items} drawerId={'app-drawer'} />
        <div className="container mx-auto p-4">{props.children}</div>
      </div>
      <div className="drawer-side">
        <label htmlFor="app-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-60 md:w-80 bg-base-100">
          {items.map((item: string) => {
            return (
              <li key={`drawer-${item}`}>
                <a>{item}</a>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
