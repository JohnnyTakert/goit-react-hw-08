import css from './Section.module.css';

const Section = ({ children }) => {
  return (
    <>
      <div className={css.box}>{children}</div>
    </>
  );
};
export default Section;
