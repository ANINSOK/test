
export default function RootLayout({ children }) {
  return (
      <div>
        <p>현대카드 무이자이벤트중</p> 
          {children} {/* <--- page.js 들어가는 부분 */}
        </div>
  )
}
