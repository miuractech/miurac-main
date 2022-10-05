import { useSelector } from "react-redux"
import { Outlet } from "react-router-dom"
import { RootState } from "../../app/store"
// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {}

// eslint-disable-next-line no-empty-pattern
export default function Enquiry({}: Props) {
  const claims = useSelector((state:RootState)=>state.user.claims) as any
  if(claims.enq) return (<Outlet />)
  else return <div>ask admin for access</div>
}