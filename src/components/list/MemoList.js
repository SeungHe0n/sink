import PropTypes from 'prop-types';
import Memo from '../Memo';

MemoList.propTypes = {
  memos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      checked: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  onRemove: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onPopup: PropTypes.func.isRequired,
};

export default function MemoList({
  memos,
  onRemove,
  onToggle,
  onEdit,
  onPopup,
}) {
  return (
    <>
      {memos
        .slice(0)
        .reverse()
        .map((memo) => (
          <Memo
            memo={memo}
            key={memo.id}
            onRemove={onRemove}
            onToggle={onToggle}
            onEdit={onEdit}
            onPopup={onPopup}
          />
        ))}
    </>
  );
}
