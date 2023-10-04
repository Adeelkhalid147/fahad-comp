"use client";
import {
  Box,
  useDisclosure,
  Button,
  Text,
  Flex,
  Input,
  VStack,
  Heading,
  Stack,
  Divider,
  IconButton,
  RadioGroup,
  Radio,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import Image from "next/image";
import React, { useState } from "react";



export function CheckBox() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [scrollBehavior, setScrollBehavior] = useState<any>("inside");

  const btnRef = React.useRef(null);
  return (
    <>
      <RadioGroup value={scrollBehavior} onChange={setScrollBehavior}>
        <Stack direction="row">
          {/* <Radio value="inside">inside</Radio> */}
          {/* <Radio value='outside'>outside</Radio> */}
        </Stack>
      </RadioGroup>

      <Button mt={3} ref={btnRef} onClick={onOpen}>
        Trigger modal
      </Button>

      <Modal
        onClose={onClose}
        finalFocusRef={btnRef}
        isOpen={isOpen}
        scrollBehavior={scrollBehavior}
      >
        <ModalOverlay />
        <ModalContent width={{sm:"full",m1:"calc(100%-64px)" }} height={{sm:"full",m1:"calc(100%-64px)" }}>
          <ModalHeader>
            <Flex justify="between" align="center">
            <Box>
            <Image src={"/WhatsApp Image 2023-09-28 at 2.06.03 PM.jpeg"} alt="logo" height="50" width="50"/>
            </Box>
            <Box p={4}>
            <Text>TERMS AND CONDITIONS</Text>
            <Text fontSize="xs" color="#AFAFC2">
              Last updated 24 April 2020
            </Text>
            </Box>
            </Flex>
          </ModalHeader>

          <ModalCloseButton />
          <ModalBody>
            <Heading as="h2" size="md" fontWeight="medium" mb="15px">
              1. INTRODUCTION
            </Heading>
            <Text fontSize="sm" mb="30px" color="#AFAFC2">
              i. Packr (“we”, “us” or “Packr”) is an online marketplace
              connecting travellers having available baggage space with
              individuals who wish to send or receive parcels from one location
              to another.
            </Text>
            <Text fontSize="sm" mb="30px" color="#AFAFC2">
              ii. The terms and conditions (“Terms and Conditions”) governing
              your access and use of Packr along with its related sub-domains,
              sites, tablet or mobile app, services and tools (“Site”) are set
              out herein below and constitutes as a User Agreement which shall
              be deemed effective upon your use of the Site which shall signify
              your acceptance of these Terms and Conditions. If you do not agree
              to be bound by this User Agreement please do not access, register
              with or use this Site. This Site is owned and operated by Packr
              Private Limited.
            </Text>
            <Text fontSize="sm" mb="15px" color="#AFAFC2">
              iii. The Site reserves the right to change, modify, add, or remove
              portions of these Terms and Conditions at any time without any
              prior notification. Changes will be effective when posted on the
              Site with no other notice provided. Please check these Terms and
              Conditions regularly for updates. Your continued use of the Site
              following the posting of changes to Terms and Conditions of use
              constitutes your acceptance of those changes.
            </Text>

            <Heading as="h2" size="md" fontWeight="medium" mb="15px">
              2. CONDITION OF USE
            </Heading>

            <Text fontSize="sm" mb="30px" color="#AFAFC2">
              i. To access certain services offered by the platform (consisting
              collectively of our Site, application and services), we may
              require that you create an account with us or provide personal
              information to complete the creation of an account. We may at any
              time in our sole and absolute discretion, invalidate the username
              and/or password without giving any reason or prior notice and
              shall not be liable or responsible for any losses suffered by,
              caused by, arising out of, in connection with or by reason of such
              request or invalidation.
            </Text>
            <Text fontSize="sm" mb="30px" color="#AFAFC2">
              ii. You are responsible for maintaining the confidentiality of
              your user identification, password, account details and related
              private information. You agree to accept this responsibility and
              ensure your account and its related details are maintained
              securely at all times and all necessary steps are taken to prevent
              misuse of your account.
            </Text>
            <Text fontSize="sm" mb="30px" color="#AFAFC2">
              iii. You agree and acknowledge that any use of the Site and
              related services offered and/or any access to private information,
              data or communications using your account and password shall be
              deemed to be either performed by you or authorized by you as the
              case may be. You agree to be bound by any access of the Site
              and/or use of any services offered by the Site (whether such
              access or use are authorized by you or not). You agree that we
              shall be entitled (but not obliged) to act upon, rely on or hold
              you solely responsible and liable in respect thereof as if the
              same were carried out or transmitted by you. You further agree and
              acknowledge that you shall be bound by and agree to fully
              indemnify us against any and all losses arising from the use of or
              access to the Site through your account.
            </Text>
            <Text fontSize="sm" mb="30px" color="#AFAFC2">
              iv. You must not use the website in any way that causes, or is
              likely to cause, the Site or access to it to be interrupted,
              damaged or impaired in any way. You must not engage in activities
              that could harm or potentially harm the Site, its employees,
              officers, representatives, stakeholders or any other party
              directly or indirectly associated with the Site or access to it to
              be interrupted, damaged or impaired in any way. You must not
              breach any applicable laws, rules or regulation, third party
              rights or our Terms and Conditions. You understand that you, and
              not us, are responsible for all electronic communications and
              content sent from your computer to us and you must use the Site
              for lawful purposes only. You are strictly prohibited from using
              the Site (i) for fraudulent purposes, or in connection with a
              criminal offense or other unlawful activity, (ii) to send, use or
              reuse any material that does not belong to you; or is illegal,
              offensive (including but not limited to material that is sexually
              explicit content or which promotes racism, bigotry, hatred or
              physical harm), deceptive, misleading, abusive, indecent,
              harassing, blasphemous, defamatory, libelous, obscene,
              pornographic, pedophilic or menacing; ethnically objectionable,
              disparaging or in breach of copyright, trademark, confidentiality,
              privacy or any other proprietary information or right; or is
              otherwise injurious to third parties; or relates to or promotes
              money laundering or gambling; or is harmful to minors in any way;
              or impersonates another person; or threatens the unity, integrity,
              security or sovereignty of Pakistan or friendly relations with
              foreign States; or objectionable or otherwise unlawful in any
              manner whatsoever; or which consists of or contains software
              viruses, political campaigning, commercial solicitation,
              misleading affiliations with Packr, chain letters, mass mailings
              or any &ldquo;spam”, (iii) use the Site for illegal purposes, (iv)
              to cause annoyance, inconvenience or needless anxiety and (v) for
              any other purposes that is other than as expressly permitted by
              these Terms and Conditions or other than what is intended by us
            </Text>

            <Heading as="h2" size="md" fontWeight="medium" mb="15px">
              3. DISCLAIMER
            </Heading>

            <Text fontSize="sm" mb="30px" color="#AFAFC2">
              You acknowledge and undertake that you are accessing the services
              on the Site and transacting at your own risk and are using your
              best and prudent judgment before entering into any transactions
              through the Site. We shall neither be liable nor responsible for
              any actions or inactions of other Users nor any breach of
              conditions, representations or warranties by the Users nor hereby
              expressly disclaim and any all responsibility and liability in
              that regard. We shall not mediate or resolve any dispute or
              disagreement between you and the Users. By providing the platform,
              Packr does not own, create, sell, resell, control, retail,
              organize, manage, offer, deliver, or supply any products. Users
              alone are responsible for their transaction. When users enter into
              transactions, they are entering into a contract directly with each
              other, fully acknowledging that Packr is not and does not become a
              party to or enter into in any contractual relationship between
              users. We further expressly disclaim any warranties or
              representations (express or implied) in respect of quality,
              suitability, accuracy, reliability, completeness, timeliness,
              performance, safety, merchantability, fitness for a particular
              purpose, or legality of the products whilst using Packr. We do not
              implicitly or explicitly support or endorse the sale or purchase
              of any products on the Site. At no time shall Packr have any
              obligations or liabilities in respect of any transactions on the
              Site
            </Text>

            <Heading as="h2" size="md" fontWeight="medium" mb="15px">
              4. INDEMNITY
            </Heading>

            <Text fontSize="sm" mb="30px" color="#AFAFC2">
              i. Each User agrees that Packr and its affiliates shall not be
              liable to you, the User, for any direct, indirect, incidental,
              special, consequential or exemplary damages, arising from the
              delivery of services including but not limited to damages for
              loss, misdelivery or nondelivery of items or damage to the items.
            </Text>
            <Text fontSize="sm" mb="30px" color="#AFAFC2">
              ii. Each User agrees to indemnify and hold harmless Packr, its
              affiliates and representatives from any and all damages, losses,
              claims and liabilities, penalties, fines, fees, expenses, costs
              (including legal costs on a full indemnity basis) and charges of
              any nature associated with any non-compliance by any User which
              arise or may potentially arise from your submission, posting or
              display of any user content, from your access to or use of the
              services offered by Packr. Furthermore, each User agrees that
              Packr is not responsible, and shall have no liability to you or
              anyone else for any user content, products, service or other
              material transmitted through Packr, including fraudulent, untrue,
              misleading, unsatisfactory, inaccurate, defamatory, offensive or
              illicit material and that the risk of damage from such user
              content or other material rests entirely with the User. Packr
              reserves the right, at its own expense, to assume the exclusive
              defense and control of any matter otherwise subject to
              indemnification by the User
            </Text>
            <Text fontSize="sm" mb="30px" color="#AFAFC2">
              iii. The Users accessing or using the services of Packr shall
              assume the risks of conducting any transactions in connection with
              or through the services. Furthermore, the Users accessing or using
              the services of Packr shall also fully assume all risks of
              liability or harm of any kind arising out of or in connection with
              any subsequent activity relating to the products or services that
              are the subject of the transactions. Examples of such risks shall
              include, but are not limited to, mis-representation of products
              and services, the validity, accuracy, correctness, reliability,
              quality, stability, completeness or currentness of any information
              provided, fraudulent schemes and weight mis-calculations and Packr
              shall not be liable or responsible for any damages, claims,
              liabilities, costs, harm, inconveniences, business disruptions or
              expenditures of any kind that may arise as a result of or in
              connection with any transaction or services availed.
            </Text>
            <Text fontSize="sm" mb="30px" color="#AFAFC2">
              iv. Every User agrees that their relationship with Packr is
              limited to being an independent, third-party traveler, and not an
              employee, agent, or partner of Packr for any reason whatsoever.
              Every user acts and shall act exclusively on their own behalf and
              for their own benefit, and not on behalf, or for the benefit, of
              Packr. Therefore, Packr does not, and shall not be deemed to
              enforce or guarantee you or your performance including but not
              limited to in connection with the Terms and Conditions.
            </Text>
            <Text fontSize="sm" mb="30px" color="#AFAFC2">
              v. In the event that any User has a dispute with any party to a
              transaction, such User agrees to release and indemnify Packr, its
              agents, affiliates, directors, officers and employees from all
              claims, demands, actions, proceedings, costs, expenses and damages
              (including without limitation any actual, special, incidental or
              consequential damages) arising out of or in connection with such
              dispute or the transaction.
            </Text>
            <Text fontSize="sm" mb="30px" color="#AFAFC2">
              vi. To the maximum extent permitted by applicable law, you agree
              to release, defend, indemnify, and hold Packr and its affiliates
              and subsidiaries, their officers, directors, employees and agents,
              harmless from and against any claims, liabilities, damages,
              losses, and expenses, including, without limitation, reasonable
              legal and accounting fees, arising out of or in any way connected
              with the (i) breach of these terms, (ii) your improper use of any
              Packr services, or (iii) your interaction with any User.
            </Text>
            <Text fontSize="sm" mb="30px" color="#AFAFC2">
              vii. The Packr platform and services are provided “as is” and “as
              available.” Packr disclaims all representations and warranties,
              express, implied or statutory, not expressly set out in this
              agreement, including the implied warranties of merchantability,
              fitness for a particular purpose, condition, quality, durability,
              reliability, non-infringement and operation of services. In
              addition, Packr makes no representation, warranty, or guarantee
              regarding the reliability, timeliness, quality, suitability or
              availability of Packr services or any other services requested
              through the use of Packr services. Users agree that the entire
              risk arising out of your use of Packr services, and any service
              requested in connection therewith, remains solely with you, to the
              maximum extent permitted under applicable law
            </Text>
            <Text fontSize="sm" mb="30px" color="#AFAFC2">
              viii. Packr and its affiliates are not responsible for the
              conduct, whether online or offline, of any User, Packr or any
              other third party. You are encouraged to use a reasonable degree
              of sensibility and caution when interacting with other Users or
              any other third party.
            </Text>
            <Text fontSize="sm" mb="30px" color="#AFAFC2">
              ix. Packr is not required to procure insurance for, nor is it
              responsible for private belongings, including the loss of private
              belongings.
            </Text>
            <Text fontSize="sm" mb="30px" color="#AFAFC2">
              x. The User hereby undertakes and acknowledges that the
              responsibility for payment of any taxes, duties, levies, charges
              etcetera, if any, rests solely with them. In case of any issue or
              dispute in relation to the payment of any taxes, duties, levies,
              charges etcetera the User shall be responsible to satisfy the
              relevant authorities, keeping Packr and its agents, affiliates,
              directors, officers and employees free of any such
              responsibilities.
            </Text>
            <Text fontSize="sm" mb="30px" color="#AFAFC2">
              xi. By using Packr and participating in the services, you agree to
              accept such risks and agree that Packr is not responsible for the
              acts or omissions of Users or any other third party.
            </Text>
            <Text fontSize="sm" mb="30px" color="#AFAFC2">
              xii. Packr and its affiliates expressly disclaim any liability
              arising from the unauthorized use of your User account. Should you
              suspect that any unauthorized party may be using your User account
              or you suspect any other breach of security, you agree to notify
              us immediately.
            </Text>
            <Text fontSize="sm" mb="30px" color="#AFAFC2">
              xiii. If any User breaches any terms of this Agreement, or if
              Packr has reasonable grounds to believe that a User is in breach
              of any terms, Packr shall have the right to take such disciplinary
              actions as it deems appropriate, including without limitation,
              removal of that User from the Packr community without liability
              for any losses or damages arising out of or in connection with
              such removal.
            </Text>
            <Text fontSize="sm" mb="30px" color="#AFAFC2">
              xiv. You hereby expressly release Packr as owned by Packr Private
              Limited and/or its affiliates and/or any of its officers and
              representatives from any cost, damage, liability or other
              consequence of any of the actions/inactions of the Users or other
              service providers and specifically waiver any claims or demands
              that you may have in this behalf under any statute, contract or
              otherwise.
            </Text>

            <Heading as="h2" size="md" fontWeight="medium" mb="15px">
              5. AMENDMENTS TO CONDITIONS OR ALTERATIONS OF SERVICE AND RELATED
              PROMISE
            </Heading>

            <Text fontSize="sm" mb="30px" color="#AFAFC2">
              We reserve the right to make changes to the Site, its policies,
              these terms and conditions and any other publicly displayed
              condition or service promise at any time. You will be subject to
              the policies and terms and conditions in force at the time you
              used the Site unless any change to those policies or these
              conditions is required to be made by law or government authority
              (in which case it will apply to orders previously placed by you).
              If any of these conditions is deemed invalid, void, or for any
              reason unenforceable, that condition will be deemed severable and
              will not affect the validity and enforceability of any remaining
              condition.
            </Text>

            <Heading as="h2" size="md" fontWeight="medium" mb="15px">
              6. EVENTS BEYOND OUR CONTROL
            </Heading>

            <Text fontSize="sm" mb="30px" color="#AFAFC2">
              We will not be held responsible for any delay or failure to comply
              with our obligations under these conditions if the delay or
              failure arises from any cause which is beyond our reasonable
              control. This condition does not affect your statutory rights.
            </Text>

            <Heading as="h2" size="md" fontWeight="medium" mb="15px">
              7. WAIVER
            </Heading>

            <Text fontSize="sm" mb="30px" color="#AFAFC2">
              You acknowledge and recognize that we are a private commercial
              enterprise and reserve the right to conduct business to achieve
              our objectives in any manner we deem fit. You also acknowledge
              that if you breach the terms and conditions stated herein and we
              take no action, we are still entitled to use our rights and
              remedies in any other situation where you breach these conditions.
            </Text>

            <Heading as="h2" size="md" fontWeight="medium" mb="15px">
              8. TERMINATION
            </Heading>

            <Text fontSize="sm" mb="30px" color="#AFAFC2">
              In addition to any other legal or equitable remedies, we may,
              without prior notice to you, immediately terminate the Terms and
              Conditions or revoke any or all of your rights granted under the
              Terms and Conditions. Upon any termination of this Agreement, you
              shall immediately cease all access to and use of the Site and we
              shall, in addition to any other legal or equitable remedies,
              immediately revoke all password(s) and account identification
              issued to you and deny your access to and use of this Site in
              whole or in part. Any termination of this agreement shall not
              affect the respective rights and obligations (including without
              limitation, payment obligations) of the parties arising before the
              date of termination. You furthermore agree that the Site shall not
              be liable to you or to any other person as a result of any such
              suspension or termination. If you are dissatisfied with the Site
              or with any terms, conditions, rules, policies, guidelines, or
              practices in operating the Site, your sole and exclusive remedy is
              to discontinue using the Site.
            </Text>

            <Heading as="h2" size="md" fontWeight="medium" mb="15px">
              9. EVENTS BEYOND OUR CONTROL
            </Heading>

            <Text fontSize="sm" mb="30px" color="#AFAFC2">
              We will not be held responsible for any delay or failure to comply
              with our obligations under conditions if the delay or failure
              arises from any cause which is beyond our reasonable control. This
              condition does not affect your statutory rights.
            </Text>

            <Heading as="h2" size="md" fontWeight="medium" mb="15px">
              10. WAIVER
            </Heading>

            <Text fontSize="sm" mb="30px" color="#AFAFC2">
              You acknowledge and recognize that we are a private commercial
              enterprise and reserve the right to conduct business to achieve
              our objectives in any manner we deem fit. You also acknowledge
              that if you breach the Terms and Conditions stated herein and we
              take no action, we are still entitled to use our rights and
              remedies in any other situation where you breach the Terms and
              Conditions.
            </Text>

            <Heading as="h2" size="md" fontWeight="medium" mb="15px">
              11. GOVERNING LAW AND JURISDICTION
            </Heading>

            <Text fontSize="sm" mb="30px" color="#AFAFC2">
              These Terms and Conditions are governed by and construed in
              accordance with the laws of the Islamic Republic of Pakistan. You
              agree, as we do, to submit to the exclusive jurisdiction of the
              courts in Karachi.
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button bg="transparent" variant="outline" onClick={onClose}>
              Decline
            </Button>
            <Button mx="5px" onClick={onClose}>
              Accept
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
