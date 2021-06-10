import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecurityPolicy = () => (

    <Layout>
    <Seo title="Security Policy" />
    <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-left lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 font-sans text-5xl font-extrabold leading-none tracking-tight text-gray-900 sm:text-6xl md:mx-auto">
          Security Policy
        </h2>
      </div>
      <div className="prose max-w-full">
          <h2><strong>Focus on Security</strong></h2>
          <p>A lot rides on Singularity.</p>
          <p>
              We take security very seriously, our goal is to provide all Singularity users with the best-possible assistance regarding any issue that might affect the security of their systems. </p>
          <p>
              Some of the biggest HPC centers on the planet depend on Singularity containers every day to run mission-critical applications. As stewards of the open source Singularity project, we owe it to thecommunity to establish a clear security procedure for the times when vulnerabilities are reported or discovered.
          </p>
          <h3><b>Do you think you found a vulnerability?</b></h3>
          <p>
              It’s easy to assume that your software is secure, but at HPCng, we continuously test the current open source version of Singularity for vulnerabilities.
          </p>

          <p>
              If you believe <strong>you have discovered a vulnerability</strong> in Singularity,&nbsp; let us know so we can research it! You can notify our team either:
          </p>
          <ul>
              <li>
                  <strong>via email</strong>:&nbsp;<a href="mailto:singularity-security@hpcng.org">singuarity-security@hpcng.org</a> (<a href="singularity-security.pub" target="_blank" rel="noopener">PGP key</a>)
              </li>
              <li><strong>via web</strong>: fill out the form on our <a href="/contact-us">contact page</a></li>
          </ul>
          <p>
              We encourage people who contact Singularity Security team to use email encryption. <a href="singularity-security.pub" target="_blank" rel="noopener">Get our PGP public key</a> and verify the fingerprint:
          </p>
          <p>singularity-security@hpcng.org pgp fingerprint here</p>
          <h3><b>The goals of a standardized security response procedure</b></h3>
          <p>
              Before we cover the procedure that HPCng takes to mitigate newly discovered vulnerabilities, let’s talk about the goals we’re trying to achieve. <b>&nbsp;</b>
          </p>
          <ul>
              <li>
                  <strong><b>Fast turnaround: </b></strong>
                  Even vulnerabilities that have not been announced publicly are a
                  potential source of danger because a savvy hacker may be able to
                  discover and exploit them independently. &nbsp;Our procedures are
                  designed to first understand and then quickly remediate as primary
                  goals.
              </li>
          </ul>
          <ul>
              <li>
                  <strong><b>Limited exposure: </b></strong>
                  Before patches are developed and made available, our goal is to limit
                  the spread of information until after a patch is available and key
                  stakeholders are protected
              </li>
          </ul>
          <ul>
              <li>
                  <strong><b>Transparency: </b></strong>
                  The open-source community must know exactly what HPCng intends to do
                  about vulnerabilities and how we are are carrying out our commitment
                  to security. &nbsp;Vulnerabilities are documented using the Common
                  Vulnerabilities and Exposures (CVE) system to provide a permanent
                  searchable record allowing administrators to accurately judge the
                  risks of running a particular version of Singularity within their
                  environment.
              </li>
          </ul>
          <ul>
              <li>
                  <strong><b>Enable stakeholders over malicious actors: </b></strong>
                  When a new vulnerability is publicly announced, a race begins between
                  system administrators and those with nefarious intent. Singularity
                  subscribers are provided security patches prior to security
                  announcements as a crucial head start in the security race. Although
                  patches are made available to Singularity customers first, those
                  patches are provided without releasing security-related information.
                  &nbsp;This limits exposure to the open source community while still
                  providing a way to remediation for Singularity customers, with a
                  level of proactive measure.
              </li>
          </ul>
          <h3><b>HPCng vulnerability procedure</b></h3>
          <p>
              When a vulnerability is discovered, HPCng takes the following
              steps:
          </p>
          <ol>
              <li>
                  Perform due diligence to fully replicate and describe the scope and
                  severity of the bug. (This step is expected to take hours, not
                  days.)
              </li>
              <li>
                  A CVE number is requested and embargoed until public release is
                  made.
              </li>
              <li>
                  Security patch(es) are confidentially developed. &nbsp;(This step is
                  expected to take hours or days and will be carried out with
                  appropriate urgency.)
              </li>
              <li>
                  Security patches are merged into test versions of Singularity and
                  HPCng testing commences. &nbsp;Bugs related to patch(es) are fixed
                  and testing is repeated as necessary. (This process is expected to
                  take days.)
              </li>
              <li>
                  Once patch(es) are developed and fully tested, they are pushed to the
                  main Singularity repos.
              </li>
              <li>
                  Singularity users will receive a standard notification that
                  there is a new version of Singularity available and they should
                  upgrade. &nbsp;This notice will NOT contain any sensitive information
                  and will NOT disclose the presence of a security-related patch.
              </li>
              <li>
                  Singularity users are given a reasonable amount of time to
                  upgrade their installations so that when details of the exploit are
                  revealed they are already protected.
              </li>
              <li>
                  After a reasonable period of time has elapsed and Singularity
                  customers have likely upgraded (and on a Tuesday where possible as
                  several administrators have suggested
                  https://groups.google.com/a/lbl.gov/forum/#!topic/singularity/FgHj7WhqIE8),
                  the patches will be merged from the private development space into the
                  public repository and a release will immediately be made. &nbsp;The
                  release notes will do the following:
                  <ol>
                      <li>
                          Describe the issue in sufficient detail so that affected parties
                          can judge whether to upgrade.
                      </li>
                      <li>
                          If there is a mitigation or workaround detail it. &nbsp;If there
                          is not explicitly say there is no known workaround.
                      </li>
                      <li>
                          State whether a malicious user needs access to the system to
                          exploit the vulnerability or whether it can be exploited
                          remotely.
                      </li>
                      <li>
                          State which versions of Singularity are affected and which
                          OS-es/kernels are affected.
                      </li>
                      <li>
                          Reference relevant CVE number(s).
                      </li>
                  </ol>
              </li>
              <li>
                  At the same time that a release is being made, the CVE(s) will be
                  filled out with all relevant information and released from embargo.
                  &nbsp;
              </li>
              <li>
                  Announcements will be made on Slack and Google Group that a new
                  version of Singularity is available with all relevant security
                  information and links to release notes.
              </li>
              <li>
                  Singularity users will receive follow-up notification that the
                  last version contains security patches and they should double check
                  that they have upgraded. &nbsp;This email should contain the same
                  information that is in the release notes (along with notifications in
                  HPCng customer support portal.)
              </li>
          </ol>
          <p>
              Note: All security fixes that HPCng creates will also be made available
              to the open source community when the full disclosure/CVE have been made
              public. This will include any patches that are created for legacy versions
              of Singularity that are no longer being actively maintained by the
              community.
          </p>
          <h3><b>Continual Improvements</b></h3>
          <p>
              This security procedure is intended as a guideline and not a one-size
              fits all mandate. &nbsp;Situations will undoubtedly arise where these
              steps won’t apply cleanly. But the collective experience of the open
              source community and the HPCng team, as well as our recent patching
              efforts lead us to believe this is a well-conceived plan.
              &nbsp;&nbsp;&nbsp;
          </p>
          <p>
              Does the procedure make sense? &nbsp;Are we missing something? Tell us
              what you think!
          </p>
          <ul>
              <li>
                  <b><a href="https://groups.google.com/a/lbl.gov/g/singularity">Google
                      Groups</a></b>
              </li>
              <li>
                  <b><a href="https://join.slack.com/t/hpcng/shared_invite/zt-qda4h1ls-OP0Uouq6sSmVE6i_0NrWdw">Slack Channel</a></b>
              </li>
              <li>
                  <b><a href="https://github.com/hpcng/singularity">GitHub</a></b>
              </li>
          </ul>
      </div>
  </div>
  </Layout>
)
export default SecurityPolicy
