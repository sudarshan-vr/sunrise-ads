import { Icon } from "@iconify/react/dist/iconify.js";

export const PackageStructure = () => {
  const Counts = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
  return (
    <div id="structure" className="md:scroll-m-[130px] scroll-m-28">
      <h3 className=" text-black text-2xl font-semibold mt-8 dark:text-white">
        Pacakge Structure
      </h3>
      <div className="rounded-2xl p-6 pt-3 border border-black/10 dark:border-white/20 mt-6">
        <div className="flex items-center gap-4">
          <h5 className="text-base font-medium mt-3 mb-1">
            Homely Tailwind Nextjs Templates
          </h5>
        </div>
        <ul className="ps-0 md:ps-5 list-unstyled">
          <li className="py-2">
            <div className="flex items-center gap-3">
              <p className="text-xl text-black dark:text-white/50" >|—</p>
              <span className="font-medium text-dark dark:text-white/50">
                <Icon
                  icon="tabler:folder"
                  className="text-primary text-base inline-block me-2"
                />
                packages
              </span>
            </div>
            <ul className="ps-5 md:ps-5 list-unstyled">
              <li className="py-0">
                <ul className="ps-2 ps-md-3 list-unstyled">
                  <li className="py-2">
                    <ul className="ps-0 md:ps-5 list-unstyled">
                      <li className="py-2">
                        <div className="flex items-center gap-3">
                          <p className="text-xl text-black dark:text-white/50" >|—</p>
                          <span className="font-medium text-dark dark:text-white/50">
                            <Icon
                              icon="tabler:folder"
                              className="text-primary text-base inline-block me-2"
                            />
                            markdown
                          </span>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="flex items-center gap-3">
                          <p className="text-xl text-black dark:text-white/50" >|—</p>
                          <span className="font-medium text-dark dark:text-white/50">
                            <Icon
                              icon="tabler:folder"
                              className="text-primary text-base inline-block me-2"
                            />
                            public
                          </span>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="flex items-center gap-3">
                          <p className="text-xl text-black dark:text-white/50" >|—</p>
                          <span className="font-medium text-dark dark:text-white/50">
                            <Icon
                              icon="tabler:folder"
                              className="text-primary text-base inline-block me-2"
                            />
                            src
                          </span>
                        </div>
                        <div className="flex">
                          <div className="flex flex-col justify-between gap-2 mt-2">
                            {
                              Counts.slice(0, 19).map((item, index) => {
                                return (
                                  <p key={index} className="text-xl text-black dark:text-white/50" >|</p>
                                )
                              })
                            }
                          </div>
                          <ul className="ps-5 md:ps-12 list-unstyled">
                            <li className="py-2">
                              <div className="flex items-center gap-3">
                                <p className="text-xl text-black dark:text-white/50" >|—</p>
                                <span className="font-medium text-dark dark:text-white/50">
                                  <Icon
                                    icon="tabler:folder"
                                    className="text-primary text-base inline-block me-2"
                                  />
                                  app
                                </span>
                              </div>
                              <div className="flex">
                                <div className="flex flex-col justify-between gap-2 mt-2">
                                  {
                                    Counts.slice(0, 12).map((item, index) => {
                                      return (
                                        <p key={index} className="text-xl text-black dark:text-white/50" >|</p>
                                      )
                                    })
                                  }
                                </div>
                                <ul className="ps-5 md:ps-12 list-unstyled red">
                                  <li className="py-2">
                                    <div className="flex items-center gap-3">
                                      <p className="text-xl text-black dark:text-white/50" >|—</p>
                                      <span className="font-medium text-dark dark:text-white/50">
                                        <Icon
                                          icon="tabler:folder"
                                          className="text-primary text-base inline-block me-2"
                                        />
                                        (site)
                                      </span>{" "}
                                      <span className="fs-9 text-dark dark:text-white/50 ms-4">
                                        (Contains all the pages)
                                      </span>
                                    </div>
                                    <div className="flex">
                                      <div className="flex flex-col justify-between gap-2 mt-2">
                                        {
                                          Counts.slice(0, 5).map((item, index) => {
                                            return (
                                              <p key={index} className="text-xl text-black dark:text-white/50" >|</p>
                                            )
                                          })
                                        }
                                      </div>

                                      <ul className="ps-5 md:ps-12 list-unstyled">

                                        <li className="py-2">

                                          <div className="flex items-center gap-3">
                                            <p className="text-xl text-black dark:text-white/50" >|—</p>
                                            <span className="font-medium text-dark dark:text-white/50">
                                              <Icon
                                                icon="tabler:folder"
                                                className="text-primary text-base inline-block me-2"
                                              />
                                              blog
                                            </span>
                                          </div>

                                        </li>
                                        <li className="py-2">

                                          <div className="flex items-center gap-3">
                                            <p className="text-xl text-black dark:text-white/50" >|—</p>
                                            <span className="font-medium text-dark dark:text-white/50">
                                              <Icon
                                                icon="tabler:folder"
                                                className="text-primary text-base inline-block me-2"
                                              />
                                              cause
                                            </span>
                                          </div>

                                        </li>
                                        <li className="py-2">

                                          <div className="flex items-center gap-3">
                                            <p className="text-xl text-black dark:text-white/50" >|—</p>
                                            <span className="font-medium text-dark dark:text-white/50">
                                              <Icon
                                                icon="tabler:folder"
                                                className="text-primary text-base inline-block me-2"
                                              />
                                              contact
                                            </span>
                                          </div>

                                        </li>
                                        <li className="py-2">

                                          <div className="flex items-center gap-3">
                                            <p className="text-xl text-black dark:text-white/50" >|—</p>
                                            <span className="font-medium text-dark dark:text-white/50">
                                              <Icon
                                                icon="tabler:folder"
                                                className="text-primary text-base inline-block me-2"
                                              />
                                              documentation
                                            </span>
                                          </div>

                                        </li>
                                        <li className="py-2">

                                          <div className="flex items-center gap-3">
                                            <p className="text-xl text-black dark:text-white/50" >|—</p>
                                            <span className="font-medium text-dark dark:text-white/50">
                                              <Icon
                                                icon="tabler:folder"
                                                className="text-primary text-base inline-block me-2"
                                              />
                                              events
                                            </span>
                                          </div>

                                        </li>
                                      </ul>
                                    </div>
                                  </li>
                                  <li className="py-2">
                                    <div className="flex items-center gap-3">
                                      <p className="text-xl text-black dark:text-white/50" >|—</p>
                                      <span className="font-medium text-dark dark:text-white/50">
                                        <Icon
                                          icon="tabler:folder"
                                          className="text-primary text-base inline-block me-2"
                                        />
                                        api
                                      </span>
                                    </div>
                                  </li>
                                  <li className="py-2">
                                    <div className="flex items-center gap-3">
                                      <p className="text-xl text-black dark:text-white/50" >|—</p>
                                      <span className="font-medium text-dark dark:text-white/50">
                                        global.css
                                      </span>
                                    </div>
                                  </li>
                                  <li className="py-2">
                                    <div className="flex items-center gap-3">
                                      <p className="text-xl text-black dark:text-white/50" >|—</p>
                                      <span className="font-medium text-dark dark:text-white/50">
                                        layout.tsx
                                      </span>
                                    </div>
                                  </li>
                                  <li className="py-2">
                                    <div className="flex items-center gap-3">
                                      <p className="text-xl text-black dark:text-white/50" >|—</p>
                                      <span className="font-medium text-dark dark:text-white/50">
                                        not-found.tsx
                                      </span>
                                    </div>
                                  </li>
                                  <li className="py-2">
                                    <div className="flex items-center gap-3">
                                      <p className="text-xl text-black dark:text-white/50" >|—</p>
                                      <span className="font-medium text-dark dark:text-white/50">
                                        page.tsx
                                      </span>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li className="py-2">
                              <div className="flex items-center flex-wrap gap-3">
                                <p className="text-xl text-black dark:text-white/50" >|—</p>
                                <span className="font-medium text-dark dark:text-white/50">
                                  <Icon
                                    icon="tabler:folder"
                                    className="text-primary text-base inline-block me-2"
                                  />
                                  components
                                </span>{" "}
                                <span className="fs-9 text-dark ms-4 dark:text-white/50">
                                  (All the Components of this template.)
                                </span>
                              </div>
                            </li>
                            <li className="py-2">
                              <div className="flex items-center gap-3">
                                <p className="text-xl text-black dark:text-white/50" >|—</p>
                                <span className="font-medium text-dark dark:text-white/50">
                                  <Icon
                                    icon="tabler:folder"
                                    className="text-primary text-base inline-block me-2"
                                  />
                                  styles
                                </span>
                              </div>
                            </li>
                            <li className="py-2">
                              <div className="flex items-center gap-3">
                                <p className="text-xl text-black dark:text-white/50" >|—</p>
                                <span className="font-medium text-dark dark:text-white/50">
                                  <Icon
                                    icon="tabler:folder"
                                    className="text-primary text-base inline-block me-2"
                                  />
                                  types
                                </span>
                              </div>
                            </li>
                            <li className="py-2">
                              <div className="flex items-center gap-3">
                                <p className="text-xl text-black dark:text-white/50" >|—</p>
                                <span className="font-medium text-dark dark:text-white/50">
                                  <Icon
                                    icon="tabler:folder"
                                    className="text-primary text-base inline-block me-2"
                                  />
                                  utils
                                </span>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="flex items-center gap-3">
                          <p className="text-xl text-black dark:text-white/50" >|—</p>
                          <span className="font-medium text-dark dark:text-white/50">
                            <i className="ti ti-file me-2 text-primary font-bold" />
                            next.config.mjs
                          </span>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="flex items-center gap-3">
                          <p className="text-xl text-black dark:text-white/50" >|—</p>
                          <span className="font-medium text-dark dark:text-white/50">
                            <i className="ti ti-file me-2 text-primary font-bold" />
                            postcss.config.mjs
                          </span>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="flex items-center gap-3">
                          <p className="text-xl text-black dark:text-white/50" >|—</p>
                          <span className="font-medium text-dark dark:text-white/50">
                            <i className="ti ti-file me-2 text-primary font-bold" />
                            package.json
                          </span>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="flex items-center gap-3">
                          <p className="text-xl text-black dark:text-white/50" >|—</p>
                          <span className="font-medium text-dark dark:text-white/50">
                            <i className="ti ti-file me-2 text-primary font-bold" />
                            tailwind.config.ts
                          </span>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="flex items-center gap-3">
                          <p className="text-xl text-black dark:text-white/50" >|—</p>
                          <span className="font-medium text-dark dark:text-white/50">
                            <i className="ti ti-file me-2 text-primary font-bold" />
                            tsconfig.json
                          </span>
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};
