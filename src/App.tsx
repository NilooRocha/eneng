import './styles/main.css'
import Typewriter from 'typewriter-effect';


function App() {

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20 "   >
      <img className="max-w-[300px]" src="/logo.svg" alt="" />

      <h1 className=" text-6xl text-white font-black m-3"  >
        Il tuo <span className="bg-nlw-gradient text-transparent bg-clip-text " >sito</span> con una nuova identita!
      </h1>

      <div className='w-[60rem] h-[20rem]  bg-[#1D1E22] m-10  rounded-[10px] shadow-sm ' >
        <div className="flex m-4" >
          <div className="w-[0.8rem] h-[0.8rem]  bg-[#ff3b47]  rounded-[200px] m-1 " />
          <div className="w-[0.8rem] h-[0.8rem]  bg-[#ffc100]  rounded-[200px] m-1 " />
          <div className="w-[0.8rem] h-[0.8rem]  bg-[#00d742]  rounded-[200px] m-1 " />
        </div>
        <div className='text-3xl text-white flex flex-col  ml-20 ' >
          <Typewriter
            options={{
              autoStart: true,
              delay: 35,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString("Stanco di vedere i siti brutti del 2005?")
                .pauseFor(2000)
                .deleteAll()
                .typeString("Tranquillo, noi abbiamo la soluzione ideale per te!")
                .pauseFor(2000)
                .deleteAll()
                .typeString(`
                <div> Abbiamo nel nostro team: </div>
                <div> • Programattori sperti </div>
                <div> • Designers qualificati  </div>
                <div> • Gestione del analitycs </div>               
                <div> • E tanto altro! </div>               
                <div> Tutto per rendere il tuo sito il migliore SITO </div>   `)
                .start()
            }}
          />

        </div>
      </div>

      <h1 className=" text-3xl text-white font-bold m-3"  >
        Mandaci una mail per saperne di piu:
      </h1>
      <button className='font-normal text-5xl text-yellow-50 w-[30rem] h-[5rem]  bg-[#4C4F5A] flex flex-col items-center   rounded-[10px] shadow-sm ' >
        <a href="mailto:info@email.com" className="flex flex-col items-center m-3"> info@email.com</a>
      </button>

    </div>
  )
}

export default App
