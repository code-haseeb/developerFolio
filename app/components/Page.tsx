const Page: React.FC<{
  page: string;
  activePage: string;
  children: any;
}> = ({ page, activePage, children }) => (
  <article
    className={`${page} ${page === activePage ? "active" : ""}`}
    data-page={page}
  >
    {children}
  </article>
);
export default Page;
