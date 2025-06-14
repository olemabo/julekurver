export interface Dictionary {
  footer: {
    hjertekurverSection: {
      title: string
      seeKurverLinkText: string
      createKurverLinkText: string
    }
    aboutSiteSection: {
      title: string
      aboutSiteLinkText: string
      contactUsLinkText: string
    }
    followUsHeading: string
  }
  header: {
    hjertekurverLinkText: string
    createKurverLinkText: string
    abouteSiteLinkText: string
    logoText: string
  }
  layout: {
    seo: {
      title: string
      description: string
    }
  }
  breadcrumb: {
    frontpage: string
    hjertekurver: string
    searchPage: string
    howToCreateHjertekurvPage: string
    howToMalToPaper: string
  }
  popover: {
    flettetillegg: {
      content: string
      altText: string
      title: string
    }
    symmetriskMotiv: {
      title: string
      intro: string
      link1Text: string
      link1Href: string
      mid: string
      link2Text: string
      link2Href: string
      outro: string
    }
  }
  pages: {
    hjertekurvPage: {
      difficultyFletting: string
      difficultyKlipping: string
      added: string
      changeColorLeft: string
      changeColorRight: string
      kurvMal: {
        downloadMalButton: string
        malTitle: string
        description: {
          intro: string
          methods: string
          linkText: string
        }
        twoMalsDescription: string
      }
      hvordanLageKurver: {
        title: string
        intro: {
          text: string
          linkText: string
        }
        steps: Array<{
          number: number
          description: string
        }>
      }
      lignendeKurver: {
        title: string
      }
    }
    frontpage: {
      aboutKurverSection: {
        title: string
        paragraph1: string
        paragraph2: string
        learnMoreAboutUsButtonLabel: string
      }
      viewHjertekurvSection: {
        title: string
        paragraph1: string
        paragraph2: string
        listItems: string[]
        buttonLabel: string
      }
      lagHjertekurvSection: {
        title: string
        step1: string
        step2: string
        step3: string
        buttonLabel: string
      }
      contactUsSection: {
        title: string
        introParagraph: string
        introLinkText: string
        feedbackPrompt: string
        thankYouMessage: string
        textareaLabel: string
        textareaPlaceholder: string
        errorMessage: string
        buttonLabel: string
        imageAltText: string
      }
      inspirationSection: {
        title: string
      }
    }
    contactSection: {
      heading: string
      paragraph: string
      thankYouMessage: string
      textareaLabel: string
      textareaPlaceholder: string
      errorMessage: string
      buttonLabel: string
    }
    searchPage: {
      heading: string
      paragraph: string
      searchPlaceholder: string
      searchResultsText: string
      noResultsText: string
      noResultsMessage: string
      linkText: string
    }
    hjertekurverKartotekPage: {
      seo: {
        title: string
        description: string
      }
      heading: string
      paragraph: {
        intro: string
        outro: string
      }
      difficultyPopover: {
        title: string
        description: string
        weaving: string
        weavingDetails: string
        weavingDetails2: string
        cutting: string
        cuttingDetails: string
        cuttingDetails2: string
        difficulty: string
      }
      search: {
        placeholder: string
        resultsCount: string
        noResults: string
      }
      filters: {
        filterButtonLabel: string
        alphabetic: {
          label: string
          description: string
        }
        recentlyCreated: {
          label: string
          description: string
        }
        lowestDifficultyFletting: {
          label: string
          description: string
        }
        highestDifficultyFletting: {
          label: string
          description: string
        }
        lowestDifficultyKlipping: {
          label: string
          description: string
        }
        highestDifficultyKlipping: {
          label: string
          description: string
        }
        popularity: {
          label: string
          description: string
        }
      }
    }
    howToCreateHjertekurvPage: {
      seo: {
        title: string
        description: string
      }
      title: string
      ingress: string
      WhatYouNeedSection: {
        title: string
        ingress: string
        whatYouNeedList: string[]
      }
      HjertekurvMalSection: {
        title: string
        ingress1: string
        ingress1LinkText: string
        ingress2: string
        ingress2LinkText: string
        ingress3: string
        ingress3LinkText: string
        paragraph2: string
        paragraph3: string
        paragraph3_2: string
      }
      ClipHjertekurvSection: {
        title: string
        ingress: string
        steps: Array<{
          number: number
          altText: string
          illustrationSrc: string
          description: string
        }>
        step3ListIntro: string
        step3ListSteps: string[]
      }
      fletteHjertekurvSection: {
        title: string
        ingress: string
        step1: {
          popoverContent: string
          popoverText: string
          popoverTitle: string
        }
        steps: Array<{
          number: number
          altText: string
          illustrationSrc: string
          description: string
        }>
      }
    }
    howToMalToPaper: {
      title: string
      ingress: string
      seo: {
        title: string
        description: string
      }
      howToMalTilMatpapirSection: {
        title: string
        ingress: string
        steps: Array<{
          altText: string
          description: string
        }>
        step5LinkText: string
      }
    }
  }
}