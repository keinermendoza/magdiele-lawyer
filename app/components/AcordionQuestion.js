import { useState, useRef, useEffect } from "react"

export default function AcordionQuestion({children, question}) {
  const questionRef = useRef(null)
  const answerRef = useRef(null)
  const [isOpen, setIsOpen] = useState(false)
  const [widthQuestion, setWidthQuestion] = useState(null)
  const [heightAnswer, setHeightAnswer] = useState(null)
  
  useEffect(() => {
    setWidthQuestion(questionRef.current.clientWidth)
  }, [])

  useEffect(() => {
    setHeightAnswer(answerRef.current.clientHeight)
  }, [widthQuestion])


  const toogleVisibility = () => {
    setIsOpen(previosState => !previosState)
  }

  return (
    <article className="text-lg lg:text-xl text-c-brown-primary">
      <header
        onClick={toogleVisibility}
        ref={questionRef} 
        className="w-fit flex gap-3 items-center mb-2 rounded-lg px-3 py-2 bg-c-gold-primary cursor-pointer hover:scale-[102%] duration-300 transition-all">
          <span>
            {question}
          </span>
          {
            isOpen 
            ? (
              <svg  className="shrink-0" width="24" height="24" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M15.625 0.875C6.99519 0.875 0 7.87019 0 16.5C0 25.1298 6.99519 32.125 15.625 32.125C24.2548 32.125 31.25 25.1298 31.25 16.5C31.25 7.87019 24.2548 0.875 15.625 0.875ZM20.625 18C20.9438 18 21.3996 17.7254 21.625 17.5C21.8504 17.2746 22.125 16.8188 22.125 16.5C22.125 16.1812 21.8504 15.7254 21.625 15.5C21.3996 15.2746 20.9438 15 20.625 15H10.625C10.3062 15 9.8504 15.2746 9.625 15.5C9.3996 15.7254 9.125 16.1812 9.125 16.5C9.125 16.8188 9.3996 17.2746 9.625 17.5C9.8504 17.7254 10.3062 18 10.625 18H20.625Z" fill="#2F2204"/>
              </svg>
            )
            : (
              <svg  className="shrink-0" width="24" height="24" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M15.75 32.25C19.9272 32.25 23.9332 30.5906 26.8869 27.6369C29.8406 24.6832 31.5 20.6772 31.5 16.5C31.5 12.3228 29.8406 8.31677 26.8869 5.36307C23.9332 2.40937 19.9272 0.75 15.75 0.75C11.5728 0.75 7.56677 2.40937 4.61307 5.36307C1.65937 8.31677 0 12.3228 0 16.5C0 20.6772 1.65937 24.6832 4.61307 27.6369C7.56677 30.5906 11.5728 32.25 15.75 32.25ZM17.4375 9.1875V14.8125H23.0625C23.5101 14.8125 23.9393 14.9903 24.2557 15.3068C24.5722 15.6232 24.75 16.0524 24.75 16.5C24.75 16.9476 24.5722 17.3768 24.2557 17.6932C23.9393 18.0097 23.5101 18.1875 23.0625 18.1875H17.4375V23.8125C17.4375 24.2601 17.2597 24.6893 16.9432 25.0057C16.6268 25.3222 16.1976 25.5 15.75 25.5C15.3024 25.5 14.8732 25.3222 14.5568 25.0057C14.2403 24.6893 14.0625 24.2601 14.0625 23.8125V18.1875H8.4375C7.98995 18.1875 7.56072 18.0097 7.24426 17.6932C6.92779 17.3768 6.75 16.9476 6.75 16.5C6.75 16.0524 6.92779 15.6232 7.24426 15.3068C7.56072 14.9903 7.98995 14.8125 8.4375 14.8125H14.0625V9.1875C14.0625 8.73995 14.2403 8.31072 14.5568 7.99426C14.8732 7.67779 15.3024 7.5 15.75 7.5C16.1976 7.5 16.6268 7.67779 16.9432 7.99426C17.2597 8.31072 17.4375 8.73995 17.4375 9.1875Z" fill="#2F2204"/>
              </svg>
            )
          }
          
      </header>
      
      <div
        style={{
          width:widthQuestion,
          height: isOpen ? heightAnswer +'px' : 0,
        }} 
        className='bg-white rounded-lg h-full overflow-hidden transition-all duration-500'
        >
          <p 
            ref={answerRef}
            className="px-3 py-2 overflow-hidden">
            {children}
          </p>
        </div>
    </article> 
  )
}
