import { Box, Button, Typography } from "@mui/material";
import Section from "../../components/Section";
import colors from "../../theme/colors";

export default function Events() {
  return (
    <>
      <Box>
        <Typography
          sx={{
            fontFamily: "Roboto Condensed",
            display: "flex",
            paddingX: "175px",
            paddingY: "20px",
            justifyContent: "center",
            fontSize: "19px",
            textAlign: "center",
          }}
        >
          At SDC, we offer a variety of Speech and Debate events, each led by
          1-2 committee leaders. Students can compete in these events at
          tournaments throughout the year.
        </Typography>

        <Section headingText={"Speech Events"}>
          <Box sx={{ paddingX: "150px", paddingY: "50px" }}>
            <Typography
              sx={{
                paddingBottom: "20px",
                fontFamily: "Roboto Condensed",
                fontSize: "19px",
              }}
            >
              <u style={{ fontWeight: 700 }}>Original</u> - Original Oratory
              (OO) is a speech event in which a speaker writes, prepares,
              memorizes, and delivers an original speech on a topic of their
              choosing. Original Advocacy (OA) is another type of original
              speech event in which the topic which the speaker chooses is
              focused on a problem and a proposal for its solution. OO gives the
              speaker more freedom on the topic and focus of their speech, while
              OA is comparable to a persuasive speech.
            </Typography>
            <Typography
              sx={{
                paddingBottom: "20px",
                fontFamily: "Roboto Condensed",
                fontSize: "19px",
              }}
            >
              <u style={{ fontWeight: 700 }}>Interpretation</u> - Interpretation
              is a speech event where the speaker interprets and performs an
              already-written and published material. The material can range
              from play scripts, movie scripts, published speeches, books, etc.
              There are 4 types of interpretation events that we offer: HI
              (humorous interpretation), DI (dramatic interpretation), DUO (duo
              interpretation), and OI (oratorical interpretation). HI often
              focuses on comedic delivery, exaggerated movements, and the
              speaker may go back and forth between multiple characters. DI
              focuses more on emotional delivery, character development, and
              depth. Lastly, OI speakers interpret published speeches that have
              been publicly delivered, and it challenges the speaker’s
              understanding of the oration. No costumes or props may be used in
              interpretation events.
            </Typography>
            <Typography
              sx={{ fontFamily: "Roboto Condensed", fontSize: "19px" }}
            >
              <u style={{ fontWeight: 700 }}>Impromptu</u> - Impromptu is a
              speech event where the speaker speaks for a certain amount of time
              with limited preparation. Impromptu is typically formatted as 2
              minutes of prep time, 5 minutes of speaking time, and a 30 second
              grace period. Speakers are given three topics to choose from at
              the start of the 2 minute prep time. Depending on the round,
              topics can be concrete, abstract, quotes, current events, and
              more. Judges will rank speakers based on delivery, body language,
              and content.
            </Typography>
          </Box>
        </Section>

        <Section headingText={"Debate Events"}>
          <Box sx={{ paddingX: "150px", paddingY: "50px" }}>
            <Typography
              sx={{
                paddingBottom: "20px",
                fontFamily: "Roboto Condensed",
                fontSize: "19px",
              }}
            >
              <u style={{ fontWeight: 700 }}>Public Forum</u> - Public Forum
              (PF) is a 2v2 style of debate. Each team is a pair, with a
              designated first and second speaker. The first speaker generally
              focuses on delivering the case speech while the second speaker
              focuses more on a rebuttal speech. PF debate topics are centered
              around current event issues, often, but not always, involving
              political elements.
            </Typography>
            <Typography
              sx={{
                paddingBottom: "20px",
                fontFamily: "Roboto Condensed",
                fontSize: "19px",
              }}
            >
              <u style={{ fontWeight: 700 }}>Lincoln-Douglas</u> - Lincoln
              Douglas (LD) Debate has a 1v1 format. Originating from the Abraham
              Lincoln and Stephen Douglas debate of 1858, LD is centered around
              morals, ethics, and philosophy, with almost all topics heavily
              influenced by politics (previous topics include universal
              childcare, federal jobs guarantees, and mandated voting). Debaters
              are arguing about how the world should be and must argue for and
              against the topic while refuting their opponent’s case.
            </Typography>
            <Typography
              sx={{ fontFamily: "Roboto Condensed", fontSize: "19px" }}
            >
              <u style={{ fontWeight: 700 }}>Congress</u> - Students simulate
              the U.S. legislative process by debating bills and resolutions in
              a structured setting. Participants take on the role of
              legislators, delivering speeches both in favor and against the
              proposed measures, while also engaging in cross-examination and
              rebuttals. The event emphasizes persuasive speaking, critical
              thinking, and the ability to work collaboratively with other
              ""representatives"" to refine and pass legislation.
            </Typography>
          </Box>
        </Section>

        <Section headingText={"Want to compete in an event this year?"}>
          <Box sx={{ paddingX: "150px", paddingY: "50px" }}>
            <Typography sx={{ paddingBottom: "50px" }}>
              Join us for our event committee meetings each week!
            </Typography>

            <Button
              variant="contained"
              style={{ backgroundColor: colors.darkenedRed }}
            >
              Click here for more information!
            </Button>
          </Box>
        </Section>
      </Box>
    </>
  );
}
