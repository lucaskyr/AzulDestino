import React from 'react'

const Item = () => {
  return (
    <section className='flex  flex-col rounded-lg gap-2'>
        <a href="/">
            <div className=' shadow-lg shadow-sky-200  rounded-lg'>
                <img className=' object-cover rounded-lg aspect-square' src="https://a0.muscache.com/im/pictures/1ccd3a06-358e-4bec-8146-1e366d2a628b.jpg?im_w=720" alt="" />
            </div>
            <div>
                <h3 className='font-semibold'>Bairro Mellos, brasil</h3>
            </div>
            <div>
                <p className='truncate'>A Cabana do Sossego foi inspirada nas Cabanas americanas e canadenses. Um encontro lindo da natureza com a Arquitetura.
    Feita toda em madeira rústica, e decorada com todo luxo e design para que o hospede tenha uma experiência inesquecível com requinte e aconchego. Alem de contato com a natureza, descanso e tranquilidade
    Aproveite o sossego de nossa região para curtir momentos a dois, descansar e se divertir na Serra da Mantiqueira.</p>
            </div>
            <div>
                <p><span className='font-semibold'>R$8.445</span> por 5 noites</p>
            </div>
        </a>
    </section>
  )
}

export default Item