import LoadingDots from '../loadingDots/LoadingDots';
import './messagebubble.css';

const MessageBubble = ({ text, direction, margin, loading }) => {
  return (
    <div className={`relative max-w-[80vw] md:max-w-[50vw] lg:max-w-[32vw] lg:-mt-5 ${direction === 'left' ? "pointer-left" : "pointer-right"} ${margin}`}>
      <p className={`messageBubble ${loading ? 'w-fit' : ''}`}>
        {!loading && text }
        {loading && <LoadingDots />}
      </p>
      <span className='pointer' />
    </div>
  )
}

export default MessageBubble