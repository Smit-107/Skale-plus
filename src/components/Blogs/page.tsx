'use client';
import React, { useEffect, useState } from 'react';
import { CircularProgress } from '@mui/material';
import BlogCard from './BlogCard';
import PublicHeader from '@/components/publicLayout/PublicHeader';
import PublicPartners from '@/components/publicLayout/PublicPartners';
import PublicFooter, { FooterLink } from '@/components/publicLayout/PublicFooter';
import InfiniteScroll from 'react-infinite-scroll-component';
import SearchInput from './SearchInput';
import { useDispatch, useSelector } from 'react-redux';
import articleActions from '@/redux/article/actions';
import { UseResizeScreenLayout639 } from '@/components/core/useScreenResize';
import useSignedInUser from '@/hooks/useSignedInUser';
import LoadingSkeleton from './LoadingSkeleton';

const Blogs = () => {
  const [selectedTopic, setSelectedTopic] = useState('');

  const [searchKeyWord, setSearchKeyWord] = useState('');

  const [page, setPage] = useState(1);

  const { isSignedIn } = useSignedInUser();

  const dispatch = useDispatch();
  const isScreenWide = UseResizeScreenLayout639();

  const { allArticles, isLoadingArticles, allArticlesTotalCount, trendingTopics } =
    useSelector((state: any) => state.article);

  const handleAppend = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    dispatch({
      type: articleActions.GET_ALL_ARTICLES,
      payload: {
        page,
        limit: 10,
        search: searchKeyWord,
        hashtag: selectedTopic,
        shouldApiCall: true
      }
    });
  }, [dispatch, page, searchKeyWord, selectedTopic]);

  useEffect(() => {
    dispatch({
      type: articleActions.TRENDING_TOPICS,
      payload: { shouldApiCall: true }
    });
  }, [dispatch]);

  useEffect(() => {
    if (isSignedIn) {
      dispatch({
        type: articleActions.USER_SAVED_ARTICLES,
        payload: { shouldApiCall: true }
      });
    }
  }, [dispatch, isSignedIn]);

  return (
    <>
      <PublicHeader />

      <div className="tw-flex tw-justify-center lg:tw-pb-16 tw-container">
        <div className="tw-flex tw-flex-col tw-gap-10 sm:tw-gap-20 tw-mx-6 sm:tw-mx-16">
          <div className="tw-flex tw-flex-col tw-font-Poppins tw-text-[48px] tw-font-bold tw-text-[#000] tw-text-center tw-gap-4 lg:tw-gap-6">
            <span className="tw-text-[26px] md:tw-text-[30px] lg:tw-text-[48px] tw-font-bold tw-p-4 sm:tw-p-0">
              Blogs
            </span>
            <span className="tw-text-[16px] md:tw-text-[18px] lg:tw-text-[25px] tw-font-normal tw-p-2 md:tw-px-20 tw-text-[#000]">
              Explore, learn, and be inspired.
            </span>
          </div>

          <div className="tw-flex tw-flex-col-reverse md:tw-grid md:tw-grid-cols-5 tw-gap-[5%]">
            <div className="tw-col-span-3 tw-flex tw-flex-col tw-mt-8 md:tw-mt-0">
              <div className={`tw-relative`}>
                <div
                  className={`${
                    allArticles?.length > 0 && isLoadingArticles && page === 1
                      ? 'tw-opacity-50'
                      : 'tw-opacity-100'
                  }`}
                >
                  {allArticles?.length > 0 ? (
                    <>
                      <div className="sm:tw-hidden tw-flex tw-flex-col tw-gap-12">
                        {allArticles?.map((itm: any, index: React.Key | null | undefined) => (
                          <BlogCard
                            key={index}
                            selectedTopic={selectedTopic}
                            itm={itm}
                            searchKeyWord={searchKeyWord}
                            isSignedIn={isSignedIn}
                          />
                        ))}
                      </div>

                      {isScreenWide && (
                        <InfiniteScroll
                          className="!tw-overflow-hidden !tw-p-0.5"
                          dataLength={allArticles?.length}
                          next={handleAppend}
                          hasMore={allArticles?.length < allArticlesTotalCount}
                          scrollThreshold={1}
                          loader={
                            <div className="tw-text-center tw-my-10 d-flex tw-flex-col tw-gap-12">
                              {[0, 1].map(itm => (
                                <LoadingSkeleton key={itm} />
                              ))}
                            </div>
                          }
                        >
                          <div className="tw-flex tw-flex-col tw-gap-12">
                            {allArticles?.map(
                              (itm: any, index: React.Key | null | undefined) => (
                                <BlogCard
                                  key={index}
                                  selectedTopic={selectedTopic}
                                  itm={itm}
                                  searchKeyWord={searchKeyWord}
                                  isSignedIn={isSignedIn}
                                />
                              )
                            )}
                          </div>
                        </InfiniteScroll>
                      )}

                      {allArticles?.length < allArticlesTotalCount && (
                        <div className="sm:tw-hidden">
                          {isLoadingArticles && (
                            <div className="tw-text-center tw-my-10 d-flex tw-flex-col tw-gap-12">
                              {[0, 1].map(itm => (
                                <LoadingSkeleton key={itm} />
                              ))}
                            </div>
                          )}
                          <div className="tw-flex tw-items-center tw-justify-center tw-mt-6">
                            <button
                              onClick={() => setPage(page + 1)}
                              className="tw-flex sm:tw-hidden tw-text-center tw-bg-[#FFA500] tw-rounded-[18px] tw-px-[30px] tw-py-[12px] tw-text-[#fff] tw-font-Montserrat tw-text-[12px] tw-font-medium tw-not-italic tw-leading-normal"
                            >
                              See More
                            </button>
                          </div>
                        </div>
                      )}
                    </>
                  ) : (
                    !isLoadingArticles && (
                      <span className="tw-flex tw-items-center tw-justify-center tw-mt-20 tw-font-semibold">
                        No blog found
                        {searchKeyWord && (
                          <>
                            <span className="tw-ml-2">with</span>
                            <span className="tw-text-[#ffa500] tw-ml-2 tw-underline">
                              {searchKeyWord}
                            </span>
                          </>
                        )}
                        {selectedTopic && (
                          <>
                            <span className="tw-ml-2"> {searchKeyWord ? '&' : 'with'} </span>
                            <span className="tw-text-[#ffa500] tw-ml-2 tw-underline">
                              {selectedTopic}
                            </span>
                          </>
                        )}
                      </span>
                    )
                  )}
                </div>
                {isLoadingArticles && (
                  <div className="tw-absolute tw-top-[100px] tw-left-1/2">
                    <CircularProgress className="!tw-text-[#ffa500]" />
                  </div>
                )}
              </div>
            </div>
            <div className="tw-col-span-2">
              <div className="tw-sticky tw-top-[82px]">
                <div className="tw-px-0 md:tw-px-[10px] tw-border-b tw-border-b-[#EFEFEF] tw-pb-5 md:tw-pb-10">
                  <div className="tw-flex tw-flex-col gap-4 sm:tw-gap-6 tw-w-full">
                    <p className="tw-text-[#000] tw-font-Poppins tw-text-[20px] tw-not-italic tw-font-medium tw-leading-[130%] tw-tracking-[-0.4px] tw-flex-nowrap">
                      Trending Topics
                    </p>

                    <div className="tw-flex tw-items-center sm:tw-hidden tw-w-full">
                      <SearchInput
                        searchKeyWord={searchKeyWord}
                        setSearchKeyWord={setSearchKeyWord}
                        setPage={setPage}
                      />
                    </div>
                  </div>
                  <div className="tw-flex tw-items-center tw-flex-wrap tw-gap-3 tw-mt-8">
                    {trendingTopics?.map(
                      (topic: any, index: React.Key | null | undefined) => (
                        <p
                          key={index}
                          className={`tw-cursor-pointer tw-rounded-[19px] tw-px-[20px] tw-py-[11px] ${
                            selectedTopic === topic
                              ? 'tw-text-[#fff] tw-bg-[#FFA500]'
                              : 'tw-text-[#000] tw-bg-[#D9D9D9]'
                          } tw-font-Montserrat tw-text-[14px] sm:tw-text-[16px] tw-not-italic tw-font-medium tw-leading-[130%] tw-tracking-[-0.24px] tw-flex tw-items-center`}
                          onClick={() => {
                            setSelectedTopic(selectedTopic === topic ? '' : topic);
                            setPage(1);
                          }}
                        >
                          {topic}
                        </p>
                      )
                    )}
                  </div>

                  <div className="tw-mt-[43px] tw-hidden sm:tw-flex tw-items-center tw-justify-end">
                    <SearchInput
                      searchKeyWord={searchKeyWord}
                      setSearchKeyWord={setSearchKeyWord}
                      setPage={setPage}
                    />
                  </div>
                </div>
                <div className="tw-hidden md:tw-flex tw-mt-5">
                  <FooterLink />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="tw-block tw-mt-5 sm:tw-mt-0 sm:tw-hidden">
        {/* <PublicPartners /> */}
        <PublicFooter />
      </div>
    </>
  );
};

export default Blogs;
