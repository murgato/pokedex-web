import { useEffect, useRef } from "react";

interface Props {
  onLoading: any;
  isStart: boolean;
}

const InfiniteScroll = ({ onLoading, isStart }: Props) => {
  const infiniteScrollRef =
    useRef() as React.MutableRefObject<HTMLInputElement>;

  useEffect(() => {
    const options = {
      root: null,
      rootMagin: "0px",
      threshold: 1.0,
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (isStart) {
        if (entry.isIntersecting) {
          observer.disconnect();
          onLoading();
        }
      }
    }, options);

    observer.observe(infiniteScrollRef.current);
    return () => observer.disconnect();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div ref={infiniteScrollRef} />;
};

export default InfiniteScroll;
