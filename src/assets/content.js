import { v4 as uuidv4 } from "uuid";

/*
 * This is the content that will be displayed on the website.
 * Each tab has a tabId, tabTitle, and blocks.
 * Each block has an id, key, content, value, and isNotSearchable.
 * * key: is used to determine the type of block.
 * * content: is the text that will be searchable.
 * * value: is the text that will be displayed and its optional if the content is same as value.
 * * isNotSearchable: is used to determine if the text should be visible to our search engine its optional only needed if you want to hide some thing.
 */

export const content = [
  {
    tabId: uuidv4(),
    key: "home",

    blocks: [
      {
        id: uuidv4(),
        key: "hero",
        content: "Homestead Speech & Debate Club",
      },

      {
        id: uuidv4(),
        key: "banner1Title",
        content: "Homestead Speech & Debate Club",
      },

      {
        id: uuidv4(),
        key: "section1Title",
        content: "Latest News",
      },
      {
        id: uuidv4(),
        key: "section1Subtitle",
        content: "Check out our committee meeting times in the meetings tab!",
      },
      {
        id: uuidv4(),
        key: "section1Subtitle",
        content: "Check out our committee meeting times in the meetings tab!",
        isNotSearchable: true,
      },
      {
        id: uuidv4(),
        key: "banner2Title",
        content: "Check out our Linktree!",
      },
      {
        id: uuidv4(),
        key: "cardTitle",
        content: "Homestead Speech & Debate | Instagram | Linktree",
      },
      {
        id: uuidv4(),
        key: "cardSubtitle",
        content: "Check out our links! 🌟",
      },
    ],
  },
  {
    tabId: uuidv4(),
    key: "calendar",
    blocks: [
      {
        id: uuidv4(),
        key: "hero",
        content: "Calendar",
      },
    ],
  },
  {
    tabId: uuidv4(),
    key: "meetings",
    blocks: [
      {
        id: uuidv4(),
        key: "hero",
        content: "Meetings",
      },
    ],
  },
  {
    tabId: uuidv4(),
    key: "summaries-1",
    blocks: [
      {
        id: uuidv4(),
        key: "hero",
        content: "Summaries 1",
      },
    ],
  },

  {
    tabId: uuidv4(),
    key: "summaries-2",
    blocks: [
      {
        id: uuidv4(),
        key: "hero",
        content: "Summaries 2",
      },
    ],
  },
  {
    tabId: uuidv4(),
    key: "summaries-3",
    blocks: [
      {
        id: uuidv4(),
        key: "hero",
        content: "Summaries 3",
      },
    ],
  },
  {
    tabId: uuidv4(),
    key: "summaries-4",
    blocks: [
      {
        id: uuidv4(),
        key: "hero",
        content: "Summaries 4",
      },
    ],
  },
  {
    tabId: uuidv4(),
    key: "summaries-5",
    blocks: [
      {
        id: uuidv4(),
        key: "hero",
        content: "Summaries 5",
      },
    ],
  },
  {
    tabId: uuidv4(),
    key: "summaries-6",
    blocks: [
      {
        id: uuidv4(),
        key: "hero",
        content: "Summaries 6",
      },
    ],
  },
  {
    tabId: uuidv4(),
    key: "tournaments",
    blocks: [
      {
        id: uuidv4(),
        key: "hero",
        content: "Tournaments",
      },
    ],
  },
  {
    tabId: uuidv4(),
    key: "links",
    blocks: [
      {
        id: uuidv4(),
        key: "hero",
        content: "Links",
      },
    ],
  },
  {
    tabId: uuidv4(),
    key: "events",
    blocks: [
      {
        id: uuidv4(),
        key: "hero",
        content: "Events",
      },
    ],
  },
  {
    tabId: uuidv4(),
    key: "mustang-spotlight",
    blocks: [
      {
        id: uuidv4(),
        key: "hero",
        content: "Mustang Spotlight",
      },
    ],
  },
  {
    tabId: uuidv4(),
    key: "about",
    blocks: [
      {
        id: uuidv4(),
        key: "hero",
        content: "About",
      },
    ],
  },
];

export function getTabContent(key) {
  if (!key) {
    console.error("[getTabContent]::key is required");
    return [];
  }
  const found = content.find((item) => {
    return item.key == key;
  });

  return found ? found.blocks : [];
}

function getBlockFromTab(tabKey, blockKey) {
  const foundTabBlocks = getTabContent(tabKey);

  if (!foundTabBlocks) {
    console.error("[getBlockFromTab]::foundTabBlocks is required");
    return {};
  }
  const foundBlock = foundTabBlocks.find((block) => {
    return block.key == blockKey;
  });

  console.log();

  return foundBlock ? foundBlock.content : "";
}

export const getTab = (tabKey) => {
  if (!tabKey) {
    console.error("[getTab]::tabKey is required");
    return {};
  }

  const foundTab = content.find((tab) => tab.key === tabKey) || {};
  return {
    ...foundTab,
    getBlock: (blockKey) => {
      if (!blockKey) {
        console.error("[getTab.getBlock]::blockKey is required");
        return "";
      }

      const foundBlock = foundTab.blocks.find(
        (block) => block.key === blockKey
      );
      return foundBlock ? foundBlock.content : "";
    },
  };
};

export const searching = (query) => {
  const searchableContent = getBlocks().filter(
    (block) => !block.isNotSearchable
  );

  if (query) {
    return searchableContent.filter((block) =>
      block.content.toLowerCase().includes(query.toLowerCase())
    );
  }

  return [];
};

export const getBlocks = () =>
  content.flatMap((tab) =>
    tab.blocks.map((block) => {
      return {
        ...block,
        tabId: tab.tabId,
        tabKey: tab.key,
      };
    })
  );

export default getBlockFromTab;

export const getBlockById = (blockId) => {
  if (!blockId) {
    console.error("[getBlockById]::blockId is required");
    return {};
  }

  const foundBlock = getBlocks().find((block) => block.id === blockId);
  return foundBlock ? foundBlock : {};
};
