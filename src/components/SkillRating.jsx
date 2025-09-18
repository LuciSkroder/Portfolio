export default function SkillRating({ rating }) {
    return (
    <div>
      {[1, 2, 3, 4, 5].map((star) => {
        return (  
          <span
            className='start'
            style={{
              color: rating >= star ? '#AD98C4' : 'gray',
              fontSize: `24px`,
            }}
          >
            {' '}
            ★{' '}
          </span>
        )
      })}
    </div>
  )
}