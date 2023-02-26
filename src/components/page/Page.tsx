import styles from 'components/page/Page.module.scss';

interface PageProps {
  children: React.ReactNode | React.ReactNode[];
}

const Page = ({ children }: PageProps) => {
  return (
    <div className={styles.page}>
      <h1>Vite + React</h1>
      {children}
    </div>
  );
};

export default Page;
