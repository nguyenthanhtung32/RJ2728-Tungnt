import React, { useState } from "react";
import Styles from "./Tab.module.css";
import {
  BsEmojiHeartEyes,
  BsEmojiSunglasses,
  BsEmojiWink,
  BsEmojiNeutral,
} from "react-icons/bs";

type Props = {};

const Tab = (props: Props) => {
  const [toggleState1, setToggleState1] = useState(1);

  const toggleTab1 = (index: number) => {
    setToggleState1(index);
  };
  const [toggleState2, setToggleState2] = useState(1);

  const toggleTab2 = (index: number) => {
    setToggleState2(index);
  };
  const [toggleState3, setToggleState3] = useState(1);

  const toggleTab3 = (index: number) => {
    setToggleState3(index);
  };
  const [toggleState4, setToggleState4] = useState(1);

  const toggleTab4 = (index: number) => {
    setToggleState4(index);
  };
  return (
    <div>
      <div className={Styles.container}>
        <div className={Styles.title}>BUTTON TABS</div>
        <div className={Styles.block_tabs}>
          <button
            className={
              toggleState1 === 1
                ? `${Styles["tabs"]} ${Styles["button_tab"]} ${Styles["active_button_tabs"]}`
                : `${Styles["button_tab"]} ${Styles["tabs"]}`
            }
            onClick={() => toggleTab1(1)}
          >
            HISTORY
          </button>
          <button
            className={
              toggleState1 === 2
                ? `${Styles["tabs"]} ${Styles["button_tab"]} ${Styles["active_button_tabs"]}`
                : `${Styles["button_tab"]} ${Styles["tabs"]}`
            }
            onClick={() => toggleTab1(2)}
          >
            APPROACH
          </button>
          <button
            className={
              toggleState1 === 3
                ? `${Styles["tabs"]} ${Styles["button_tab"]} ${Styles["active_button_tabs"]}`
                : `${Styles["button_tab"]} ${Styles["tabs"]}`
            }
            onClick={() => toggleTab1(3)}
          >
            CULTURE
          </button>
          <button
            className={
              toggleState1 === 4
                ? `${Styles["tabs"]} ${Styles["button_tab"]} ${Styles["active_button_tabs"]}`
                : `${Styles["button_tab"]} ${Styles["tabs"]}`
            }
            onClick={() => toggleTab1(4)}
          >
            METHOD
          </button>
        </div>

        <div className={Styles.content_tabs}>
          <div
            className={
              toggleState1 === 1
                ? `${Styles["content"]} ${Styles["active_content"]}`
                : `${Styles["content"]}`
            }
          >
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni
              dolores.
            </p>
          </div>

          <div
            className={
              toggleState1 === 2
                ? `${Styles["content"]} ${Styles["active_content"]}`
                : `${Styles["content"]}`
            }
          >
            <p>
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit, sed quia non numquam eius modi
              tempora incidunt ut labore et dolore magnam aliquam quaerat
              voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem
              ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
              consequatur?
            </p>
          </div>

          <div
            className={
              toggleState1 === 3
                ? `${Styles["content"]} ${Styles["active_content"]}`
                : `${Styles["content"]}`
            }
          >
            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga. Et harum quidem rerum
              facilis est.
            </p>
          </div>

          <div
            className={
              toggleState1 === 4
                ? `${Styles["content"]} ${Styles["active_content"]}`
                : `${Styles["content"]}`
            }
          >
            <p>
              Nam libero tempore, cum soluta nobis est eligendi optio cumque
              nihil impedit quo minus id quod maxime placeat facere possimus,
              omnis voluptas assumenda est, omnis dolor repellendus. Temporibus
              autem quibusdam et aut officiis debitis aut rerum necessitatibus
              saepe eveniet ut et voluptates repudiandae sint et molestiae non
              recusandae.
            </p>
          </div>
        </div>
      </div>

      <div className={Styles.container}>
        <div className={Styles.title}>ICON TABS</div>
        <div className={Styles.block_tabs}>
          <button
            className={
              toggleState2 === 1
                ? `${Styles["tabs"]} ${Styles["icon_tab"]} ${Styles["active_icon_tabs"]}`
                : `${Styles["icon_tab"]} ${Styles["tabs"]}`
            }
            onClick={() => toggleTab2(1)}
          >
            <div className={Styles.icon}>
              <BsEmojiHeartEyes />
            </div>
            <span>HISTORY</span>
          </button>
          <button
            className={
              toggleState2 === 2
                ? `${Styles["tabs"]} ${Styles["icon_tab"]} ${Styles["active_icon_tabs"]}`
                : `${Styles["icon_tab"]} ${Styles["tabs"]}`
            }
            onClick={() => toggleTab2(2)}
          >
            <div className={Styles.icon}>
              <BsEmojiSunglasses />
            </div>
            <span>APPROACH</span>
          </button>
          <button
            className={
              toggleState2 === 3
                ? `${Styles["tabs"]} ${Styles["icon_tab"]} ${Styles["active_icon_tabs"]}`
                : `${Styles["icon_tab"]} ${Styles["tabs"]}`
            }
            onClick={() => toggleTab2(3)}
          >
            <div className={Styles.icon}>
              <BsEmojiWink />
            </div>
            <span>CULTURE</span>
          </button>
          <button
            className={
              toggleState2 === 4
                ? `${Styles["tabs"]} ${Styles["icon_tab"]} ${Styles["active_icon_tabs"]}`
                : `${Styles["icon_tab"]} ${Styles["tabs"]}`
            }
            onClick={() => toggleTab2(4)}
          >
            <div className={Styles.icon}>
              <BsEmojiNeutral />
            </div>
            <span>METHOD</span>
          </button>
        </div>

        <div className={Styles.content_tabs}>
          <div
            className={
              toggleState2 === 1
                ? `${Styles["content"]} ${Styles["active_content"]}`
                : `${Styles["content"]}`
            }
          >
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni
              dolores.
            </p>
          </div>

          <div
            className={
              toggleState2 === 2
                ? `${Styles["content"]} ${Styles["active_content"]}`
                : `${Styles["content"]}`
            }
          >
            <p>
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit, sed quia non numquam eius modi
              tempora incidunt ut labore et dolore magnam aliquam quaerat
              voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem
              ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
              consequatur?
            </p>
          </div>

          <div
            className={
              toggleState2 === 3
                ? `${Styles["content"]} ${Styles["active_content"]}`
                : `${Styles["content"]}`
            }
          >
            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga. Et harum quidem rerum
              facilis est.
            </p>
          </div>

          <div
            className={
              toggleState2 === 4
                ? `${Styles["content"]} ${Styles["active_content"]}`
                : `${Styles["content"]}`
            }
          >
            <p>
              Nam libero tempore, cum soluta nobis est eligendi optio cumque
              nihil impedit quo minus id quod maxime placeat facere possimus,
              omnis voluptas assumenda est, omnis dolor repellendus. Temporibus
              autem quibusdam et aut officiis debitis aut rerum necessitatibus
              saepe eveniet ut et voluptates repudiandae sint et molestiae non
              recusandae.
            </p>
          </div>
        </div>
      </div>

      <div className={Styles.container}>
        <div className={Styles.title}>TEXT TABS</div>
        <div className={Styles.block_tabs}>
          <button
            className={
              toggleState3 === 1
                ? `${Styles["tabs"]} ${Styles["text_tab"]} ${Styles["active_text_tabs"]}`
                : `${Styles["tabs"]} ${Styles["text_tab"]}`
            }
            onClick={() => toggleTab3(1)}
          >
            HISTORY
          </button>
          <button
            className={
              toggleState3 === 2
                ? `${Styles["tabs"]} ${Styles["text_tab"]} ${Styles["active_text_tabs"]}`
                : `${Styles["tabs"]} ${Styles["text_tab"]}`
            }
            onClick={() => toggleTab3(2)}
          >
            APPROACH
          </button>
          <button
            className={
              toggleState3 === 3
                ? `${Styles["tabs"]} ${Styles["text_tab"]} ${Styles["active_text_tabs"]}`
                : `${Styles["tabs"]} ${Styles["text_tab"]}`
            }
            onClick={() => toggleTab3(3)}
          >
            CULTURE
          </button>
          <button
            className={
              toggleState3 === 4
                ? `${Styles["tabs"]} ${Styles["text_tab"]} ${Styles["active_text_tabs"]}`
                : `${Styles["tabs"]} ${Styles["text_tab"]}`
            }
            onClick={() => toggleTab3(4)}
          >
            METHOD
          </button>
        </div>

        <div className={Styles.content_tabs}>
          <div
            className={
              toggleState3 === 1
                ? `${Styles["content"]} ${Styles["active_content"]}`
                : `${Styles["content"]}`
            }
          >
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni
              dolores.
            </p>
          </div>

          <div
            className={
              toggleState3 === 2
                ? `${Styles["content"]} ${Styles["active_content"]}`
                : `${Styles["content"]}`
            }
          >
            <p>
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit, sed quia non numquam eius modi
              tempora incidunt ut labore et dolore magnam aliquam quaerat
              voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem
              ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
              consequatur?
            </p>
          </div>

          <div
            className={
              toggleState3 === 3
                ? `${Styles["content"]} ${Styles["active_content"]}`
                : `${Styles["content"]}`
            }
          >
            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga. Et harum quidem rerum
              facilis est.
            </p>
          </div>

          <div
            className={
              toggleState3 === 4
                ? `${Styles["content"]} ${Styles["active_content"]}`
                : `${Styles["content"]}`
            }
          >
            <p>
              Nam libero tempore, cum soluta nobis est eligendi optio cumque
              nihil impedit quo minus id quod maxime placeat facere possimus,
              omnis voluptas assumenda est, omnis dolor repellendus. Temporibus
              autem quibusdam et aut officiis debitis aut rerum necessitatibus
              saepe eveniet ut et voluptates repudiandae sint et molestiae non
              recusandae.
            </p>
          </div>
        </div>
      </div>

      <div className={Styles.container}>
        <div className={Styles.titlee}>VERTICAL BUTTONS</div>
        <div className="d-flex">
          <div className={Styles.block_tabs_vertical}>
            <button
              className={
                toggleState4 === 1
                  ? `${Styles["vertical_tab"]} ${Styles["active_vertical_tabs"]}`
                  : `${Styles["vertical_tab"]}`
              }
              onClick={() => toggleTab4(1)}
            >
              HISTORY
            </button>
            <button
              className={
                toggleState4 === 2
                  ? `${Styles["vertical_tab"]} ${Styles["active_vertical_tabs"]}`
                  : `${Styles["vertical_tab"]}`
              }
              onClick={() => toggleTab4(2)}
            >
              APPROACH
            </button>
            <button
              className={
                toggleState4 === 3
                  ? `${Styles["vertical_tab"]} ${Styles["active_vertical_tabs"]}`
                  : `${Styles["vertical_tab"]}`
              }
              onClick={() => toggleTab4(3)}
            >
              CULTURE
            </button>
            <button
              className={
                toggleState4 === 4
                  ? `${Styles["vertical_tab"]} ${Styles["active_vertical_tabs"]}`
                  : `${Styles["vertical_tab"]}`
              }
              onClick={() => toggleTab4(4)}
            >
              METHOD
            </button>
          </div>

          <div className={Styles.content_tabs_vertical}>
            <div
              className={
                toggleState4 === 1
                  ? `${Styles["content"]} ${Styles["active_content"]}`
                  : `${Styles["content"]}`
              }
            >
              <p>LET'S TALK TABS</p>
              <hr />
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores.
              </p>
              <p>
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit, sed quia non numquam eius modi
                tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem. Ut enim ad minima veniam, quis nostrum
                exercitationem ullam corporis suscipit laboriosam, nisi ut
                aliquid ex ea commodi consequatur?
              </p>
            </div>

            <div
              className={
                toggleState4 === 2
                  ? `${Styles["content"]} ${Styles["active_content"]}`
                  : `${Styles["content"]}`
              }
            >
              <p>COOL TABS</p>
              <hr />
              <p>
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit, sed quia non numquam eius modi
                tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem. Ut enim ad minima veniam, quis nostrum
                exercitationem ullam corporis suscipit laboriosam, nisi ut
                aliquid ex ea commodi consequatur?
              </p>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores.
              </p>
            </div>

            <div
              className={
                toggleState4 === 3
                  ? `${Styles["content"]} ${Styles["active_content"]}`
                  : `${Styles["content"]}`
              }
            >
              <p>SHORTER TABS</p>
              <hr />
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                rerum facilis est.
              </p>
            </div>

            <div
              className={
                toggleState4 === 4
                  ? `${Styles["content"]} ${Styles["active_content"]}`
                  : `${Styles["content"]}`
              }
            >
              <p>LONGER TABS</p>
              <hr />
              <p>
                Nam libero tempore, cum soluta nobis est eligendi optio cumque
                nihil impedit quo minus id quod maxime placeat facere possimus,
                omnis voluptas assumenda est, omnis dolor repellendus.
                Temporibus autem quibusdam et aut officiis debitis aut rerum
                necessitatibus saepe eveniet ut et voluptates repudiandae sint
                et molestiae non recusandae. Neque porro quisquam est, qui
                dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
                sed quia non numquam eius modi tempora incidunt ut labore et
                dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
                veniam, quis nostrum exercitationem ullam corporis suscipit
                laboriosam, nisi ut aliquid ex ea commodi consequatur?
              </p>
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                rerum facilis est.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tab;
