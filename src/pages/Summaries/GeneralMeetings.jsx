import React from "react";
import SummaryAccordian from "../../components/SummaryAccordian";
import colors from "../../theme/colors";

function GeneralMeetings() {
  return (
    <div style={{ paddingLeft: "125px", paddingRight: "125px" }}>
      <SummaryAccordian title={"GM #7 - 11/16/24"}>
        <ul style={{ listStyleType: "square" }}>
          <li>
            <b style={{ color: "red" }}>
              Please sign up for one of our three upcoming tournaments
            </b>{" "}
            if you are interested. Attendance is <b>not mandatory</b>, but it is
            highly recommended that you sign up to compete at least once this
            year. You can find the links to signup for each below as well as our
            <b> competitor checklist</b>.
          </li>
        </ul>

        <ul style={{ listStyleType: "square" }}>
          <li>
            <a href="https://forms.gle/kfwMfaJuUFLZUZMA7">CFL Policy/LD</a>
          </li>
          <li>
            <a href="https://forms.gle/7EYV49E922N5ZwoN6">CFL Parli/PF</a>
          </li>
          <li>
            <a href="https://forms.gle/sGTikUthe3L4g1f57">John Lewis SVUDL</a>
          </li>
          <li>
            <a href="https://docs.google.com/document/d/1QYjrK-zeM_lS1vL-vqxIQTz4etOmpI9Wt-wqK6_srjk/edit?usp=sharing">
              Competitor Checklist
            </a>
          </li>
          <li>
            Our CLs will be hosting committee meetings again this week. You can
            find meeting times and descriptions for each event on the
            spreadsheet linked below.
          </li>
          <li>
            <a href="https://docs.google.com/spreadsheets/d/1Pxw-E0tvpz3lmbe7QvaOkHmMI2osiYsotI9RxceVAGs/edit?usp=sharing">
              Committee Meetings
            </a>
          </li>
        </ul>
      </SummaryAccordian>
    </div>
    // <iframe
    //   src="https://docs.google.com/presentation/d/1ZCndd15Pi9uQ7evNsEh_ttwd6o_ecAcb6W9mtBEEBNY/edit?usp=sharing"
    //   style={{
    //     width: "1000px",
    //     height: "450px",
    //   }}
    // />
  );
}

export default GeneralMeetings;
