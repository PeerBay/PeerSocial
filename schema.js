var schema={
  "datatypes": {
    "Boolean": {
      "ancestors": [
        "DataType"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "Boolean", 
      "instances": [
        "False", 
        "True"
      ], 
      "label": "Boolean", 
      "properties": [], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "DataType"
      ], 
      "url": "http://schema.org/Boolean"
    }, 
    "DataType": {
      "ancestors": [], 
      "comment": "", 
      "comment_plain": "", 
      "id": "DataType", 
      "label": "Data Type", 
      "properties": [], 
      "specific_properties": [], 
      "subtypes": [
        "Boolean", 
        "Date", 
        "DateTime", 
        "Number", 
        "Text", 
        "Time"
      ], 
      "supertypes": [], 
      "url": "http://schema.org/DataType"
    }, 
    "Date": {
      "ancestors": [
        "DataType"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "Date", 
      "label": "Date", 
      "properties": [], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "DataType"
      ], 
      "url": "http://schema.org/Date"
    }, 
    "DateTime": {
      "ancestors": [
        "DataType"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "DateTime", 
      "label": "Date Time", 
      "properties": [], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "DataType"
      ], 
      "url": "http://schema.org/DateTime"
    }, 
    "Float": {
      "ancestors": [
        "DataType", 
        "Number"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "Float", 
      "label": "Float", 
      "properties": [], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "Number"
      ], 
      "url": "http://schema.org/Float"
    }, 
    "Integer": {
      "ancestors": [
        "DataType", 
        "Number"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "Integer", 
      "label": "Integer", 
      "properties": [], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "Number"
      ], 
      "url": "http://schema.org/Integer"
    }, 
    "Number": {
      "ancestors": [
        "DataType"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "Number", 
      "label": "Number", 
      "properties": [], 
      "specific_properties": [], 
      "subtypes": [
        "Float", 
        "Integer"
      ], 
      "supertypes": [
        "DataType"
      ], 
      "url": "http://schema.org/Number"
    }, 
    "Text": {
      "ancestors": [
        "DataType"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "Text", 
      "label": "Text", 
      "properties": [], 
      "specific_properties": [], 
      "subtypes": [
        "URL"
      ], 
      "supertypes": [
        "DataType"
      ], 
      "url": "http://schema.org/Text"
    }, 
    "Time": {
      "ancestors": [
        "DataType"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "Time", 
      "label": "Time", 
      "properties": [], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "DataType"
      ], 
      "url": "http://schema.org/Time"
    }, 
    "URL": {
      "ancestors": [
        "DataType", 
        "Text"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "URL", 
      "label": "URL", 
      "properties": [], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "Text"
      ], 
      "url": "http://schema.org/URL"
    }
  }, 
  "properties": {
    "about": {
      "comment": "The subject matter of the content.", 
      "comment_plain": "The subject matter of the content.", 
      "domains": [
        "CommunicateAction", 
        "CreativeWork"
      ], 
      "id": "about", 
      "label": "About", 
      "ranges": [
        "Thing"
      ]
    }, 
    "acceptedOffer": {
      "comment": "The offer(s) -- e.g., product, quantity and price combinations -- included in the order.", 
      "comment_plain": "The offer(s) -- e.g., product, quantity and price combinations -- included in the order.", 
      "domains": [
        "Order"
      ], 
      "id": "acceptedOffer", 
      "label": "Accepted Offer", 
      "ranges": [
        "Offer"
      ]
    }, 
    "acceptedPaymentMethod": {
      "comment": "The payment method(s) accepted by seller for this offer.", 
      "comment_plain": "The payment method(s) accepted by seller for this offer.", 
      "domains": [
        "Offer", 
        "Demand"
      ], 
      "id": "acceptedPaymentMethod", 
      "label": "Accepted Payment Method", 
      "ranges": [
        "PaymentMethod"
      ]
    }, 
    "acceptsReservations": {
      "comment": "Either <code>Yes/No</code>, or a URL at which reservations can be made.", 
      "comment_plain": "Either Yes/No, or a URL at which reservations can be made.", 
      "domains": [
        "FoodEstablishment"
      ], 
      "id": "acceptsReservations", 
      "label": "Accepts Reservations", 
      "ranges": [
        "Text", 
        "URL"
      ]
    }, 
    "accessCode": {
      "comment": "Password, PIN, or access code needed for delivery (e.g. from a locker).", 
      "comment_plain": "Password, PIN, or access code needed for delivery (e.g. from a locker).", 
      "domains": [
        "DeliveryEvent"
      ], 
      "id": "accessCode", 
      "label": "Access Code", 
      "ranges": [
        "Text"
      ]
    }, 
    "accessibilityAPI": {
      "comment": "Indicates that the resource is compatible with the referenced accessibility API (<a href=\"http://www.w3.org/wiki/WebSchemas/Accessibility\">WebSchemas wiki lists possible values</a>).\n     ", 
      "comment_plain": "Indicates that the resource is compatible with the referenced accessibility API (WebSchemas wiki lists possible values).\n     ", 
      "domains": [
        "CreativeWork"
      ], 
      "id": "accessibilityAPI", 
      "label": "Accessibility API", 
      "ranges": [
        "Text"
      ]
    }, 
    "accessibilityControl": {
      "comment": "Identifies input methods that are sufficient to fully control the described resource (<a href=\"http://www.w3.org/wiki/WebSchemas/Accessibility\">WebSchemas wiki lists possible values</a>).", 
      "comment_plain": "Identifies input methods that are sufficient to fully control the described resource (WebSchemas wiki lists possible values).", 
      "domains": [
        "CreativeWork"
      ], 
      "id": "accessibilityControl", 
      "label": "Accessibility Control", 
      "ranges": [
        "Text"
      ]
    }, 
    "accessibilityFeature": {
      "comment": "Content features of the resource, such as accessible media, alternatives and supported enhancements for accessibility (<a href=\"http://www.w3.org/wiki/WebSchemas/Accessibility\">WebSchemas wiki lists possible values</a>).", 
      "comment_plain": "Content features of the resource, such as accessible media, alternatives and supported enhancements for accessibility (WebSchemas wiki lists possible values).", 
      "domains": [
        "CreativeWork"
      ], 
      "id": "accessibilityFeature", 
      "label": "Accessibility Feature", 
      "ranges": [
        "Text"
      ]
    }, 
    "accessibilityHazard": {
      "comment": "A characteristic of the described resource that is physiologically dangerous to some users. Related to WCAG 2.0 guideline 2.3. (<a href=\"http://www.w3.org/wiki/WebSchemas/Accessibility\">WebSchemas wiki lists possible values</a>)", 
      "comment_plain": "A characteristic of the described resource that is physiologically dangerous to some users. Related to WCAG 2.0 guideline 2.3. (WebSchemas wiki lists possible values)", 
      "domains": [
        "CreativeWork"
      ], 
      "id": "accessibilityHazard", 
      "label": "Accessibility Hazard", 
      "ranges": [
        "Text"
      ]
    }, 
    "accountablePerson": {
      "comment": "Specifies the Person that is legally accountable for the CreativeWork.", 
      "comment_plain": "Specifies the Person that is legally accountable for the CreativeWork.", 
      "domains": [
        "CreativeWork"
      ], 
      "id": "accountablePerson", 
      "label": "Accountable Person", 
      "ranges": [
        "Person"
      ]
    }, 
    "acquiredFrom": {
      "comment": "The organization or person from which the product was acquired.", 
      "comment_plain": "The organization or person from which the product was acquired.", 
      "domains": [
        "OwnershipInfo"
      ], 
      "id": "acquiredFrom", 
      "label": "Acquired From", 
      "ranges": [
        "Organization", 
        "Person"
      ]
    }, 
    "action": {
      "comment": "The movement the muscle generates.", 
      "comment_plain": "The movement the muscle generates.", 
      "domains": [
        "Muscle"
      ], 
      "id": "action", 
      "label": "Action", 
      "ranges": [
        "Text"
      ]
    }, 
    "activeIngredient": {
      "comment": "An active ingredient, typically chemical compounds and/or biologic substances.", 
      "comment_plain": "An active ingredient, typically chemical compounds and/or biologic substances.", 
      "domains": [
        "DrugStrength", 
        "DietarySupplement", 
        "Drug"
      ], 
      "id": "activeIngredient", 
      "label": "Active Ingredient", 
      "ranges": [
        "Text"
      ]
    }, 
    "activityDuration": {
      "comment": "Length of time to engage in the activity.", 
      "comment_plain": "Length of time to engage in the activity.", 
      "domains": [
        "ExercisePlan"
      ], 
      "id": "activityDuration", 
      "label": "Activity Duration", 
      "ranges": [
        "Duration"
      ]
    }, 
    "activityFrequency": {
      "comment": "How often one should engage in the activity.", 
      "comment_plain": "How often one should engage in the activity.", 
      "domains": [
        "ExercisePlan"
      ], 
      "id": "activityFrequency", 
      "label": "Activity Frequency", 
      "ranges": [
        "Text"
      ]
    }, 
    "actor": {
      "comment": "A cast member of the movie, tv/radio series, season, episode, or video.", 
      "comment_plain": "A cast member of the movie, tv/radio series, season, episode, or video.", 
      "domains": [
        "Series", 
        "Episode", 
        "Movie"
      ], 
      "id": "actor", 
      "label": "Actor", 
      "ranges": [
        "Person"
      ]
    }, 
    "actors": {
      "comment": "A cast member of the movie, tv/radio series, season, episode, or video. (legacy spelling; see singular form, actor)", 
      "comment_plain": "A cast member of the movie, tv/radio series, season, episode, or video. (legacy spelling; see singular form, actor)", 
      "domains": [
        "Series", 
        "Episode", 
        "Movie"
      ], 
      "id": "actors", 
      "label": "Actors", 
      "ranges": [
        "Person"
      ]
    }, 
    "addOn": {
      "comment": "An additional offer that can only be obtained in combination with the first base offer (e.g. supplements and extensions that are available for a surcharge).", 
      "comment_plain": "An additional offer that can only be obtained in combination with the first base offer (e.g. supplements and extensions that are available for a surcharge).", 
      "domains": [
        "Offer"
      ], 
      "id": "addOn", 
      "label": "Add On", 
      "ranges": [
        "Offer"
      ]
    }, 
    "additionalName": {
      "comment": "An additional name for a Person, can be used for a middle name.", 
      "comment_plain": "An additional name for a Person, can be used for a middle name.", 
      "domains": [
        "Person"
      ], 
      "id": "additionalName", 
      "label": "Additional Name", 
      "ranges": [
        "Text"
      ]
    }, 
    "additionalType": {
      "comment": "An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. In RDFa syntax, it is better to use the native RDFa syntax - the 'typeof' attribute - for multiple types. Schema.org tools may have only weaker understanding of extra types, in particular those defined externally.", 
      "comment_plain": "An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. In RDFa syntax, it is better to use the native RDFa syntax - the 'typeof' attribute - for multiple types. Schema.org tools may have only weaker understanding of extra types, in particular those defined externally.", 
      "domains": [
        "Thing"
      ], 
      "id": "additionalType", 
      "label": "Additional Type", 
      "ranges": [
        "URL"
      ]
    }, 
    "additionalVariable": {
      "comment": "Any additional component of the exercise prescription that may need to be articulated to the patient. This may include the order of exercises, the number of repetitions of movement, quantitative distance, progressions over time, etc.", 
      "comment_plain": "Any additional component of the exercise prescription that may need to be articulated to the patient. This may include the order of exercises, the number of repetitions of movement, quantitative distance, progressions over time, etc.", 
      "domains": [
        "ExercisePlan"
      ], 
      "id": "additionalVariable", 
      "label": "Additional Variable", 
      "ranges": [
        "Text"
      ]
    }, 
    "address": {
      "comment": "Physical address of the item.", 
      "comment_plain": "Physical address of the item.", 
      "domains": [
        "Person", 
        "Place", 
        "Organization"
      ], 
      "id": "address", 
      "label": "Address", 
      "ranges": [
        "PostalAddress"
      ]
    }, 
    "addressCountry": {
      "comment": "The country. For example, USA. You can also provide the two-letter <a href=\"http://en.wikipedia.org/wiki/ISO_3166-1\">ISO 3166-1 alpha-2 country code</a>.", 
      "comment_plain": "The country. For example, USA. You can also provide the two-letter ISO 3166-1 alpha-2 country code.", 
      "domains": [
        "PostalAddress"
      ], 
      "id": "addressCountry", 
      "label": "Address Country", 
      "ranges": [
        "Country"
      ]
    }, 
    "addressLocality": {
      "comment": "The locality. For example, Mountain View.", 
      "comment_plain": "The locality. For example, Mountain View.", 
      "domains": [
        "PostalAddress"
      ], 
      "id": "addressLocality", 
      "label": "Address Locality", 
      "ranges": [
        "Text"
      ]
    }, 
    "addressRegion": {
      "comment": "The region. For example, CA.", 
      "comment_plain": "The region. For example, CA.", 
      "domains": [
        "PostalAddress"
      ], 
      "id": "addressRegion", 
      "label": "Address Region", 
      "ranges": [
        "Text"
      ]
    }, 
    "administrationRoute": {
      "comment": "A route by which this drug may be administered, e.g. 'oral'.", 
      "comment_plain": "A route by which this drug may be administered, e.g. 'oral'.", 
      "domains": [
        "Drug"
      ], 
      "id": "administrationRoute", 
      "label": "Administration Route", 
      "ranges": [
        "Text"
      ]
    }, 
    "advanceBookingRequirement": {
      "comment": "The amount of time that is required between accepting the offer and the actual usage of the resource or service.", 
      "comment_plain": "The amount of time that is required between accepting the offer and the actual usage of the resource or service.", 
      "domains": [
        "Offer", 
        "Demand"
      ], 
      "id": "advanceBookingRequirement", 
      "label": "Advance Booking Requirement", 
      "ranges": [
        "QuantitativeValue"
      ]
    }, 
    "adverseOutcome": {
      "comment": "A possible complication and/or side effect of this therapy. If it is known that an adverse outcome is serious (resulting in death, disability, or permanent damage; requiring hospitalization; or is otherwise life-threatening or requires immediate medical attention), tag it as a seriouseAdverseOutcome instead.", 
      "comment_plain": "A possible complication and/or side effect of this therapy. If it is known that an adverse outcome is serious (resulting in death, disability, or permanent damage; requiring hospitalization; or is otherwise life-threatening or requires immediate medical attention), tag it as a seriouseAdverseOutcome instead.", 
      "domains": [
        "MedicalDevice", 
        "MedicalTherapy"
      ], 
      "id": "adverseOutcome", 
      "label": "Adverse Outcome", 
      "ranges": [
        "MedicalEntity"
      ]
    }, 
    "affectedBy": {
      "comment": "Drugs that affect the test's results.", 
      "comment_plain": "Drugs that affect the test's results.", 
      "domains": [
        "MedicalTest"
      ], 
      "id": "affectedBy", 
      "label": "Affected by", 
      "ranges": [
        "Drug"
      ]
    }, 
    "affiliation": {
      "comment": "An organization that this person is affiliated with. For example, a school/university, a club, or a team.", 
      "comment_plain": "An organization that this person is affiliated with. For example, a school/university, a club, or a team.", 
      "domains": [
        "Person"
      ], 
      "id": "affiliation", 
      "label": "Affiliation", 
      "ranges": [
        "Organization"
      ]
    }, 
    "agent": {
      "comment": "The direct performer or driver of the action (animate or inanimate). e.g. *John* wrote a book.", 
      "comment_plain": "The direct performer or driver of the action (animate or inanimate). e.g. *John* wrote a book.", 
      "domains": [
        "Action"
      ], 
      "id": "agent", 
      "label": "Agent", 
      "ranges": [
        "Organization", 
        "Person"
      ]
    }, 
    "aggregateRating": {
      "comment": "The overall rating, based on a collection of reviews or ratings, of the item.", 
      "comment_plain": "The overall rating, based on a collection of reviews or ratings, of the item.", 
      "domains": [
        "Organization", 
        "Product", 
        "CreativeWork", 
        "Place", 
        "Offer"
      ], 
      "id": "aggregateRating", 
      "label": "Aggregate Rating", 
      "ranges": [
        "AggregateRating"
      ]
    }, 
    "album": {
      "comment": "A music album.", 
      "comment_plain": "A music album.", 
      "domains": [
        "MusicGroup"
      ], 
      "id": "album", 
      "label": "Album", 
      "ranges": [
        "MusicAlbum"
      ]
    }, 
    "albums": {
      "comment": "A collection of music albums (legacy spelling; see singular form, album).", 
      "comment_plain": "A collection of music albums (legacy spelling; see singular form, album).", 
      "domains": [
        "MusicGroup"
      ], 
      "id": "albums", 
      "label": "Albums", 
      "ranges": [
        "MusicAlbum"
      ]
    }, 
    "alcoholWarning": {
      "comment": "Any precaution, guidance, contraindication, etc. related to consumption of alcohol while taking this drug.", 
      "comment_plain": "Any precaution, guidance, contraindication, etc. related to consumption of alcohol while taking this drug.", 
      "domains": [
        "Drug"
      ], 
      "id": "alcoholWarning", 
      "label": "Alcohol Warning", 
      "ranges": [
        "Text"
      ]
    }, 
    "algorithm": {
      "comment": "The algorithm or rules to follow to compute the score.", 
      "comment_plain": "The algorithm or rules to follow to compute the score.", 
      "domains": [
        "MedicalRiskScore"
      ], 
      "id": "algorithm", 
      "label": "Algorithm", 
      "ranges": [
        "Text"
      ]
    }, 
    "alignmentType": {
      "comment": "A category of alignment between the learning resource and the framework node. Recommended values include: 'assesses', 'teaches', 'requires', 'textComplexity', 'readingLevel', 'educationalSubject', and 'educationLevel'.", 
      "comment_plain": "A category of alignment between the learning resource and the framework node. Recommended values include: 'assesses', 'teaches', 'requires', 'textComplexity', 'readingLevel', 'educationalSubject', and 'educationLevel'.", 
      "domains": [
        "AlignmentObject"
      ], 
      "id": "alignmentType", 
      "label": "Alignment Type", 
      "ranges": [
        "Text"
      ]
    }, 
    "alternateName": {
      "comment": "An alias for the item.", 
      "comment_plain": "An alias for the item.", 
      "domains": [
        "Thing"
      ], 
      "id": "alternateName", 
      "label": "Alternate Name", 
      "ranges": [
        "Text"
      ]
    }, 
    "alternativeHeadline": {
      "comment": "A secondary title of the CreativeWork.", 
      "comment_plain": "A secondary title of the CreativeWork.", 
      "domains": [
        "CreativeWork"
      ], 
      "id": "alternativeHeadline", 
      "label": "Alternative Headline", 
      "ranges": [
        "Text"
      ]
    }, 
    "alumni": {
      "comment": "Alumni of educational organization.", 
      "comment_plain": "Alumni of educational organization.", 
      "domains": [
        "EducationalOrganization"
      ], 
      "id": "alumni", 
      "label": "Alumni", 
      "ranges": [
        "Person"
      ]
    }, 
    "alumniOf": {
      "comment": "An educational organizations that the person is an alumni of.", 
      "comment_plain": "An educational organizations that the person is an alumni of.", 
      "domains": [
        "Person"
      ], 
      "id": "alumniOf", 
      "label": "Alumni of", 
      "ranges": [
        "EducationalOrganization"
      ]
    }, 
    "amountOfThisGood": {
      "comment": "The quantity of the goods included in the offer.", 
      "comment_plain": "The quantity of the goods included in the offer.", 
      "domains": [
        "TypeAndQuantityNode"
      ], 
      "id": "amountOfThisGood", 
      "label": "Amount of This Good", 
      "ranges": [
        "Number"
      ]
    }, 
    "antagonist": {
      "comment": "The muscle whose action counteracts the specified muscle.", 
      "comment_plain": "The muscle whose action counteracts the specified muscle.", 
      "domains": [
        "Muscle"
      ], 
      "id": "antagonist", 
      "label": "Antagonist", 
      "ranges": [
        "Muscle"
      ]
    }, 
    "applicableLocation": {
      "comment": "The location in which the status applies.", 
      "comment_plain": "The location in which the status applies.", 
      "domains": [
        "DrugLegalStatus", 
        "DrugCost"
      ], 
      "id": "applicableLocation", 
      "label": "Applicable Location", 
      "ranges": [
        "AdministrativeArea"
      ]
    }, 
    "applicationCategory": {
      "comment": "Type of software application, e.g. \"Game, Multimedia\".", 
      "comment_plain": "Type of software application, e.g. \"Game, Multimedia\".", 
      "domains": [
        "SoftwareApplication"
      ], 
      "id": "applicationCategory", 
      "label": "Application Category", 
      "ranges": [
        "Text", 
        "URL"
      ]
    }, 
    "applicationSubCategory": {
      "comment": "Subcategory of the application, e.g. \"Arcade Game\".", 
      "comment_plain": "Subcategory of the application, e.g. \"Arcade Game\".", 
      "domains": [
        "SoftwareApplication"
      ], 
      "id": "applicationSubCategory", 
      "label": "Application Sub Category", 
      "ranges": [
        "Text", 
        "URL"
      ]
    }, 
    "applicationSuite": {
      "comment": "The name of the application suite to which the application belongs (e.g. Excel belongs to Office)", 
      "comment_plain": "The name of the application suite to which the application belongs (e.g. Excel belongs to Office)", 
      "domains": [
        "SoftwareApplication"
      ], 
      "id": "applicationSuite", 
      "label": "Application Suite", 
      "ranges": [
        "Text"
      ]
    }, 
    "appliesToDeliveryMethod": {
      "comment": "The delivery method(s) to which the delivery charge or payment charge specification applies.", 
      "comment_plain": "The delivery method(s) to which the delivery charge or payment charge specification applies.", 
      "domains": [
        "DeliveryChargeSpecification", 
        "PaymentChargeSpecification"
      ], 
      "id": "appliesToDeliveryMethod", 
      "label": "Applies to Delivery Method", 
      "ranges": [
        "DeliveryMethod"
      ]
    }, 
    "appliesToPaymentMethod": {
      "comment": "The payment method(s) to which the payment charge specification applies.", 
      "comment_plain": "The payment method(s) to which the payment charge specification applies.", 
      "domains": [
        "PaymentChargeSpecification"
      ], 
      "id": "appliesToPaymentMethod", 
      "label": "Applies to Payment Method", 
      "ranges": [
        "PaymentMethod"
      ]
    }, 
    "area": {
      "comment": "The area within which users can expect to reach the broadcast service.", 
      "comment_plain": "The area within which users can expect to reach the broadcast service.", 
      "domains": [
        "BroadcastService"
      ], 
      "id": "area", 
      "label": "Area", 
      "ranges": [
        "Place"
      ]
    }, 
    "areaServed": {
      "comment": "The location served by this contact point (e.g., a phone number intended for Europeans vs. North Americans or only within the United States.)", 
      "comment_plain": "The location served by this contact point (e.g., a phone number intended for Europeans vs. North Americans or only within the United States.)", 
      "domains": [
        "ContactPoint"
      ], 
      "id": "areaServed", 
      "label": "Area Served", 
      "ranges": [
        "AdministrativeArea"
      ]
    }, 
    "arterialBranch": {
      "comment": "The branches that comprise the arterial structure.", 
      "comment_plain": "The branches that comprise the arterial structure.", 
      "domains": [
        "Artery"
      ], 
      "id": "arterialBranch", 
      "label": "Arterial Branch", 
      "ranges": [
        "AnatomicalStructure"
      ]
    }, 
    "articleBody": {
      "comment": "The actual body of the article.", 
      "comment_plain": "The actual body of the article.", 
      "domains": [
        "Article"
      ], 
      "id": "articleBody", 
      "label": "Article Body", 
      "ranges": [
        "Text"
      ]
    }, 
    "articleSection": {
      "comment": "Articles may belong to one or more 'sections' in a magazine or newspaper, such as Sports, Lifestyle, etc.", 
      "comment_plain": "Articles may belong to one or more 'sections' in a magazine or newspaper, such as Sports, Lifestyle, etc.", 
      "domains": [
        "Article"
      ], 
      "id": "articleSection", 
      "label": "Article Section", 
      "ranges": [
        "Text"
      ]
    }, 
    "aspect": {
      "comment": "An aspect of medical practice that is considered on the page, such as 'diagnosis', 'treatment', 'causes', 'prognosis', 'etiology', 'epidemiology', etc.", 
      "comment_plain": "An aspect of medical practice that is considered on the page, such as 'diagnosis', 'treatment', 'causes', 'prognosis', 'etiology', 'epidemiology', etc.", 
      "domains": [
        "MedicalWebPage"
      ], 
      "id": "aspect", 
      "label": "Aspect", 
      "ranges": [
        "Text"
      ]
    }, 
    "assembly": {
      "comment": "Library file name e.g., mscorlib.dll, system.web.dll", 
      "comment_plain": "Library file name e.g., mscorlib.dll, system.web.dll", 
      "domains": [
        "APIReference"
      ], 
      "id": "assembly", 
      "label": "Assembly", 
      "ranges": [
        "Text"
      ]
    }, 
    "assemblyVersion": {
      "comment": "Associated product/technology version. e.g., .NET Framework 4.5", 
      "comment_plain": "Associated product/technology version. e.g., .NET Framework 4.5", 
      "domains": [
        "APIReference"
      ], 
      "id": "assemblyVersion", 
      "label": "Assembly Version", 
      "ranges": [
        "Text"
      ]
    }, 
    "associatedAnatomy": {
      "comment": "The anatomy of the underlying organ system or structures associated with this entity.", 
      "comment_plain": "The anatomy of the underlying organ system or structures associated with this entity.", 
      "domains": [
        "MedicalCondition", 
        "PhysicalActivity"
      ], 
      "id": "associatedAnatomy", 
      "label": "Associated Anatomy", 
      "ranges": [
        "AnatomicalSystem", 
        "SuperficialAnatomy", 
        "AnatomicalStructure"
      ]
    }, 
    "associatedArticle": {
      "comment": "A NewsArticle associated with the Media Object.", 
      "comment_plain": "A NewsArticle associated with the Media Object.", 
      "domains": [
        "MediaObject"
      ], 
      "id": "associatedArticle", 
      "label": "Associated Article", 
      "ranges": [
        "NewsArticle"
      ]
    }, 
    "associatedMedia": {
      "comment": "The media objects that encode this creative work. This property is a synonym for encodings.", 
      "comment_plain": "The media objects that encode this creative work. This property is a synonym for encodings.", 
      "domains": [
        "CreativeWork"
      ], 
      "id": "associatedMedia", 
      "label": "Associated Media", 
      "ranges": [
        "MediaObject"
      ]
    }, 
    "associatedPathophysiology": {
      "comment": "If applicable, a description of the pathophysiology associated with the anatomical system, including potential abnormal changes in the mechanical, physical, and biochemical functions of the system.", 
      "comment_plain": "If applicable, a description of the pathophysiology associated with the anatomical system, including potential abnormal changes in the mechanical, physical, and biochemical functions of the system.", 
      "domains": [
        "SuperficialAnatomy", 
        "AnatomicalSystem", 
        "AnatomicalStructure"
      ], 
      "id": "associatedPathophysiology", 
      "label": "Associated Pathophysiology", 
      "ranges": [
        "Text"
      ]
    }, 
    "attendee": {
      "comment": "A person or organization attending the event.", 
      "comment_plain": "A person or organization attending the event.", 
      "domains": [
        "Event"
      ], 
      "id": "attendee", 
      "label": "Attendee", 
      "ranges": [
        "Organization", 
        "Person"
      ]
    }, 
    "attendees": {
      "comment": "A person attending the event (legacy spelling; see singular form, attendee).", 
      "comment_plain": "A person attending the event (legacy spelling; see singular form, attendee).", 
      "domains": [
        "Event"
      ], 
      "id": "attendees", 
      "label": "Attendees", 
      "ranges": [
        "Organization", 
        "Person"
      ]
    }, 
    "audience": {
      "comment": "The intended audience of the item, i.e. the group for whom the item was created.", 
      "comment_plain": "The intended audience of the item, i.e. the group for whom the item was created.", 
      "domains": [
        "PlayAction", 
        "CreativeWork", 
        "Product"
      ], 
      "id": "audience", 
      "label": "Audience", 
      "ranges": [
        "Audience"
      ]
    }, 
    "audienceType": {
      "comment": "The target group associated with a given audience (e.g. veterans, car owners, musicians, etc.)\n      domain: Audience\n      Range: Text\n    ", 
      "comment_plain": "The target group associated with a given audience (e.g. veterans, car owners, musicians, etc.)\n      domain: Audience\n      Range: Text\n    ", 
      "domains": [
        "Audience"
      ], 
      "id": "audienceType", 
      "label": "Audience Type", 
      "ranges": [
        "Text"
      ]
    }, 
    "audio": {
      "comment": "An embedded audio object.", 
      "comment_plain": "An embedded audio object.", 
      "domains": [
        "CreativeWork"
      ], 
      "id": "audio", 
      "label": "Audio", 
      "ranges": [
        "AudioObject"
      ]
    }, 
    "author": {
      "comment": "The author of this content. Please note that author is special in that HTML 5 provides a special mechanism for indicating authorship via the rel tag. That is equivalent to this and may be used interchangeably.", 
      "comment_plain": "The author of this content. Please note that author is special in that HTML 5 provides a special mechanism for indicating authorship via the rel tag. That is equivalent to this and may be used interchangeably.", 
      "domains": [
        "CreativeWork"
      ], 
      "id": "author", 
      "label": "Author", 
      "ranges": [
        "Organization", 
        "Person"
      ]
    }, 
    "availability": {
      "comment": "The availability of this item\u2014for example In stock, Out of stock, Pre-order, etc.", 
      "comment_plain": "The availability of this item\u2014for example In stock, Out of stock, Pre-order, etc.", 
      "domains": [
        "Offer", 
        "Demand"
      ], 
      "id": "availability", 
      "label": "Availability", 
      "ranges": [
        "ItemAvailability"
      ]
    }, 
    "availabilityEnds": {
      "comment": "The end of the availability of the product or service included in the offer.", 
      "comment_plain": "The end of the availability of the product or service included in the offer.", 
      "domains": [
        "Offer", 
        "Demand"
      ], 
      "id": "availabilityEnds", 
      "label": "Availability Ends", 
      "ranges": [
        "DateTime"
      ]
    }, 
    "availabilityStarts": {
      "comment": "The beginning of the availability of the product or service included in the offer.", 
      "comment_plain": "The beginning of the availability of the product or service included in the offer.", 
      "domains": [
        "Offer", 
        "Demand"
      ], 
      "id": "availabilityStarts", 
      "label": "Availability Starts", 
      "ranges": [
        "DateTime"
      ]
    }, 
    "availableAtOrFrom": {
      "comment": "The place(s) from which the offer can be obtained (e.g. store locations).", 
      "comment_plain": "The place(s) from which the offer can be obtained (e.g. store locations).", 
      "domains": [
        "Offer", 
        "Demand"
      ], 
      "id": "availableAtOrFrom", 
      "label": "Available At or From", 
      "ranges": [
        "Place"
      ]
    }, 
    "availableChannel": {
      "comment": "A means of accessing the service (e.g. a phone bank, a web site, a location, etc.)", 
      "comment_plain": "A means of accessing the service (e.g. a phone bank, a web site, a location, etc.)", 
      "domains": [
        "Service"
      ], 
      "id": "availableChannel", 
      "label": "Available Channel", 
      "ranges": [
        "ServiceChannel"
      ]
    }, 
    "availableDeliveryMethod": {
      "comment": "The delivery method(s) available for this offer.", 
      "comment_plain": "The delivery method(s) available for this offer.", 
      "domains": [
        "Offer", 
        "Demand"
      ], 
      "id": "availableDeliveryMethod", 
      "label": "Available Delivery Method", 
      "ranges": [
        "DeliveryMethod"
      ]
    }, 
    "availableFrom": {
      "comment": "When the item is available for pickup from the store, locker, etc.", 
      "comment_plain": "When the item is available for pickup from the store, locker, etc.", 
      "domains": [
        "DeliveryEvent"
      ], 
      "id": "availableFrom", 
      "label": "Available From", 
      "ranges": [
        "DateTime"
      ]
    }, 
    "availableIn": {
      "comment": "The location in which the strength is available.", 
      "comment_plain": "The location in which the strength is available.", 
      "domains": [
        "DrugStrength"
      ], 
      "id": "availableIn", 
      "label": "Available in", 
      "ranges": [
        "AdministrativeArea"
      ]
    }, 
    "availableLanguage": {
      "comment": "A language someone may use with the item.", 
      "comment_plain": "A language someone may use with the item.", 
      "domains": [
        "ServiceChannel", 
        "ContactPoint"
      ], 
      "id": "availableLanguage", 
      "label": "Available Language", 
      "ranges": [
        "Language"
      ]
    }, 
    "availableService": {
      "comment": "A medical service available from this provider.", 
      "comment_plain": "A medical service available from this provider.", 
      "domains": [
        "Physician", 
        "Hospital", 
        "MedicalClinic"
      ], 
      "id": "availableService", 
      "label": "Available Service", 
      "ranges": [
        "MedicalTest", 
        "MedicalProcedure", 
        "MedicalTherapy"
      ]
    }, 
    "availableStrength": {
      "comment": "An available dosage strength for the drug.", 
      "comment_plain": "An available dosage strength for the drug.", 
      "domains": [
        "Drug"
      ], 
      "id": "availableStrength", 
      "label": "Available Strength", 
      "ranges": [
        "DrugStrength"
      ]
    }, 
    "availableTest": {
      "comment": "A diagnostic test or procedure offered by this lab.", 
      "comment_plain": "A diagnostic test or procedure offered by this lab.", 
      "domains": [
        "DiagnosticLab"
      ], 
      "id": "availableTest", 
      "label": "Available Test", 
      "ranges": [
        "MedicalTest"
      ]
    }, 
    "availableThrough": {
      "comment": "After this date, the item will no longer be available for pickup.", 
      "comment_plain": "After this date, the item will no longer be available for pickup.", 
      "domains": [
        "DeliveryEvent"
      ], 
      "id": "availableThrough", 
      "label": "Available Through", 
      "ranges": [
        "DateTime"
      ]
    }, 
    "award": {
      "comment": "An award won by this person or for this creative work.", 
      "comment_plain": "An award won by this person or for this creative work.", 
      "domains": [
        "Person", 
        "CreativeWork"
      ], 
      "id": "award", 
      "label": "Award", 
      "ranges": [
        "Text"
      ]
    }, 
    "awards": {
      "comment": "Awards won by this person or for this creative work. (legacy spelling; see singular form, award)", 
      "comment_plain": "Awards won by this person or for this creative work. (legacy spelling; see singular form, award)", 
      "domains": [
        "Person", 
        "CreativeWork"
      ], 
      "id": "awards", 
      "label": "Awards", 
      "ranges": [
        "Text"
      ]
    }, 
    "background": {
      "comment": "Descriptive information establishing a historical perspective on the supplement. May include the rationale for the name, the population where the supplement first came to prominence, etc.", 
      "comment_plain": "Descriptive information establishing a historical perspective on the supplement. May include the rationale for the name, the population where the supplement first came to prominence, etc.", 
      "domains": [
        "DietarySupplement"
      ], 
      "id": "background", 
      "label": "Background", 
      "ranges": [
        "Text"
      ]
    }, 
    "baseSalary": {
      "comment": "The base salary of the job.", 
      "comment_plain": "The base salary of the job.", 
      "domains": [
        "JobPosting"
      ], 
      "id": "baseSalary", 
      "label": "Base Salary", 
      "ranges": [
        "Number"
      ]
    }, 
    "benefits": {
      "comment": "Description of benefits associated with the job.", 
      "comment_plain": "Description of benefits associated with the job.", 
      "domains": [
        "JobPosting"
      ], 
      "id": "benefits", 
      "label": "Benefits", 
      "ranges": [
        "Text"
      ]
    }, 
    "bestRating": {
      "comment": "The highest value allowed in this rating system. If bestRating is omitted, 5 is assumed.", 
      "comment_plain": "The highest value allowed in this rating system. If bestRating is omitted, 5 is assumed.", 
      "domains": [
        "Rating"
      ], 
      "id": "bestRating", 
      "label": "Best Rating", 
      "ranges": [
        "Number", 
        "Text"
      ]
    }, 
    "billingAddress": {
      "comment": "The billing address for the order.", 
      "comment_plain": "The billing address for the order.", 
      "domains": [
        "Order"
      ], 
      "id": "billingAddress", 
      "label": "Billing Address", 
      "ranges": [
        "PostalAddress"
      ]
    }, 
    "billingIncrement": {
      "comment": "This property specifies the minimal quantity and rounding increment that will be the basis for the billing. The unit of measurement is specified by the unitCode property.", 
      "comment_plain": "This property specifies the minimal quantity and rounding increment that will be the basis for the billing. The unit of measurement is specified by the unitCode property.", 
      "domains": [
        "UnitPriceSpecification"
      ], 
      "id": "billingIncrement", 
      "label": "Billing Increment", 
      "ranges": [
        "Number"
      ]
    }, 
    "biomechnicalClass": {
      "comment": "The biomechanical properties of the bone.", 
      "comment_plain": "The biomechanical properties of the bone.", 
      "domains": [
        "Joint"
      ], 
      "id": "biomechnicalClass", 
      "label": "Biomechnical Class", 
      "ranges": [
        "Text"
      ]
    }, 
    "birthDate": {
      "comment": "Date of birth.", 
      "comment_plain": "Date of birth.", 
      "domains": [
        "Person"
      ], 
      "id": "birthDate", 
      "label": "Birth Date", 
      "ranges": [
        "Date"
      ]
    }, 
    "bitrate": {
      "comment": "The bitrate of the media object.", 
      "comment_plain": "The bitrate of the media object.", 
      "domains": [
        "MediaObject"
      ], 
      "id": "bitrate", 
      "label": "Bitrate", 
      "ranges": [
        "Text"
      ]
    }, 
    "blogPost": {
      "comment": "A posting that is part of this blog.", 
      "comment_plain": "A posting that is part of this blog.", 
      "domains": [
        "Blog"
      ], 
      "id": "blogPost", 
      "label": "Blog Post", 
      "ranges": [
        "BlogPosting"
      ]
    }, 
    "blogPosts": {
      "comment": "The postings that are part of this blog (legacy spelling; see singular form, blogPost).", 
      "comment_plain": "The postings that are part of this blog (legacy spelling; see singular form, blogPost).", 
      "domains": [
        "Blog"
      ], 
      "id": "blogPosts", 
      "label": "Blog Posts", 
      "ranges": [
        "BlogPosting"
      ]
    }, 
    "bloodSupply": {
      "comment": "The blood vessel that carries blood from the heart to the muscle.", 
      "comment_plain": "The blood vessel that carries blood from the heart to the muscle.", 
      "domains": [
        "Muscle"
      ], 
      "id": "bloodSupply", 
      "label": "Blood Supply", 
      "ranges": [
        "Vessel"
      ]
    }, 
    "bodyLocation": {
      "comment": "Location in the body of the anatomical structure.", 
      "comment_plain": "Location in the body of the anatomical structure.", 
      "domains": [
        "AnatomicalStructure"
      ], 
      "id": "bodyLocation", 
      "label": "Body Location", 
      "ranges": [
        "Text"
      ]
    }, 
    "bookEdition": {
      "comment": "The edition of the book.", 
      "comment_plain": "The edition of the book.", 
      "domains": [
        "Book"
      ], 
      "id": "bookEdition", 
      "label": "Book Edition", 
      "ranges": [
        "Text"
      ]
    }, 
    "bookFormat": {
      "comment": "The format of the book.", 
      "comment_plain": "The format of the book.", 
      "domains": [
        "Book"
      ], 
      "id": "bookFormat", 
      "label": "Book Format", 
      "ranges": [
        "BookFormatType"
      ]
    }, 
    "borrower": {
      "comment": "A sub property of participant. The person that borrows the object being lent.", 
      "comment_plain": "A sub property of participant. The person that borrows the object being lent.", 
      "domains": [
        "LendAction"
      ], 
      "id": "borrower", 
      "label": "Borrower", 
      "ranges": [
        "Person"
      ]
    }, 
    "box": {
      "comment": "A polygon is the area enclosed by a point-to-point path for which the starting and ending points are the same. A polygon is expressed as a series of four or more spacedelimited points where the first and final points are identical.", 
      "comment_plain": "A polygon is the area enclosed by a point-to-point path for which the starting and ending points are the same. A polygon is expressed as a series of four or more spacedelimited points where the first and final points are identical.", 
      "domains": [
        "GeoShape"
      ], 
      "id": "box", 
      "label": "Box", 
      "ranges": [
        "Text"
      ]
    }, 
    "branch": {
      "comment": "The branches that delineate from the nerve bundle.", 
      "comment_plain": "The branches that delineate from the nerve bundle.", 
      "domains": [
        "Nerve"
      ], 
      "id": "branch", 
      "label": "Branch", 
      "ranges": [
        "AnatomicalStructure", 
        "Nerve"
      ]
    }, 
    "branchOf": {
      "comment": "The larger organization that this local business is a branch of, if any.", 
      "comment_plain": "The larger organization that this local business is a branch of, if any.", 
      "domains": [
        "LocalBusiness"
      ], 
      "id": "branchOf", 
      "label": "Branch of", 
      "ranges": [
        "Organization"
      ]
    }, 
    "brand": {
      "comment": "The brand(s) associated with a product or service, or the brand(s) maintained by an organization or business person.", 
      "comment_plain": "The brand(s) associated with a product or service, or the brand(s) maintained by an organization or business person.", 
      "domains": [
        "Person", 
        "Product", 
        "Organization"
      ], 
      "id": "brand", 
      "label": "Brand", 
      "ranges": [
        "Organization", 
        "Brand"
      ]
    }, 
    "breadcrumb": {
      "comment": "A set of links that can help a user understand and navigate a website hierarchy.", 
      "comment_plain": "A set of links that can help a user understand and navigate a website hierarchy.", 
      "domains": [
        "WebPage"
      ], 
      "id": "breadcrumb", 
      "label": "Breadcrumb", 
      "ranges": [
        "Text"
      ]
    }, 
    "breastfeedingWarning": {
      "comment": "Any precaution, guidance, contraindication, etc. related to this drug's use by breastfeeding mothers.", 
      "comment_plain": "Any precaution, guidance, contraindication, etc. related to this drug's use by breastfeeding mothers.", 
      "domains": [
        "Drug"
      ], 
      "id": "breastfeedingWarning", 
      "label": "Breastfeeding Warning", 
      "ranges": [
        "Text"
      ]
    }, 
    "broadcaster": {
      "comment": "The organization owning or operating the broadcast service.", 
      "comment_plain": "The organization owning or operating the broadcast service.", 
      "domains": [
        "BroadcastService"
      ], 
      "id": "broadcaster", 
      "label": "Broadcaster", 
      "ranges": [
        "Organization"
      ]
    }, 
    "browserRequirements": {
      "comment": "Specifies browser requirements in human-readable text. For example,\"requires HTML5 support\".", 
      "comment_plain": "Specifies browser requirements in human-readable text. For example,\"requires HTML5 support\".", 
      "domains": [
        "WebApplication"
      ], 
      "id": "browserRequirements", 
      "label": "Browser Requirements", 
      "ranges": [
        "Text"
      ]
    }, 
    "businessFunction": {
      "comment": "The business function (e.g. sell, lease, repair, dispose) of the offer or component of a bundle (TypeAndQuantityNode). The default is http://purl.org/goodrelations/v1#Sell.", 
      "comment_plain": "The business function (e.g. sell, lease, repair, dispose) of the offer or component of a bundle (TypeAndQuantityNode). The default is http://purl.org/goodrelations/v1#Sell.", 
      "domains": [
        "Offer", 
        "TypeAndQuantityNode", 
        "Demand"
      ], 
      "id": "businessFunction", 
      "label": "Business Function", 
      "ranges": [
        "BusinessFunction"
      ]
    }, 
    "buyer": {
      "comment": "A sub property of participant. The participant/person/organization that bought the object.", 
      "comment_plain": "A sub property of participant. The participant/person/organization that bought the object.", 
      "domains": [
        "SellAction"
      ], 
      "id": "buyer", 
      "label": "Buyer", 
      "ranges": [
        "Person"
      ]
    }, 
    "byArtist": {
      "comment": "The artist that performed this album or recording.", 
      "comment_plain": "The artist that performed this album or recording.", 
      "domains": [
        "MusicAlbum", 
        "MusicRecording"
      ], 
      "id": "byArtist", 
      "label": "By Artist", 
      "ranges": [
        "MusicGroup"
      ]
    }, 
    "calories": {
      "comment": "The number of calories", 
      "comment_plain": "The number of calories", 
      "domains": [
        "NutritionInformation"
      ], 
      "id": "calories", 
      "label": "Calories", 
      "ranges": [
        "Energy"
      ]
    }, 
    "candidate": {
      "comment": "A sub property of object. The candidate subject of this action.", 
      "comment_plain": "A sub property of object. The candidate subject of this action.", 
      "domains": [
        "VoteAction"
      ], 
      "id": "candidate", 
      "label": "Candidate", 
      "ranges": [
        "Person"
      ]
    }, 
    "caption": {
      "comment": "The caption for this object.", 
      "comment_plain": "The caption for this object.", 
      "domains": [
        "VideoObject", 
        "ImageObject"
      ], 
      "id": "caption", 
      "label": "Caption", 
      "ranges": [
        "Text"
      ]
    }, 
    "carbohydrateContent": {
      "comment": "The number of grams of carbohydrates.", 
      "comment_plain": "The number of grams of carbohydrates.", 
      "domains": [
        "NutritionInformation"
      ], 
      "id": "carbohydrateContent", 
      "label": "Carbohydrate Content", 
      "ranges": [
        "Mass"
      ]
    }, 
    "carrier": {
      "comment": "The party responsible for the parcel delivery.", 
      "comment_plain": "The party responsible for the parcel delivery.", 
      "domains": [
        "ParcelDelivery"
      ], 
      "id": "carrier", 
      "label": "Carrier", 
      "ranges": [
        "Organization"
      ]
    }, 
    "carrierRequirements": {
      "comment": "Specifies specific carrier(s) requirements for the application (e.g. an application may only work on a specific carrier network).", 
      "comment_plain": "Specifies specific carrier(s) requirements for the application (e.g. an application may only work on a specific carrier network).", 
      "domains": [
        "MobileApplication"
      ], 
      "id": "carrierRequirements", 
      "label": "Carrier Requirements", 
      "ranges": [
        "Text"
      ]
    }, 
    "catalog": {
      "comment": "A data catalog which contains a dataset.", 
      "comment_plain": "A data catalog which contains a dataset.", 
      "domains": [
        "Dataset"
      ], 
      "id": "catalog", 
      "label": "Catalog", 
      "ranges": [
        "DataCatalog"
      ]
    }, 
    "category": {
      "comment": "A category for the item. Greater signs or slashes can be used to informally indicate a category hierarchy.", 
      "comment_plain": "A category for the item. Greater signs or slashes can be used to informally indicate a category hierarchy.", 
      "domains": [
        "PhysicalActivity", 
        "Offer"
      ], 
      "id": "category", 
      "label": "Category", 
      "ranges": [
        "Text", 
        "PhysicalActivityCategory", 
        "Thing"
      ]
    }, 
    "cause": {
      "comment": "An underlying cause. More specifically, one of the causative agent(s) that are most directly responsible for the pathophysiologic process that eventually results in the occurrence.", 
      "comment_plain": "An underlying cause. More specifically, one of the causative agent(s) that are most directly responsible for the pathophysiologic process that eventually results in the occurrence.", 
      "domains": [
        "MedicalCondition", 
        "MedicalSignOrSymptom"
      ], 
      "id": "cause", 
      "label": "Cause", 
      "ranges": [
        "MedicalCause"
      ]
    }, 
    "causeOf": {
      "comment": "The condition, complication, symptom, sign, etc. caused.", 
      "comment_plain": "The condition, complication, symptom, sign, etc. caused.", 
      "domains": [
        "MedicalCause"
      ], 
      "id": "causeOf", 
      "label": "Cause of", 
      "ranges": [
        "MedicalEntity"
      ]
    }, 
    "childMaxAge": {
      "comment": "Maximal age of the child", 
      "comment_plain": "Maximal age of the child", 
      "domains": [
        "ParentAudience"
      ], 
      "id": "childMaxAge", 
      "label": "Child Max Age", 
      "ranges": [
        "Number"
      ]
    }, 
    "childMinAge": {
      "comment": "Minimal age of the child", 
      "comment_plain": "Minimal age of the child", 
      "domains": [
        "ParentAudience"
      ], 
      "id": "childMinAge", 
      "label": "Child Min Age", 
      "ranges": [
        "Number"
      ]
    }, 
    "children": {
      "comment": "A child of the person.", 
      "comment_plain": "A child of the person.", 
      "domains": [
        "Person"
      ], 
      "id": "children", 
      "label": "Children", 
      "ranges": [
        "Person"
      ]
    }, 
    "cholesterolContent": {
      "comment": "The number of milligrams of cholesterol.", 
      "comment_plain": "The number of milligrams of cholesterol.", 
      "domains": [
        "NutritionInformation"
      ], 
      "id": "cholesterolContent", 
      "label": "Cholesterol Content", 
      "ranges": [
        "Mass"
      ]
    }, 
    "circle": {
      "comment": "A circle is the circular region of a specified radius centered at a specified latitude and longitude. A circle is expressed as a pair followed by a radius in meters.", 
      "comment_plain": "A circle is the circular region of a specified radius centered at a specified latitude and longitude. A circle is expressed as a pair followed by a radius in meters.", 
      "domains": [
        "GeoShape"
      ], 
      "id": "circle", 
      "label": "Circle", 
      "ranges": [
        "Text"
      ]
    }, 
    "citation": {
      "comment": "A citation or reference to another creative work, such as another publication, web page, scholarly article, etc.", 
      "comment_plain": "A citation or reference to another creative work, such as another publication, web page, scholarly article, etc.", 
      "domains": [
        "CreativeWork"
      ], 
      "id": "citation", 
      "label": "Citation", 
      "ranges": [
        "CreativeWork", 
        "Text"
      ]
    }, 
    "clincalPharmacology": {
      "comment": "Description of the absorption and elimination of drugs, including their concentration (pharmacokinetics, pK) and biological effects (pharmacodynamics, pD).", 
      "comment_plain": "Description of the absorption and elimination of drugs, including their concentration (pharmacokinetics, pK) and biological effects (pharmacodynamics, pD).", 
      "domains": [
        "Drug"
      ], 
      "id": "clincalPharmacology", 
      "label": "Clincal Pharmacology", 
      "ranges": [
        "Text"
      ]
    }, 
    "clipNumber": {
      "comment": "Position of the clip within an ordered group of clips.", 
      "comment_plain": "Position of the clip within an ordered group of clips.", 
      "domains": [
        "Clip"
      ], 
      "id": "clipNumber", 
      "label": "Clip Number", 
      "ranges": [
        "Integer"
      ]
    }, 
    "closes": {
      "comment": "The closing hour of the place or service on the given day(s) of the week.", 
      "comment_plain": "The closing hour of the place or service on the given day(s) of the week.", 
      "domains": [
        "OpeningHoursSpecification"
      ], 
      "id": "closes", 
      "label": "Closes", 
      "ranges": [
        "Time"
      ]
    }, 
    "code": {
      "comment": "A medical code for the entity, taken from a controlled vocabulary or ontology such as ICD-9, DiseasesDB, MeSH, SNOMED-CT, RxNorm, etc.", 
      "comment_plain": "A medical code for the entity, taken from a controlled vocabulary or ontology such as ICD-9, DiseasesDB, MeSH, SNOMED-CT, RxNorm, etc.", 
      "domains": [
        "MedicalEntity"
      ], 
      "id": "code", 
      "label": "Code", 
      "ranges": [
        "MedicalCode"
      ]
    }, 
    "codeRepository": {
      "comment": "Link to the repository where the un-compiled, human readable code and related code is located (SVN, github, CodePlex)", 
      "comment_plain": "Link to the repository where the un-compiled, human readable code and related code is located (SVN, github, CodePlex)", 
      "domains": [
        "Code"
      ], 
      "id": "codeRepository", 
      "label": "Code Repository", 
      "ranges": [
        "URL"
      ]
    }, 
    "codeValue": {
      "comment": "The actual code.", 
      "comment_plain": "The actual code.", 
      "domains": [
        "MedicalCode"
      ], 
      "id": "codeValue", 
      "label": "Code Value", 
      "ranges": [
        "Text"
      ]
    }, 
    "codingSystem": {
      "comment": "The coding system, e.g. 'ICD-10'.", 
      "comment_plain": "The coding system, e.g. 'ICD-10'.", 
      "domains": [
        "MedicalCode"
      ], 
      "id": "codingSystem", 
      "label": "Coding System", 
      "ranges": [
        "Text"
      ]
    }, 
    "colleague": {
      "comment": "A colleague of the person.", 
      "comment_plain": "A colleague of the person.", 
      "domains": [
        "Person"
      ], 
      "id": "colleague", 
      "label": "Colleague", 
      "ranges": [
        "Person"
      ]
    }, 
    "colleagues": {
      "comment": "A colleague of the person (legacy spelling; see singular form, colleague).", 
      "comment_plain": "A colleague of the person (legacy spelling; see singular form, colleague).", 
      "domains": [
        "Person"
      ], 
      "id": "colleagues", 
      "label": "Colleagues", 
      "ranges": [
        "Person"
      ]
    }, 
    "collection": {
      "comment": "A sub property of object. The collection target of the action.", 
      "comment_plain": "A sub property of object. The collection target of the action.", 
      "domains": [
        "UpdateAction"
      ], 
      "id": "collection", 
      "label": "Collection", 
      "ranges": [
        "Thing"
      ]
    }, 
    "color": {
      "comment": "The color of the product.", 
      "comment_plain": "The color of the product.", 
      "domains": [
        "Product"
      ], 
      "id": "color", 
      "label": "Color", 
      "ranges": [
        "Text"
      ]
    }, 
    "comment": {
      "comment": "Comments, typically from users, on this CreativeWork.", 
      "comment_plain": "Comments, typically from users, on this CreativeWork.", 
      "domains": [
        "CreativeWork"
      ], 
      "id": "comment", 
      "label": "Comment", 
      "ranges": [
        "UserComments"
      ]
    }, 
    "commentText": {
      "comment": "The text of the UserComment.", 
      "comment_plain": "The text of the UserComment.", 
      "domains": [
        "UserComments"
      ], 
      "id": "commentText", 
      "label": "Comment Text", 
      "ranges": [
        "Text"
      ]
    }, 
    "commentTime": {
      "comment": "The time at which the UserComment was made.", 
      "comment_plain": "The time at which the UserComment was made.", 
      "domains": [
        "UserComments"
      ], 
      "id": "commentTime", 
      "label": "Comment Time", 
      "ranges": [
        "Date"
      ]
    }, 
    "comprisedOf": {
      "comment": "The underlying anatomical structures, such as organs, that comprise the anatomical system.", 
      "comment_plain": "The underlying anatomical structures, such as organs, that comprise the anatomical system.", 
      "domains": [
        "AnatomicalSystem"
      ], 
      "id": "comprisedOf", 
      "label": "Comprised of", 
      "ranges": [
        "AnatomicalStructure", 
        "AnatomicalSystem"
      ]
    }, 
    "confirmationNumber": {
      "comment": "A number that confirms the given order.", 
      "comment_plain": "A number that confirms the given order.", 
      "domains": [
        "Order"
      ], 
      "id": "confirmationNumber", 
      "label": "Confirmation Number", 
      "ranges": [
        "Text"
      ]
    }, 
    "connectedTo": {
      "comment": "Other anatomical structures to which this structure is connected.", 
      "comment_plain": "Other anatomical structures to which this structure is connected.", 
      "domains": [
        "AnatomicalStructure"
      ], 
      "id": "connectedTo", 
      "label": "Connected to", 
      "ranges": [
        "AnatomicalStructure"
      ]
    }, 
    "contactOption": {
      "comment": "An option available on this contact point (e.g. a toll-free number or support for hearing-impaired callers.)", 
      "comment_plain": "An option available on this contact point (e.g. a toll-free number or support for hearing-impaired callers.)", 
      "domains": [
        "ContactPoint"
      ], 
      "id": "contactOption", 
      "label": "Contact Option", 
      "ranges": [
        "ContactPointOption"
      ]
    }, 
    "contactPoint": {
      "comment": "A contact point for a person or organization.", 
      "comment_plain": "A contact point for a person or organization.", 
      "domains": [
        "Person", 
        "Organization"
      ], 
      "id": "contactPoint", 
      "label": "Contact Point", 
      "ranges": [
        "ContactPoint"
      ]
    }, 
    "contactPoints": {
      "comment": "A contact point for a person or organization (legacy spelling; see singular form, contactPoint).", 
      "comment_plain": "A contact point for a person or organization (legacy spelling; see singular form, contactPoint).", 
      "domains": [
        "Person", 
        "Organization"
      ], 
      "id": "contactPoints", 
      "label": "Contact Points", 
      "ranges": [
        "ContactPoint"
      ]
    }, 
    "contactType": {
      "comment": "A person or organization can have different contact points, for different purposes. For example, a sales contact point, a PR contact point and so on. This property is used to specify the kind of contact point.", 
      "comment_plain": "A person or organization can have different contact points, for different purposes. For example, a sales contact point, a PR contact point and so on. This property is used to specify the kind of contact point.", 
      "domains": [
        "ContactPoint"
      ], 
      "id": "contactType", 
      "label": "Contact Type", 
      "ranges": [
        "Text"
      ]
    }, 
    "containedIn": {
      "comment": "The basic containment relation between places.", 
      "comment_plain": "The basic containment relation between places.", 
      "domains": [
        "Place"
      ], 
      "id": "containedIn", 
      "label": "Contained in", 
      "ranges": [
        "Place"
      ]
    }, 
    "contentLocation": {
      "comment": "The location of the content.", 
      "comment_plain": "The location of the content.", 
      "domains": [
        "CreativeWork"
      ], 
      "id": "contentLocation", 
      "label": "Content Location", 
      "ranges": [
        "Place"
      ]
    }, 
    "contentRating": {
      "comment": "Official rating of a piece of content\u2014for example,'MPAA PG-13'.", 
      "comment_plain": "Official rating of a piece of content\u2014for example,'MPAA PG-13'.", 
      "domains": [
        "CreativeWork"
      ], 
      "id": "contentRating", 
      "label": "Content Rating", 
      "ranges": [
        "Text"
      ]
    }, 
    "contentSize": {
      "comment": "File size in (mega/kilo) bytes.", 
      "comment_plain": "File size in (mega/kilo) bytes.", 
      "domains": [
        "MediaObject"
      ], 
      "id": "contentSize", 
      "label": "Content Size", 
      "ranges": [
        "Text"
      ]
    }, 
    "contentUrl": {
      "comment": "Actual bytes of the media object, for example the image file or video file. (previous spelling: contentURL)", 
      "comment_plain": "Actual bytes of the media object, for example the image file or video file. (previous spelling: contentURL)", 
      "domains": [
        "MediaObject"
      ], 
      "id": "contentUrl", 
      "label": "Content Url", 
      "ranges": [
        "URL"
      ]
    }, 
    "contraindication": {
      "comment": "A contraindication for this therapy.", 
      "comment_plain": "A contraindication for this therapy.", 
      "domains": [
        "MedicalDevice", 
        "MedicalTherapy"
      ], 
      "id": "contraindication", 
      "label": "Contraindication", 
      "ranges": [
        "MedicalContraindication"
      ]
    }, 
    "contributor": {
      "comment": "A secondary contributor to the CreativeWork.", 
      "comment_plain": "A secondary contributor to the CreativeWork.", 
      "domains": [
        "CreativeWork"
      ], 
      "id": "contributor", 
      "label": "Contributor", 
      "ranges": [
        "Organization", 
        "Person"
      ]
    }, 
    "cookTime": {
      "comment": "The time it takes to actually cook the dish, in <a href=\"http://en.wikipedia.org/wiki/ISO_8601\">ISO 8601 duration format</a>.", 
      "comment_plain": "The time it takes to actually cook the dish, in ISO 8601 duration format.", 
      "domains": [
        "Recipe"
      ], 
      "id": "cookTime", 
      "label": "Cook Time", 
      "ranges": [
        "Duration"
      ]
    }, 
    "cookingMethod": {
      "comment": "The method of cooking, such as Frying, Steaming, ...", 
      "comment_plain": "The method of cooking, such as Frying, Steaming, ...", 
      "domains": [
        "Recipe"
      ], 
      "id": "cookingMethod", 
      "label": "Cooking Method", 
      "ranges": [
        "Text"
      ]
    }, 
    "copyrightHolder": {
      "comment": "The party holding the legal copyright to the CreativeWork.", 
      "comment_plain": "The party holding the legal copyright to the CreativeWork.", 
      "domains": [
        "CreativeWork"
      ], 
      "id": "copyrightHolder", 
      "label": "Copyright Holder", 
      "ranges": [
        "Organization", 
        "Person"
      ]
    }, 
    "copyrightYear": {
      "comment": "The year during which the claimed copyright for the CreativeWork was first asserted.", 
      "comment_plain": "The year during which the claimed copyright for the CreativeWork was first asserted.", 
      "domains": [
        "CreativeWork"
      ], 
      "id": "copyrightYear", 
      "label": "Copyright Year", 
      "ranges": [
        "Number"
      ]
    }, 
    "cost": {
      "comment": "Cost per unit of the drug, as reported by the source being tagged.", 
      "comment_plain": "Cost per unit of the drug, as reported by the source being tagged.", 
      "domains": [
        "Drug"
      ], 
      "id": "cost", 
      "label": "Cost", 
      "ranges": [
        "DrugCost"
      ]
    }, 
    "costCategory": {
      "comment": "The category of cost, such as wholesale, retail, reimbursement cap, etc.", 
      "comment_plain": "The category of cost, such as wholesale, retail, reimbursement cap, etc.", 
      "domains": [
        "DrugCost"
      ], 
      "id": "costCategory", 
      "label": "Cost Category", 
      "ranges": [
        "DrugCostCategory"
      ]
    }, 
    "costCurrency": {
      "comment": "The currency (in 3-letter <a href=\"http://en.wikipedia.org/wiki/ISO_4217\">ISO 4217 format</a>) of the drug cost.", 
      "comment_plain": "The currency (in 3-letter ISO 4217 format) of the drug cost.", 
      "domains": [
        "DrugCost"
      ], 
      "id": "costCurrency", 
      "label": "Cost Currency", 
      "ranges": [
        "Text"
      ]
    }, 
    "costOrigin": {
      "comment": "Additional details to capture the origin of the cost data. For example, 'Medicare Part B'.", 
      "comment_plain": "Additional details to capture the origin of the cost data. For example, 'Medicare Part B'.", 
      "domains": [
        "DrugCost"
      ], 
      "id": "costOrigin", 
      "label": "Cost Origin", 
      "ranges": [
        "Text"
      ]
    }, 
    "costPerUnit": {
      "comment": "The cost per unit of the drug.", 
      "comment_plain": "The cost per unit of the drug.", 
      "domains": [
        "DrugCost"
      ], 
      "id": "costPerUnit", 
      "label": "Cost Per Unit", 
      "ranges": [
        "Number", 
        "Text"
      ]
    }, 
    "countriesNotSupported": {
      "comment": "Countries for which the application is not supported. You can also provide the two-letter ISO 3166-1 alpha-2 country code.", 
      "comment_plain": "Countries for which the application is not supported. You can also provide the two-letter ISO 3166-1 alpha-2 country code.", 
      "domains": [
        "SoftwareApplication"
      ], 
      "id": "countriesNotSupported", 
      "label": "Countries Not Supported", 
      "ranges": [
        "Text"
      ]
    }, 
    "countriesSupported": {
      "comment": "Countries for which the application is supported. You can also provide the two-letter ISO 3166-1 alpha-2 country code.", 
      "comment_plain": "Countries for which the application is supported. You can also provide the two-letter ISO 3166-1 alpha-2 country code.", 
      "domains": [
        "SoftwareApplication"
      ], 
      "id": "countriesSupported", 
      "label": "Countries Supported", 
      "ranges": [
        "Text"
      ]
    }, 
    "course": {
      "comment": "A sub property of location. The course where this action was taken.", 
      "comment_plain": "A sub property of location. The course where this action was taken.", 
      "domains": [
        "ExerciseAction"
      ], 
      "id": "course", 
      "label": "Course", 
      "ranges": [
        "Place"
      ]
    }, 
    "creator": {
      "comment": "The creator/author of this CreativeWork or UserComments. This is the same as the Author property for CreativeWork.", 
      "comment_plain": "The creator/author of this CreativeWork or UserComments. This is the same as the Author property for CreativeWork.", 
      "domains": [
        "UserComments", 
        "CreativeWork"
      ], 
      "id": "creator", 
      "label": "Creator", 
      "ranges": [
        "Organization", 
        "Person"
      ]
    }, 
    "currenciesAccepted": {
      "comment": "The currency accepted (in <a href=\"http://en.wikipedia.org/wiki/ISO_4217\">ISO 4217 currency format</a>).", 
      "comment_plain": "The currency accepted (in ISO 4217 currency format).", 
      "domains": [
        "LocalBusiness"
      ], 
      "id": "currenciesAccepted", 
      "label": "Currencies Accepted", 
      "ranges": [
        "Text"
      ]
    }, 
    "customer": {
      "comment": "Party placing the order.", 
      "comment_plain": "Party placing the order.", 
      "domains": [
        "Order"
      ], 
      "id": "customer", 
      "label": "Customer", 
      "ranges": [
        "Organization", 
        "Person"
      ]
    }, 
    "dataset": {
      "comment": "A dataset contained in a catalog.", 
      "comment_plain": "A dataset contained in a catalog.", 
      "domains": [
        "DataCatalog"
      ], 
      "id": "dataset", 
      "label": "Dataset", 
      "ranges": [
        "Dataset"
      ]
    }, 
    "dateCreated": {
      "comment": "The date on which the CreativeWork was created.", 
      "comment_plain": "The date on which the CreativeWork was created.", 
      "domains": [
        "CreativeWork"
      ], 
      "id": "dateCreated", 
      "label": "Date Created", 
      "ranges": [
        "Date"
      ]
    }, 
    "dateModified": {
      "comment": "The date on which the CreativeWork was most recently modified.", 
      "comment_plain": "The date on which the CreativeWork was most recently modified.", 
      "domains": [
        "CreativeWork"
      ], 
      "id": "dateModified", 
      "label": "Date Modified", 
      "ranges": [
        "Date"
      ]
    }, 
    "datePosted": {
      "comment": "Publication date for the job posting.", 
      "comment_plain": "Publication date for the job posting.", 
      "domains": [
        "JobPosting"
      ], 
      "id": "datePosted", 
      "label": "Date Posted", 
      "ranges": [
        "Date"
      ]
    }, 
    "datePublished": {
      "comment": "Date of first broadcast/publication.", 
      "comment_plain": "Date of first broadcast/publication.", 
      "domains": [
        "CreativeWork"
      ], 
      "id": "datePublished", 
      "label": "Date Published", 
      "ranges": [
        "Date"
      ]
    }, 
    "dateline": {
      "comment": "The location where the NewsArticle was produced.", 
      "comment_plain": "The location where the NewsArticle was produced.", 
      "domains": [
        "NewsArticle"
      ], 
      "id": "dateline", 
      "label": "Dateline", 
      "ranges": [
        "Text"
      ]
    }, 
    "dayOfWeek": {
      "comment": "The day of the week for which these opening hours are valid.", 
      "comment_plain": "The day of the week for which these opening hours are valid.", 
      "domains": [
        "OpeningHoursSpecification"
      ], 
      "id": "dayOfWeek", 
      "label": "Day of Week", 
      "ranges": [
        "DayOfWeek"
      ]
    }, 
    "deathDate": {
      "comment": "Date of death.", 
      "comment_plain": "Date of death.", 
      "domains": [
        "Person"
      ], 
      "id": "deathDate", 
      "label": "Death Date", 
      "ranges": [
        "Date"
      ]
    }, 
    "deliveryAddress": {
      "comment": "Destination address.", 
      "comment_plain": "Destination address.", 
      "domains": [
        "ParcelDelivery"
      ], 
      "id": "deliveryAddress", 
      "label": "Delivery Address", 
      "ranges": [
        "PostalAddress"
      ]
    }, 
    "deliveryLeadTime": {
      "comment": "The typical delay between the receipt of the order and the goods leaving the warehouse.", 
      "comment_plain": "The typical delay between the receipt of the order and the goods leaving the warehouse.", 
      "domains": [
        "Offer", 
        "Demand"
      ], 
      "id": "deliveryLeadTime", 
      "label": "Delivery Lead Time", 
      "ranges": [
        "QuantitativeValue"
      ]
    }, 
    "deliveryMethod": {
      "comment": "A sub property of instrument. The method of delivery", 
      "comment_plain": "A sub property of instrument. The method of delivery", 
      "domains": [
        "ReceiveAction", 
        "TrackAction", 
        "SendAction"
      ], 
      "id": "deliveryMethod", 
      "label": "Delivery Method", 
      "ranges": [
        "DeliveryMethod"
      ]
    }, 
    "deliveryStatus": {
      "comment": "New entry added as the package passes through each leg of its journey (from shipment to final delivery).", 
      "comment_plain": "New entry added as the package passes through each leg of its journey (from shipment to final delivery).", 
      "domains": [
        "ParcelDelivery"
      ], 
      "id": "deliveryStatus", 
      "label": "Delivery Status", 
      "ranges": [
        "DeliveryEvent"
      ]
    }, 
    "department": {
      "comment": "A relationship between an organization and a department of that organization, also described as an organization (allowing different urls, logos, opening hours). For example: a store with a pharmacy, or a bakery with a cafe.", 
      "comment_plain": "A relationship between an organization and a department of that organization, also described as an organization (allowing different urls, logos, opening hours). For example: a store with a pharmacy, or a bakery with a cafe.", 
      "domains": [
        "Organization"
      ], 
      "id": "department", 
      "label": "Department", 
      "ranges": [
        "Organization"
      ]
    }, 
    "dependencies": {
      "comment": "Prerequisites needed to fulfill steps in article.", 
      "comment_plain": "Prerequisites needed to fulfill steps in article.", 
      "domains": [
        "TechArticle"
      ], 
      "id": "dependencies", 
      "label": "Dependencies", 
      "ranges": [
        "Text"
      ]
    }, 
    "depth": {
      "comment": "The depth of the product.", 
      "comment_plain": "The depth of the product.", 
      "domains": [
        "Product"
      ], 
      "id": "depth", 
      "label": "Depth", 
      "ranges": [
        "Distance", 
        "QuantitativeValue"
      ]
    }, 
    "description": {
      "comment": "A short description of the item.", 
      "comment_plain": "A short description of the item.", 
      "domains": [
        "Thing"
      ], 
      "id": "description", 
      "label": "Description", 
      "ranges": [
        "Text"
      ]
    }, 
    "device": {
      "comment": "Device required to run the application. Used in cases where a specific make/model is required to run the application.", 
      "comment_plain": "Device required to run the application. Used in cases where a specific make/model is required to run the application.", 
      "domains": [
        "SoftwareApplication"
      ], 
      "id": "device", 
      "label": "Device", 
      "ranges": [
        "Text"
      ]
    }, 
    "diagnosis": {
      "comment": "One or more alternative conditions considered in the differential diagnosis process.", 
      "comment_plain": "One or more alternative conditions considered in the differential diagnosis process.", 
      "domains": [
        "DDxElement"
      ], 
      "id": "diagnosis", 
      "label": "Diagnosis", 
      "ranges": [
        "MedicalCondition"
      ]
    }, 
    "diagram": {
      "comment": "An image containing a diagram that illustrates the structure and/or its component substructures and/or connections with other structures.", 
      "comment_plain": "An image containing a diagram that illustrates the structure and/or its component substructures and/or connections with other structures.", 
      "domains": [
        "AnatomicalStructure"
      ], 
      "id": "diagram", 
      "label": "Diagram", 
      "ranges": [
        "ImageObject"
      ]
    }, 
    "diet": {
      "comment": "A sub property of instrument. The died used in this action.", 
      "comment_plain": "A sub property of instrument. The died used in this action.", 
      "domains": [
        "ExerciseAction"
      ], 
      "id": "diet", 
      "label": "Diet", 
      "ranges": [
        "Diet"
      ]
    }, 
    "dietFeatures": {
      "comment": "Nutritional information specific to the dietary plan. May include dietary recommendations on what foods to avoid, what foods to consume, and specific alterations/deviations from the USDA or other regulatory body's approved dietary guidelines.", 
      "comment_plain": "Nutritional information specific to the dietary plan. May include dietary recommendations on what foods to avoid, what foods to consume, and specific alterations/deviations from the USDA or other regulatory body's approved dietary guidelines.", 
      "domains": [
        "Diet"
      ], 
      "id": "dietFeatures", 
      "label": "Diet Features", 
      "ranges": [
        "Text"
      ]
    }, 
    "differentialDiagnosis": {
      "comment": "One of a set of differential diagnoses for the condition. Specifically, a closely-related or competing diagnosis typically considered later in the cognitive process whereby this medical condition is distinguished from others most likely responsible for a similar collection of signs and symptoms to reach the most parsimonious diagnosis or diagnoses in a patient.", 
      "comment_plain": "One of a set of differential diagnoses for the condition. Specifically, a closely-related or competing diagnosis typically considered later in the cognitive process whereby this medical condition is distinguished from others most likely responsible for a similar collection of signs and symptoms to reach the most parsimonious diagnosis or diagnoses in a patient.", 
      "domains": [
        "MedicalCondition"
      ], 
      "id": "differentialDiagnosis", 
      "label": "Differential Diagnosis", 
      "ranges": [
        "DDxElement"
      ]
    }, 
    "director": {
      "comment": "The director of the movie, tv/radio episode or series.", 
      "comment_plain": "The director of the movie, tv/radio episode or series.", 
      "domains": [
        "Series", 
        "Episode", 
        "Movie"
      ], 
      "id": "director", 
      "label": "Director", 
      "ranges": [
        "Person"
      ]
    }, 
    "directors": {
      "comment": "The director of the movie, tv/radio episode or series. (legacy spelling; see singular form, director)", 
      "comment_plain": "The director of the movie, tv/radio episode or series. (legacy spelling; see singular form, director)", 
      "domains": [
        "Series", 
        "Episode", 
        "Movie"
      ], 
      "id": "directors", 
      "label": "Directors", 
      "ranges": [
        "Person"
      ]
    }, 
    "discount": {
      "comment": "Any discount applied (to an Order).", 
      "comment_plain": "Any discount applied (to an Order).", 
      "domains": [
        "Order"
      ], 
      "id": "discount", 
      "label": "Discount", 
      "ranges": [
        "Number", 
        "Text"
      ]
    }, 
    "discountCode": {
      "comment": "Code used to redeem a discount.", 
      "comment_plain": "Code used to redeem a discount.", 
      "domains": [
        "Order"
      ], 
      "id": "discountCode", 
      "label": "Discount Code", 
      "ranges": [
        "Text"
      ]
    }, 
    "discountCurrency": {
      "comment": "The currency (in 3-letter ISO 4217 format) of the discount.", 
      "comment_plain": "The currency (in 3-letter ISO 4217 format) of the discount.", 
      "domains": [
        "Order"
      ], 
      "id": "discountCurrency", 
      "label": "Discount Currency", 
      "ranges": [
        "Text"
      ]
    }, 
    "discusses": {
      "comment": "Specifies the CreativeWork associated with the UserComment.", 
      "comment_plain": "Specifies the CreativeWork associated with the UserComment.", 
      "domains": [
        "UserComments"
      ], 
      "id": "discusses", 
      "label": "Discusses", 
      "ranges": [
        "CreativeWork"
      ]
    }, 
    "discussionUrl": {
      "comment": "A link to the page containing the comments of the CreativeWork.", 
      "comment_plain": "A link to the page containing the comments of the CreativeWork.", 
      "domains": [
        "CreativeWork"
      ], 
      "id": "discussionUrl", 
      "label": "Discussion Url", 
      "ranges": [
        "URL"
      ]
    }, 
    "distance": {
      "comment": "A sub property of asset. The distance travelled.", 
      "comment_plain": "A sub property of asset. The distance travelled.", 
      "domains": [
        "TravelAction", 
        "ExerciseAction"
      ], 
      "id": "distance", 
      "label": "Distance", 
      "ranges": [
        "Distance"
      ]
    }, 
    "distinguishingSign": {
      "comment": "One of a set of signs and symptoms that can be used to distinguish this diagnosis from others in the differential diagnosis.", 
      "comment_plain": "One of a set of signs and symptoms that can be used to distinguish this diagnosis from others in the differential diagnosis.", 
      "domains": [
        "DDxElement"
      ], 
      "id": "distinguishingSign", 
      "label": "Distinguishing Sign", 
      "ranges": [
        "MedicalSignOrSymptom"
      ]
    }, 
    "distribution": {
      "comment": "A downloadable form of this dataset, at a specific location, in a specific format.", 
      "comment_plain": "A downloadable form of this dataset, at a specific location, in a specific format.", 
      "domains": [
        "Dataset"
      ], 
      "id": "distribution", 
      "label": "Distribution", 
      "ranges": [
        "DataDownload"
      ]
    }, 
    "domainIncludes": {
      "comment": "Relates a property to a class that is (one of) the type(s) the property is expected to be used on.", 
      "comment_plain": "Relates a property to a class that is (one of) the type(s) the property is expected to be used on.", 
      "domains": [
        "Property"
      ], 
      "id": "domainIncludes", 
      "label": "Domain Includes", 
      "ranges": [
        "Class"
      ]
    }, 
    "doorTime": {
      "comment": "The time admission will commence.", 
      "comment_plain": "The time admission will commence.", 
      "domains": [
        "Event"
      ], 
      "id": "doorTime", 
      "label": "Door Time", 
      "ranges": [
        "DateTime"
      ]
    }, 
    "dosageForm": {
      "comment": "A dosage form in which this drug/supplement is available, e.g. 'tablet', 'suspension', 'injection'.", 
      "comment_plain": "A dosage form in which this drug/supplement is available, e.g. 'tablet', 'suspension', 'injection'.", 
      "domains": [
        "DietarySupplement", 
        "Drug"
      ], 
      "id": "dosageForm", 
      "label": "Dosage Form", 
      "ranges": [
        "Text"
      ]
    }, 
    "doseSchedule": {
      "comment": "A dosing schedule for the drug for a given population, either observed, recommended, or maximum dose based on the type used.", 
      "comment_plain": "A dosing schedule for the drug for a given population, either observed, recommended, or maximum dose based on the type used.", 
      "domains": [
        "Drug"
      ], 
      "id": "doseSchedule", 
      "label": "Dose Schedule", 
      "ranges": [
        "DoseSchedule"
      ]
    }, 
    "doseUnit": {
      "comment": "The unit of the dose, e.g. 'mg'.", 
      "comment_plain": "The unit of the dose, e.g. 'mg'.", 
      "domains": [
        "DoseSchedule"
      ], 
      "id": "doseUnit", 
      "label": "Dose Unit", 
      "ranges": [
        "Text"
      ]
    }, 
    "doseValue": {
      "comment": "The value of the dose, e.g. 500.", 
      "comment_plain": "The value of the dose, e.g. 500.", 
      "domains": [
        "DoseSchedule"
      ], 
      "id": "doseValue", 
      "label": "Dose Value", 
      "ranges": [
        "Number"
      ]
    }, 
    "downloadUrl": {
      "comment": "If the file can be downloaded, URL to download the binary.", 
      "comment_plain": "If the file can be downloaded, URL to download the binary.", 
      "domains": [
        "SoftwareApplication"
      ], 
      "id": "downloadUrl", 
      "label": "Download Url", 
      "ranges": [
        "URL"
      ]
    }, 
    "drainsTo": {
      "comment": "The vasculature that the vein drains into.", 
      "comment_plain": "The vasculature that the vein drains into.", 
      "domains": [
        "Vein"
      ], 
      "id": "drainsTo", 
      "label": "Drains to", 
      "ranges": [
        "Vessel"
      ]
    }, 
    "drug": {
      "comment": "A drug in this drug class.", 
      "comment_plain": "A drug in this drug class.", 
      "domains": [
        "DrugClass"
      ], 
      "id": "drug", 
      "label": "Drug", 
      "ranges": [
        "Drug"
      ]
    }, 
    "drugClass": {
      "comment": "The class of drug this belongs to (e.g., statins).", 
      "comment_plain": "The class of drug this belongs to (e.g., statins).", 
      "domains": [
        "Drug"
      ], 
      "id": "drugClass", 
      "label": "Drug Class", 
      "ranges": [
        "DrugClass"
      ]
    }, 
    "drugUnit": {
      "comment": "The unit in which the drug is measured, e.g. '5 mg tablet'.", 
      "comment_plain": "The unit in which the drug is measured, e.g. '5 mg tablet'.", 
      "domains": [
        "DrugCost"
      ], 
      "id": "drugUnit", 
      "label": "Drug Unit", 
      "ranges": [
        "Text"
      ]
    }, 
    "duns": {
      "comment": "The Dun & Bradstreet DUNS number for identifying an organization or business person.", 
      "comment_plain": "The Dun & Bradstreet DUNS number for identifying an organization or business person.", 
      "domains": [
        "Person", 
        "Organization"
      ], 
      "id": "duns", 
      "label": "Duns", 
      "ranges": [
        "Text"
      ]
    }, 
    "duplicateTherapy": {
      "comment": "A therapy that duplicates or overlaps this one.", 
      "comment_plain": "A therapy that duplicates or overlaps this one.", 
      "domains": [
        "MedicalTherapy"
      ], 
      "id": "duplicateTherapy", 
      "label": "Duplicate Therapy", 
      "ranges": [
        "MedicalTherapy"
      ]
    }, 
    "duration": {
      "comment": "The duration of the item (movie, audio recording, event, etc.) in <a href=\"http://en.wikipedia.org/wiki/ISO_8601\">ISO 8601 date format</a>.", 
      "comment_plain": "The duration of the item (movie, audio recording, event, etc.) in ISO 8601 date format.", 
      "domains": [
        "Movie", 
        "MediaObject", 
        "MusicRecording", 
        "Event"
      ], 
      "id": "duration", 
      "label": "Duration", 
      "ranges": [
        "Duration"
      ]
    }, 
    "durationOfWarranty": {
      "comment": "The duration of the warranty promise. Common unitCode values are ANN for year, MON for months, or DAY for days.", 
      "comment_plain": "The duration of the warranty promise. Common unitCode values are ANN for year, MON for months, or DAY for days.", 
      "domains": [
        "WarrantyPromise"
      ], 
      "id": "durationOfWarranty", 
      "label": "Duration of Warranty", 
      "ranges": [
        "QuantitativeValue"
      ]
    }, 
    "editor": {
      "comment": "Specifies the Person who edited the CreativeWork.", 
      "comment_plain": "Specifies the Person who edited the CreativeWork.", 
      "domains": [
        "CreativeWork"
      ], 
      "id": "editor", 
      "label": "Editor", 
      "ranges": [
        "Person"
      ]
    }, 
    "educationRequirements": {
      "comment": "Educational background needed for the position.", 
      "comment_plain": "Educational background needed for the position.", 
      "domains": [
        "JobPosting"
      ], 
      "id": "educationRequirements", 
      "label": "Education Requirements", 
      "ranges": [
        "Text"
      ]
    }, 
    "educationalAlignment": {
      "comment": "An alignment to an established educational framework.", 
      "comment_plain": "An alignment to an established educational framework.", 
      "domains": [
        "CreativeWork"
      ], 
      "id": "educationalAlignment", 
      "label": "Educational Alignment", 
      "ranges": [
        "AlignmentObject"
      ]
    }, 
    "educationalFramework": {
      "comment": "The framework to which the resource being described is aligned.", 
      "comment_plain": "The framework to which the resource being described is aligned.", 
      "domains": [
        "AlignmentObject"
      ], 
      "id": "educationalFramework", 
      "label": "Educational Framework", 
      "ranges": [
        "Text"
      ]
    }, 
    "educationalRole": {
      "comment": "An educationalRole of an EducationalAudience", 
      "comment_plain": "An educationalRole of an EducationalAudience", 
      "domains": [
        "EducationalAudience"
      ], 
      "id": "educationalRole", 
      "label": "Educational Role", 
      "ranges": [
        "Text"
      ]
    }, 
    "educationalUse": {
      "comment": "The purpose of a work in the context of education; for example, 'assignment', 'group work'.", 
      "comment_plain": "The purpose of a work in the context of education; for example, 'assignment', 'group work'.", 
      "domains": [
        "CreativeWork"
      ], 
      "id": "educationalUse", 
      "label": "Educational Use", 
      "ranges": [
        "Text"
      ]
    }, 
    "elevation": {
      "comment": "The elevation of a location.", 
      "comment_plain": "The elevation of a location.", 
      "domains": [
        "GeoShape", 
        "GeoCoordinates"
      ], 
      "id": "elevation", 
      "label": "Elevation", 
      "ranges": [
        "Text", 
        "Number"
      ]
    }, 
    "eligibleCustomerType": {
      "comment": "The type(s) of customers for which the given offer is valid.", 
      "comment_plain": "The type(s) of customers for which the given offer is valid.", 
      "domains": [
        "Offer", 
        "Demand"
      ], 
      "id": "eligibleCustomerType", 
      "label": "Eligible Customer Type", 
      "ranges": [
        "BusinessEntityType"
      ]
    }, 
    "eligibleDuration": {
      "comment": "The duration for which the given offer is valid.", 
      "comment_plain": "The duration for which the given offer is valid.", 
      "domains": [
        "Offer", 
        "Demand"
      ], 
      "id": "eligibleDuration", 
      "label": "Eligible Duration", 
      "ranges": [
        "QuantitativeValue"
      ]
    }, 
    "eligibleQuantity": {
      "comment": "The interval and unit of measurement of ordering quantities for which the offer or price specification is valid. This allows e.g. specifying that a certain freight charge is valid only for a certain quantity.", 
      "comment_plain": "The interval and unit of measurement of ordering quantities for which the offer or price specification is valid. This allows e.g. specifying that a certain freight charge is valid only for a certain quantity.", 
      "domains": [
        "Demand", 
        "PriceSpecification", 
        "Offer"
      ], 
      "id": "eligibleQuantity", 
      "label": "Eligible Quantity", 
      "ranges": [
        "QuantitativeValue"
      ]
    }, 
    "eligibleRegion": {
      "comment": "The ISO 3166-1 (ISO 3166-1 alpha-2) or ISO 3166-2 code, or the GeoShape for the geo-political region(s) for which the offer or delivery charge specification is valid.", 
      "comment_plain": "The ISO 3166-1 (ISO 3166-1 alpha-2) or ISO 3166-2 code, or the GeoShape for the geo-political region(s) for which the offer or delivery charge specification is valid.", 
      "domains": [
        "DeliveryChargeSpecification", 
        "Offer", 
        "Demand"
      ], 
      "id": "eligibleRegion", 
      "label": "Eligible Region", 
      "ranges": [
        "Text", 
        "GeoShape"
      ]
    }, 
    "eligibleTransactionVolume": {
      "comment": "The transaction volume, in a monetary unit, for which the offer or price specification is valid, e.g. for indicating a minimal purchasing volume, to express free shipping above a certain order volume, or to limit the acceptance of credit cards to purchases to a certain minimal amount.", 
      "comment_plain": "The transaction volume, in a monetary unit, for which the offer or price specification is valid, e.g. for indicating a minimal purchasing volume, to express free shipping above a certain order volume, or to limit the acceptance of credit cards to purchases to a certain minimal amount.", 
      "domains": [
        "Demand", 
        "PriceSpecification", 
        "Offer"
      ], 
      "id": "eligibleTransactionVolume", 
      "label": "Eligible Transaction Volume", 
      "ranges": [
        "PriceSpecification"
      ]
    }, 
    "email": {
      "comment": "Email address.", 
      "comment_plain": "Email address.", 
      "domains": [
        "Person", 
        "ContactPoint", 
        "Organization"
      ], 
      "id": "email", 
      "label": "Email", 
      "ranges": [
        "Text"
      ]
    }, 
    "embedUrl": {
      "comment": "A URL pointing to a player for a specific video. In general, this is the information in the <code>src</code> element of an <code>embed</code> tag and should not be the same as the content of the <code>loc</code> tag. (previous spelling: embedURL)", 
      "comment_plain": "A URL pointing to a player for a specific video. In general, this is the information in the src element of an embed tag and should not be the same as the content of the loc tag. (previous spelling: embedURL)", 
      "domains": [
        "MediaObject"
      ], 
      "id": "embedUrl", 
      "label": "Embed Url", 
      "ranges": [
        "URL"
      ]
    }, 
    "employee": {
      "comment": "Someone working for this organization.", 
      "comment_plain": "Someone working for this organization.", 
      "domains": [
        "Organization"
      ], 
      "id": "employee", 
      "label": "Employee", 
      "ranges": [
        "Person"
      ]
    }, 
    "employees": {
      "comment": "People working for this organization. (legacy spelling; see singular form, employee)", 
      "comment_plain": "People working for this organization. (legacy spelling; see singular form, employee)", 
      "domains": [
        "Organization"
      ], 
      "id": "employees", 
      "label": "Employees", 
      "ranges": [
        "Person"
      ]
    }, 
    "employmentType": {
      "comment": "Type of employment (e.g. full-time, part-time, contract, temporary, seasonal, internship).", 
      "comment_plain": "Type of employment (e.g. full-time, part-time, contract, temporary, seasonal, internship).", 
      "domains": [
        "JobPosting"
      ], 
      "id": "employmentType", 
      "label": "Employment Type", 
      "ranges": [
        "Text"
      ]
    }, 
    "encodesCreativeWork": {
      "comment": "The creative work encoded by this media object", 
      "comment_plain": "The creative work encoded by this media object", 
      "domains": [
        "MediaObject"
      ], 
      "id": "encodesCreativeWork", 
      "label": "Encodes Creative Work", 
      "ranges": [
        "CreativeWork"
      ]
    }, 
    "encoding": {
      "comment": "A media object that encode this CreativeWork.", 
      "comment_plain": "A media object that encode this CreativeWork.", 
      "domains": [
        "CreativeWork"
      ], 
      "id": "encoding", 
      "label": "Encoding", 
      "ranges": [
        "MediaObject"
      ]
    }, 
    "encodingFormat": {
      "comment": "mp3, mpeg4, etc.", 
      "comment_plain": "mp3, mpeg4, etc.", 
      "domains": [
        "MediaObject"
      ], 
      "id": "encodingFormat", 
      "label": "Encoding Format", 
      "ranges": [
        "Text"
      ]
    }, 
    "encodings": {
      "comment": "The media objects that encode this creative work (legacy spelling; see singular form, encoding).", 
      "comment_plain": "The media objects that encode this creative work (legacy spelling; see singular form, encoding).", 
      "domains": [
        "CreativeWork"
      ], 
      "id": "encodings", 
      "label": "Encodings", 
      "ranges": [
        "MediaObject"
      ]
    }, 
    "endDate": {
      "comment": "The end date and time of the event or item (in <a href=\"http://en.wikipedia.org/wiki/ISO_8601\">ISO 8601 date format</a>).", 
      "comment_plain": "The end date and time of the event or item (in ISO 8601 date format).", 
      "domains": [
        "Series", 
        "Event", 
        "Season"
      ], 
      "id": "endDate", 
      "label": "End Date", 
      "ranges": [
        "Date"
      ]
    }, 
    "endTime": {
      "comment": "When the Action was performed: end time. This is for actions that span a period of time. e.g. John wrote a book from January to *December*.", 
      "comment_plain": "When the Action was performed: end time. This is for actions that span a period of time. e.g. John wrote a book from January to *December*.", 
      "domains": [
        "Action"
      ], 
      "id": "endTime", 
      "label": "End Time", 
      "ranges": [
        "DateTime"
      ]
    }, 
    "endorsee": {
      "comment": "A sub property of participant. The person/organization being supported.", 
      "comment_plain": "A sub property of participant. The person/organization being supported.", 
      "domains": [
        "EndorseAction"
      ], 
      "id": "endorsee", 
      "label": "Endorsee", 
      "ranges": [
        "Organization", 
        "Person"
      ]
    }, 
    "endorsers": {
      "comment": "People or organizations that endorse the plan.", 
      "comment_plain": "People or organizations that endorse the plan.", 
      "domains": [
        "Diet"
      ], 
      "id": "endorsers", 
      "label": "Endorsers", 
      "ranges": [
        "Organization", 
        "Person"
      ]
    }, 
    "entertainmentBusiness": {
      "comment": "A sub property of location. The entertainment business where the action occurred.", 
      "comment_plain": "A sub property of location. The entertainment business where the action occurred.", 
      "domains": [
        "PerformAction"
      ], 
      "id": "entertainmentBusiness", 
      "label": "Entertainment Business", 
      "ranges": [
        "EntertainmentBusiness"
      ]
    }, 
    "epidemiology": {
      "comment": "The characteristics of associated patients, such as age, gender, race etc.", 
      "comment_plain": "The characteristics of associated patients, such as age, gender, race etc.", 
      "domains": [
        "MedicalCondition", 
        "PhysicalActivity"
      ], 
      "id": "epidemiology", 
      "label": "Epidemiology", 
      "ranges": [
        "Text"
      ]
    }, 
    "episode": {
      "comment": "An episode of a TV/radio series or season", 
      "comment_plain": "An episode of a TV/radio series or season", 
      "domains": [
        "Series", 
        "Season"
      ], 
      "id": "episode", 
      "label": "Episode", 
      "ranges": [
        "Episode"
      ]
    }, 
    "episodeNumber": {
      "comment": "Position of the episode within an ordered group of episodes.", 
      "comment_plain": "Position of the episode within an ordered group of episodes.", 
      "domains": [
        "Episode"
      ], 
      "id": "episodeNumber", 
      "label": "Episode Number", 
      "ranges": [
        "Integer"
      ]
    }, 
    "episodes": {
      "comment": "An episode of a TV/radio series or season (legacy spelling; see singular form, episode)", 
      "comment_plain": "An episode of a TV/radio series or season (legacy spelling; see singular form, episode)", 
      "domains": [
        "Series", 
        "Season"
      ], 
      "id": "episodes", 
      "label": "Episodes", 
      "ranges": [
        "Episode"
      ]
    }, 
    "equal": {
      "comment": "This ordering relation for qualitative values indicates that the subject is equal to the object.", 
      "comment_plain": "This ordering relation for qualitative values indicates that the subject is equal to the object.", 
      "domains": [
        "QualitativeValue"
      ], 
      "id": "equal", 
      "label": "Equal", 
      "ranges": [
        "QualitativeValue"
      ]
    }, 
    "estimatesRiskOf": {
      "comment": "The condition, complication, or symptom whose risk is being estimated.", 
      "comment_plain": "The condition, complication, or symptom whose risk is being estimated.", 
      "domains": [
        "MedicalRiskEstimator"
      ], 
      "id": "estimatesRiskOf", 
      "label": "Estimates Risk of", 
      "ranges": [
        "MedicalEntity"
      ]
    }, 
    "event": {
      "comment": "Upcoming or past event associated with this place or organization.", 
      "comment_plain": "Upcoming or past event associated with this place or organization.", 
      "domains": [
        "PlayAction", 
        "Place", 
        "JoinAction", 
        "InviteAction", 
        "Organization", 
        "InformAction", 
        "LeaveAction"
      ], 
      "id": "event", 
      "label": "Event", 
      "ranges": [
        "Event"
      ]
    }, 
    "eventStatus": {
      "comment": "An eventStatus of an event represents its status; particularly useful when an event is cancelled or rescheduled.", 
      "comment_plain": "An eventStatus of an event represents its status; particularly useful when an event is cancelled or rescheduled.", 
      "domains": [
        "Event"
      ], 
      "id": "eventStatus", 
      "label": "Event Status", 
      "ranges": [
        "EventStatusType"
      ]
    }, 
    "events": {
      "comment": "Upcoming or past events associated with this place or organization (legacy spelling; see singular form, event).", 
      "comment_plain": "Upcoming or past events associated with this place or organization (legacy spelling; see singular form, event).", 
      "domains": [
        "Organization", 
        "Place"
      ], 
      "id": "events", 
      "label": "Events", 
      "ranges": [
        "Event"
      ]
    }, 
    "evidenceLevel": {
      "comment": "Strength of evidence of the data used to formulate the guideline (enumerated).", 
      "comment_plain": "Strength of evidence of the data used to formulate the guideline (enumerated).", 
      "domains": [
        "MedicalGuideline"
      ], 
      "id": "evidenceLevel", 
      "label": "Evidence Level", 
      "ranges": [
        "MedicalEvidenceLevel"
      ]
    }, 
    "evidenceOrigin": {
      "comment": "Source of the data used to formulate the guidance, e.g. RCT, consensus opinion, etc.", 
      "comment_plain": "Source of the data used to formulate the guidance, e.g. RCT, consensus opinion, etc.", 
      "domains": [
        "MedicalGuideline"
      ], 
      "id": "evidenceOrigin", 
      "label": "Evidence Origin", 
      "ranges": [
        "Text"
      ]
    }, 
    "exercisePlan": {
      "comment": "A sub property of instrument. The exercise plan used on this action.", 
      "comment_plain": "A sub property of instrument. The exercise plan used on this action.", 
      "domains": [
        "ExerciseAction"
      ], 
      "id": "exercisePlan", 
      "label": "Exercise Plan", 
      "ranges": [
        "ExercisePlan"
      ]
    }, 
    "exerciseType": {
      "comment": "Type(s) of exercise or activity, such as strength training, flexibility training, aerobics, cardiac rehabilitation, etc.", 
      "comment_plain": "Type(s) of exercise or activity, such as strength training, flexibility training, aerobics, cardiac rehabilitation, etc.", 
      "domains": [
        "ExerciseAction", 
        "ExercisePlan"
      ], 
      "id": "exerciseType", 
      "label": "Exercise Type", 
      "ranges": [
        "Text"
      ]
    }, 
    "exifData": {
      "comment": "exif data for this object.", 
      "comment_plain": "exif data for this object.", 
      "domains": [
        "ImageObject"
      ], 
      "id": "exifData", 
      "label": "Exif Data", 
      "ranges": [
        "Text"
      ]
    }, 
    "expectedArrivalFrom": {
      "comment": "The earliest date the package may arrive.", 
      "comment_plain": "The earliest date the package may arrive.", 
      "domains": [
        "ParcelDelivery"
      ], 
      "id": "expectedArrivalFrom", 
      "label": "Expected Arrival From", 
      "ranges": [
        "DateTime"
      ]
    }, 
    "expectedArrivalUntil": {
      "comment": "The latest date the package may arrive.", 
      "comment_plain": "The latest date the package may arrive.", 
      "domains": [
        "ParcelDelivery"
      ], 
      "id": "expectedArrivalUntil", 
      "label": "Expected Arrival Until", 
      "ranges": [
        "DateTime"
      ]
    }, 
    "expectedPrognosis": {
      "comment": "The likely outcome in either the short term or long term of the medical condition.", 
      "comment_plain": "The likely outcome in either the short term or long term of the medical condition.", 
      "domains": [
        "MedicalCondition"
      ], 
      "id": "expectedPrognosis", 
      "label": "Expected Prognosis", 
      "ranges": [
        "Text"
      ]
    }, 
    "experienceRequirements": {
      "comment": "Description of skills and experience needed for the position.", 
      "comment_plain": "Description of skills and experience needed for the position.", 
      "domains": [
        "JobPosting"
      ], 
      "id": "experienceRequirements", 
      "label": "Experience Requirements", 
      "ranges": [
        "Text"
      ]
    }, 
    "expertConsiderations": {
      "comment": "Medical expert advice related to the plan.", 
      "comment_plain": "Medical expert advice related to the plan.", 
      "domains": [
        "Diet"
      ], 
      "id": "expertConsiderations", 
      "label": "Expert Considerations", 
      "ranges": [
        "Text"
      ]
    }, 
    "expires": {
      "comment": "Date the content expires and is no longer useful or available. Useful for videos.", 
      "comment_plain": "Date the content expires and is no longer useful or available. Useful for videos.", 
      "domains": [
        "MediaObject"
      ], 
      "id": "expires", 
      "label": "Expires", 
      "ranges": [
        "Date"
      ]
    }, 
    "familyName": {
      "comment": "Family name. In the U.S., the last name of an Person. This can be used along with givenName instead of the Name property.", 
      "comment_plain": "Family name. In the U.S., the last name of an Person. This can be used along with givenName instead of the Name property.", 
      "domains": [
        "Person"
      ], 
      "id": "familyName", 
      "label": "Family Name", 
      "ranges": [
        "Text"
      ]
    }, 
    "fatContent": {
      "comment": "The number of grams of fat.", 
      "comment_plain": "The number of grams of fat.", 
      "domains": [
        "NutritionInformation"
      ], 
      "id": "fatContent", 
      "label": "Fat Content", 
      "ranges": [
        "Mass"
      ]
    }, 
    "faxNumber": {
      "comment": "The fax number.", 
      "comment_plain": "The fax number.", 
      "domains": [
        "Person", 
        "ContactPoint", 
        "Place", 
        "Organization"
      ], 
      "id": "faxNumber", 
      "label": "Fax Number", 
      "ranges": [
        "Text"
      ]
    }, 
    "featureList": {
      "comment": "Features or modules provided by this application (and possibly required by other applications).", 
      "comment_plain": "Features or modules provided by this application (and possibly required by other applications).", 
      "domains": [
        "SoftwareApplication"
      ], 
      "id": "featureList", 
      "label": "Feature List", 
      "ranges": [
        "Text", 
        "URL"
      ]
    }, 
    "fiberContent": {
      "comment": "The number of grams of fiber.", 
      "comment_plain": "The number of grams of fiber.", 
      "domains": [
        "NutritionInformation"
      ], 
      "id": "fiberContent", 
      "label": "Fiber Content", 
      "ranges": [
        "Mass"
      ]
    }, 
    "fileFormat": {
      "comment": "MIME format of the binary (e.g. application/zip).", 
      "comment_plain": "MIME format of the binary (e.g. application/zip).", 
      "domains": [
        "SoftwareApplication"
      ], 
      "id": "fileFormat", 
      "label": "File Format", 
      "ranges": [
        "Text"
      ]
    }, 
    "fileSize": {
      "comment": "Size of the application / package (e.g. 18MB). In the absence of a unit (MB, KB etc.), KB will be assumed.", 
      "comment_plain": "Size of the application / package (e.g. 18MB). In the absence of a unit (MB, KB etc.), KB will be assumed.", 
      "domains": [
        "SoftwareApplication"
      ], 
      "id": "fileSize", 
      "label": "File Size", 
      "ranges": [
        "Integer"
      ]
    }, 
    "followee": {
      "comment": "A sub property of object. The person or organization being followed.", 
      "comment_plain": "A sub property of object. The person or organization being followed.", 
      "domains": [
        "FollowAction"
      ], 
      "id": "followee", 
      "label": "Followee", 
      "ranges": [
        "Organization", 
        "Person"
      ]
    }, 
    "follows": {
      "comment": "The most generic uni-directional social relation.", 
      "comment_plain": "The most generic uni-directional social relation.", 
      "domains": [
        "Person"
      ], 
      "id": "follows", 
      "label": "Follows", 
      "ranges": [
        "Person"
      ]
    }, 
    "followup": {
      "comment": "Typical or recommended followup care after the procedure is performed.", 
      "comment_plain": "Typical or recommended followup care after the procedure is performed.", 
      "domains": [
        "MedicalProcedure"
      ], 
      "id": "followup", 
      "label": "Followup", 
      "ranges": [
        "Text"
      ]
    }, 
    "foodEstablishment": {
      "comment": "A sub property of location. The specific food establishment where the action occurreed.", 
      "comment_plain": "A sub property of location. The specific food establishment where the action occurreed.", 
      "domains": [
        "CookAction"
      ], 
      "id": "foodEstablishment", 
      "label": "Food Establishment", 
      "ranges": [
        "FoodEstablishment", 
        "Place"
      ]
    }, 
    "foodEvent": {
      "comment": "A sub property of location. The specific food event where the action occurred.", 
      "comment_plain": "A sub property of location. The specific food event where the action occurred.", 
      "domains": [
        "CookAction"
      ], 
      "id": "foodEvent", 
      "label": "Food Event", 
      "ranges": [
        "FoodEvent"
      ]
    }, 
    "foodWarning": {
      "comment": "Any precaution, guidance, contraindication, etc. related to consumption of specific foods while taking this drug.", 
      "comment_plain": "Any precaution, guidance, contraindication, etc. related to consumption of specific foods while taking this drug.", 
      "domains": [
        "Drug"
      ], 
      "id": "foodWarning", 
      "label": "Food Warning", 
      "ranges": [
        "Text"
      ]
    }, 
    "founder": {
      "comment": "A person who founded this organization.", 
      "comment_plain": "A person who founded this organization.", 
      "domains": [
        "Organization"
      ], 
      "id": "founder", 
      "label": "Founder", 
      "ranges": [
        "Person"
      ]
    }, 
    "founders": {
      "comment": "A person who founded this organization (legacy spelling; see singular form, founder).", 
      "comment_plain": "A person who founded this organization (legacy spelling; see singular form, founder).", 
      "domains": [
        "Organization"
      ], 
      "id": "founders", 
      "label": "Founders", 
      "ranges": [
        "Person"
      ]
    }, 
    "foundingDate": {
      "comment": "The date that this organization was founded.", 
      "comment_plain": "The date that this organization was founded.", 
      "domains": [
        "Organization"
      ], 
      "id": "foundingDate", 
      "label": "Founding Date", 
      "ranges": [
        "Date"
      ]
    }, 
    "free": {
      "comment": "A flag to signal that the publication is accessible for free.", 
      "comment_plain": "A flag to signal that the publication is accessible for free.", 
      "domains": [
        "PublicationEvent"
      ], 
      "id": "free", 
      "label": "Free", 
      "ranges": [
        "Boolean"
      ]
    }, 
    "frequency": {
      "comment": "How often the dose is taken, e.g. 'daily'.", 
      "comment_plain": "How often the dose is taken, e.g. 'daily'.", 
      "domains": [
        "DoseSchedule"
      ], 
      "id": "frequency", 
      "label": "Frequency", 
      "ranges": [
        "Text"
      ]
    }, 
    "fromLocation": {
      "comment": "A sub property of location. The original location of the object or the agent before the action.", 
      "comment_plain": "A sub property of location. The original location of the object or the agent before the action.", 
      "domains": [
        "TransferAction", 
        "ExerciseAction", 
        "MoveAction"
      ], 
      "id": "fromLocation", 
      "label": "From Location", 
      "ranges": [
        "Place", 
        "Number"
      ]
    }, 
    "function": {
      "comment": "Function of the anatomical structure.", 
      "comment_plain": "Function of the anatomical structure.", 
      "domains": [
        "AnatomicalStructure"
      ], 
      "id": "function", 
      "label": "Function", 
      "ranges": [
        "Text"
      ]
    }, 
    "functionalClass": {
      "comment": "The degree of mobility the joint allows.", 
      "comment_plain": "The degree of mobility the joint allows.", 
      "domains": [
        "Joint"
      ], 
      "id": "functionalClass", 
      "label": "Functional Class", 
      "ranges": [
        "Text"
      ]
    }, 
    "gender": {
      "comment": "Gender of the person.", 
      "comment_plain": "Gender of the person.", 
      "domains": [
        "Person"
      ], 
      "id": "gender", 
      "label": "Gender", 
      "ranges": [
        "Text"
      ]
    }, 
    "genre": {
      "comment": "Genre of the creative work", 
      "comment_plain": "Genre of the creative work", 
      "domains": [
        "CreativeWork"
      ], 
      "id": "genre", 
      "label": "Genre", 
      "ranges": [
        "Text"
      ]
    }, 
    "geo": {
      "comment": "The geo coordinates of the place.", 
      "comment_plain": "The geo coordinates of the place.", 
      "domains": [
        "Place"
      ], 
      "id": "geo", 
      "label": "Geo", 
      "ranges": [
        "GeoCoordinates", 
        "GeoShape"
      ]
    }, 
    "geographicArea": {
      "comment": "The geographic area associated with the audience.", 
      "comment_plain": "The geographic area associated with the audience.", 
      "domains": [
        "Audience"
      ], 
      "id": "geographicArea", 
      "label": "Geographic Area", 
      "ranges": [
        "AdministrativeArea"
      ]
    }, 
    "givenName": {
      "comment": "Given name. In the U.S., the first name of a Person. This can be used along with familyName instead of the Name property.", 
      "comment_plain": "Given name. In the U.S., the first name of a Person. This can be used along with familyName instead of the Name property.", 
      "domains": [
        "Person"
      ], 
      "id": "givenName", 
      "label": "Given Name", 
      "ranges": [
        "Text"
      ]
    }, 
    "globalLocationNumber": {
      "comment": "The Global Location Number (GLN, sometimes also referred to as International Location Number or ILN) of the respective organization, person, or place. The GLN is a 13-digit number used to identify parties and physical locations.", 
      "comment_plain": "The Global Location Number (GLN, sometimes also referred to as International Location Number or ILN) of the respective organization, person, or place. The GLN is a 13-digit number used to identify parties and physical locations.", 
      "domains": [
        "Person", 
        "Place", 
        "Organization"
      ], 
      "id": "globalLocationNumber", 
      "label": "Global Location Number", 
      "ranges": [
        "Text"
      ]
    }, 
    "greater": {
      "comment": "This ordering relation for qualitative values indicates that the subject is greater than the object.", 
      "comment_plain": "This ordering relation for qualitative values indicates that the subject is greater than the object.", 
      "domains": [
        "QualitativeValue"
      ], 
      "id": "greater", 
      "label": "Greater", 
      "ranges": [
        "QualitativeValue"
      ]
    }, 
    "greaterOrEqual": {
      "comment": "This ordering relation for qualitative values indicates that the subject is greater than or equal to the object.", 
      "comment_plain": "This ordering relation for qualitative values indicates that the subject is greater than or equal to the object.", 
      "domains": [
        "QualitativeValue"
      ], 
      "id": "greaterOrEqual", 
      "label": "Greater or Equal", 
      "ranges": [
        "QualitativeValue"
      ]
    }, 
    "gtin13": {
      "comment": "The GTIN-13 code of the product, or the product to which the offer refers. This is equivalent to 13-digit ISBN codes and EAN UCC-13. Former 12-digit UPC codes can be converted into a GTIN-13 code by simply adding a preceeding zero.", 
      "comment_plain": "The GTIN-13 code of the product, or the product to which the offer refers. This is equivalent to 13-digit ISBN codes and EAN UCC-13. Former 12-digit UPC codes can be converted into a GTIN-13 code by simply adding a preceeding zero.", 
      "domains": [
        "Product", 
        "Offer", 
        "Demand"
      ], 
      "id": "gtin13", 
      "label": "Gtin13", 
      "ranges": [
        "Text"
      ]
    }, 
    "gtin14": {
      "comment": "The GTIN-14 code of the product, or the product to which the offer refers.", 
      "comment_plain": "The GTIN-14 code of the product, or the product to which the offer refers.", 
      "domains": [
        "Product", 
        "Offer", 
        "Demand"
      ], 
      "id": "gtin14", 
      "label": "Gtin14", 
      "ranges": [
        "Text"
      ]
    }, 
    "gtin8": {
      "comment": "The GTIN-8 code of the product, or the product to which the offer refers. This code is also known as EAN/UCC-8 or 8-digit EAN.", 
      "comment_plain": "The GTIN-8 code of the product, or the product to which the offer refers. This code is also known as EAN/UCC-8 or 8-digit EAN.", 
      "domains": [
        "Product", 
        "Offer", 
        "Demand"
      ], 
      "id": "gtin8", 
      "label": "Gtin8", 
      "ranges": [
        "Text"
      ]
    }, 
    "guideline": {
      "comment": "A medical guideline related to this entity.", 
      "comment_plain": "A medical guideline related to this entity.", 
      "domains": [
        "MedicalEntity"
      ], 
      "id": "guideline", 
      "label": "Guideline", 
      "ranges": [
        "MedicalGuideline"
      ]
    }, 
    "guidelineDate": {
      "comment": "Date on which this guideline's recommendation was made.", 
      "comment_plain": "Date on which this guideline's recommendation was made.", 
      "domains": [
        "MedicalGuideline"
      ], 
      "id": "guidelineDate", 
      "label": "Guideline Date", 
      "ranges": [
        "Date"
      ]
    }, 
    "guidelineSubject": {
      "comment": "The medical conditions, treatments, etc. that are the subject of the guideline.", 
      "comment_plain": "The medical conditions, treatments, etc. that are the subject of the guideline.", 
      "domains": [
        "MedicalGuideline"
      ], 
      "id": "guidelineSubject", 
      "label": "Guideline Subject", 
      "ranges": [
        "MedicalEntity"
      ]
    }, 
    "hasDeliveryMethod": {
      "comment": "Method used for delivery or shipping.", 
      "comment_plain": "Method used for delivery or shipping.", 
      "domains": [
        "DeliveryEvent", 
        "ParcelDelivery"
      ], 
      "id": "hasDeliveryMethod", 
      "label": "Has Delivery Method", 
      "ranges": [
        "DeliveryMethod"
      ]
    }, 
    "hasPOS": {
      "comment": "Points-of-Sales operated by the organization or person.", 
      "comment_plain": "Points-of-Sales operated by the organization or person.", 
      "domains": [
        "Person", 
        "Organization"
      ], 
      "id": "hasPOS", 
      "label": "Has POS", 
      "ranges": [
        "Place"
      ]
    }, 
    "headline": {
      "comment": "Headline of the article", 
      "comment_plain": "Headline of the article", 
      "domains": [
        "CreativeWork"
      ], 
      "id": "headline", 
      "label": "Headline", 
      "ranges": [
        "Text"
      ]
    }, 
    "healthCondition": {
      "comment": "Expectations for health conditions of target audience", 
      "comment_plain": "Expectations for health conditions of target audience", 
      "domains": [
        "PeopleAudience"
      ], 
      "id": "healthCondition", 
      "label": "Health Condition", 
      "ranges": [
        "MedicalCondition"
      ]
    }, 
    "height": {
      "comment": "The height of the item.", 
      "comment_plain": "The height of the item.", 
      "domains": [
        "MediaObject", 
        "Product"
      ], 
      "id": "height", 
      "label": "Height", 
      "ranges": [
        "Distance", 
        "QuantitativeValue"
      ]
    }, 
    "highPrice": {
      "comment": "The highest price of all offers available.", 
      "comment_plain": "The highest price of all offers available.", 
      "domains": [
        "AggregateOffer"
      ], 
      "id": "highPrice", 
      "label": "High Price", 
      "ranges": [
        "Number", 
        "Text"
      ]
    }, 
    "hiringOrganization": {
      "comment": "Organization offering the job position.", 
      "comment_plain": "Organization offering the job position.", 
      "domains": [
        "JobPosting"
      ], 
      "id": "hiringOrganization", 
      "label": "Hiring Organization", 
      "ranges": [
        "Organization"
      ]
    }, 
    "homeLocation": {
      "comment": "A contact location for a person's residence.", 
      "comment_plain": "A contact location for a person's residence.", 
      "domains": [
        "Person"
      ], 
      "id": "homeLocation", 
      "label": "Home Location", 
      "ranges": [
        "ContactPoint", 
        "Place"
      ]
    }, 
    "honorificPrefix": {
      "comment": "An honorific prefix preceding a Person's name such as Dr/Mrs/Mr.", 
      "comment_plain": "An honorific prefix preceding a Person's name such as Dr/Mrs/Mr.", 
      "domains": [
        "Person"
      ], 
      "id": "honorificPrefix", 
      "label": "Honorific Prefix", 
      "ranges": [
        "Text"
      ]
    }, 
    "honorificSuffix": {
      "comment": "An honorific suffix preceding a Person's name such as M.D. /PhD/MSCSW.", 
      "comment_plain": "An honorific suffix preceding a Person's name such as M.D. /PhD/MSCSW.", 
      "domains": [
        "Person"
      ], 
      "id": "honorificSuffix", 
      "label": "Honorific Suffix", 
      "ranges": [
        "Text"
      ]
    }, 
    "hospitalAffiliation": {
      "comment": "A hospital with which the physician or office is affiliated.", 
      "comment_plain": "A hospital with which the physician or office is affiliated.", 
      "domains": [
        "Physician"
      ], 
      "id": "hospitalAffiliation", 
      "label": "Hospital Affiliation", 
      "ranges": [
        "Hospital"
      ]
    }, 
    "hoursAvailable": {
      "comment": "The hours during which this contact point is available.", 
      "comment_plain": "The hours during which this contact point is available.", 
      "domains": [
        "ContactPoint"
      ], 
      "id": "hoursAvailable", 
      "label": "Hours Available", 
      "ranges": [
        "OpeningHoursSpecification"
      ]
    }, 
    "howPerformed": {
      "comment": "How the procedure is performed.", 
      "comment_plain": "How the procedure is performed.", 
      "domains": [
        "MedicalProcedure"
      ], 
      "id": "howPerformed", 
      "label": "How Performed", 
      "ranges": [
        "Text"
      ]
    }, 
    "identifyingExam": {
      "comment": "A physical examination that can identify this sign.", 
      "comment_plain": "A physical examination that can identify this sign.", 
      "domains": [
        "MedicalSign"
      ], 
      "id": "identifyingExam", 
      "label": "Identifying Exam", 
      "ranges": [
        "PhysicalExam"
      ]
    }, 
    "identifyingTest": {
      "comment": "A diagnostic test that can identify this sign.", 
      "comment_plain": "A diagnostic test that can identify this sign.", 
      "domains": [
        "MedicalSign"
      ], 
      "id": "identifyingTest", 
      "label": "Identifying Test", 
      "ranges": [
        "MedicalTest"
      ]
    }, 
    "illustrator": {
      "comment": "The illustrator of the book.", 
      "comment_plain": "The illustrator of the book.", 
      "domains": [
        "Book"
      ], 
      "id": "illustrator", 
      "label": "Illustrator", 
      "ranges": [
        "Person"
      ]
    }, 
    "image": {
      "comment": "URL of an image of the item.", 
      "comment_plain": "URL of an image of the item.", 
      "domains": [
        "Thing"
      ], 
      "id": "image", 
      "label": "Image", 
      "ranges": [
        "URL"
      ]
    }, 
    "imagingTechnique": {
      "comment": "Imaging technique used.", 
      "comment_plain": "Imaging technique used.", 
      "domains": [
        "ImagingTest"
      ], 
      "id": "imagingTechnique", 
      "label": "Imaging Technique", 
      "ranges": [
        "MedicalImagingTechnique"
      ]
    }, 
    "inAlbum": {
      "comment": "The album to which this recording belongs.", 
      "comment_plain": "The album to which this recording belongs.", 
      "domains": [
        "MusicRecording"
      ], 
      "id": "inAlbum", 
      "label": "In Album", 
      "ranges": [
        "MusicAlbum"
      ]
    }, 
    "inLanguage": {
      "comment": "The language of the content. please use one of the language codes from the <a href=\"http://tools.ietf.org/html/bcp47\">IETF BCP 47 standard.</a>", 
      "comment_plain": "The language of the content. please use one of the language codes from the IETF BCP 47 standard.", 
      "domains": [
        "CreativeWork"
      ], 
      "id": "inLanguage", 
      "label": "In Language", 
      "ranges": [
        "Text"
      ]
    }, 
    "inPlaylist": {
      "comment": "The playlist to which this recording belongs.", 
      "comment_plain": "The playlist to which this recording belongs.", 
      "domains": [
        "MusicRecording"
      ], 
      "id": "inPlaylist", 
      "label": "In Playlist", 
      "ranges": [
        "MusicPlaylist"
      ]
    }, 
    "incentives": {
      "comment": "Description of bonus and commission compensation aspects of the job.", 
      "comment_plain": "Description of bonus and commission compensation aspects of the job.", 
      "domains": [
        "JobPosting"
      ], 
      "id": "incentives", 
      "label": "Incentives", 
      "ranges": [
        "Text"
      ]
    }, 
    "includedRiskFactor": {
      "comment": "A modifiable or non-modifiable risk factor included in the calculation, e.g. age, coexisting condition.", 
      "comment_plain": "A modifiable or non-modifiable risk factor included in the calculation, e.g. age, coexisting condition.", 
      "domains": [
        "MedicalRiskEstimator"
      ], 
      "id": "includedRiskFactor", 
      "label": "Included Risk Factor", 
      "ranges": [
        "MedicalRiskFactor"
      ]
    }, 
    "includesObject": {
      "comment": "This links to a node or nodes indicating the exact quantity of the products included in the offer.", 
      "comment_plain": "This links to a node or nodes indicating the exact quantity of the products included in the offer.", 
      "domains": [
        "Offer", 
        "Demand"
      ], 
      "id": "includesObject", 
      "label": "Includes Object", 
      "ranges": [
        "TypeAndQuantityNode"
      ]
    }, 
    "increasesRiskOf": {
      "comment": "The condition, complication, etc. influenced by this factor.", 
      "comment_plain": "The condition, complication, etc. influenced by this factor.", 
      "domains": [
        "MedicalRiskFactor"
      ], 
      "id": "increasesRiskOf", 
      "label": "Increases Risk of", 
      "ranges": [
        "MedicalEntity"
      ]
    }, 
    "indication": {
      "comment": "A factor that indicates use of this therapy for treatment and/or prevention of a condition, symptom, etc. For therapies such as drugs, indications can include both officially-approved indications as well as off-label uses. These can be distinguished by using the ApprovedIndication subtype of MedicalIndication.", 
      "comment_plain": "A factor that indicates use of this therapy for treatment and/or prevention of a condition, symptom, etc. For therapies such as drugs, indications can include both officially-approved indications as well as off-label uses. These can be distinguished by using the ApprovedIndication subtype of MedicalIndication.", 
      "domains": [
        "MedicalDevice", 
        "MedicalTherapy"
      ], 
      "id": "indication", 
      "label": "Indication", 
      "ranges": [
        "MedicalIndication"
      ]
    }, 
    "industry": {
      "comment": "The industry associated with the job position.", 
      "comment_plain": "The industry associated with the job position.", 
      "domains": [
        "JobPosting"
      ], 
      "id": "industry", 
      "label": "Industry", 
      "ranges": [
        "Text"
      ]
    }, 
    "infectiousAgent": {
      "comment": "The actual infectious agent, such as a specific bacterium.", 
      "comment_plain": "The actual infectious agent, such as a specific bacterium.", 
      "domains": [
        "InfectiousDisease"
      ], 
      "id": "infectiousAgent", 
      "label": "Infectious Agent", 
      "ranges": [
        "Text"
      ]
    }, 
    "infectiousAgentClass": {
      "comment": "The class of infectious agent (bacteria, prion, etc.) that causes the disease.", 
      "comment_plain": "The class of infectious agent (bacteria, prion, etc.) that causes the disease.", 
      "domains": [
        "InfectiousDisease"
      ], 
      "id": "infectiousAgentClass", 
      "label": "Infectious Agent Class", 
      "ranges": [
        "InfectiousAgentClass"
      ]
    }, 
    "ingredients": {
      "comment": "An ingredient used in the recipe.", 
      "comment_plain": "An ingredient used in the recipe.", 
      "domains": [
        "Recipe"
      ], 
      "id": "ingredients", 
      "label": "Ingredients", 
      "ranges": [
        "Text"
      ]
    }, 
    "insertion": {
      "comment": "The place of attachment of a muscle, or what the muscle moves.", 
      "comment_plain": "The place of attachment of a muscle, or what the muscle moves.", 
      "domains": [
        "Muscle"
      ], 
      "id": "insertion", 
      "label": "Insertion", 
      "ranges": [
        "AnatomicalStructure"
      ]
    }, 
    "installUrl": {
      "comment": "URL at which the app may be installed, if different from the URL of the item.", 
      "comment_plain": "URL at which the app may be installed, if different from the URL of the item.", 
      "domains": [
        "SoftwareApplication"
      ], 
      "id": "installUrl", 
      "label": "Install Url", 
      "ranges": [
        "URL"
      ]
    }, 
    "instrument": {
      "comment": "The object that helped the agent perform the action. e.g. John wrote a book with *a pen*.", 
      "comment_plain": "The object that helped the agent perform the action. e.g. John wrote a book with *a pen*.", 
      "domains": [
        "Action"
      ], 
      "id": "instrument", 
      "label": "Instrument", 
      "ranges": [
        "Thing"
      ]
    }, 
    "intensity": {
      "comment": "Quantitative measure gauging the degree of force involved in the exercise, for example, heartbeats per minute. May include the velocity of the movement.", 
      "comment_plain": "Quantitative measure gauging the degree of force involved in the exercise, for example, heartbeats per minute. May include the velocity of the movement.", 
      "domains": [
        "ExercisePlan"
      ], 
      "id": "intensity", 
      "label": "Intensity", 
      "ranges": [
        "Text"
      ]
    }, 
    "interactingDrug": {
      "comment": "Another drug that is known to interact with this drug in a way that impacts the effect of this drug or causes a risk to the patient. Note: disease interactions are typically captured as contraindications.", 
      "comment_plain": "Another drug that is known to interact with this drug in a way that impacts the effect of this drug or causes a risk to the patient. Note: disease interactions are typically captured as contraindications.", 
      "domains": [
        "Drug"
      ], 
      "id": "interactingDrug", 
      "label": "Interacting Drug", 
      "ranges": [
        "Drug"
      ]
    }, 
    "interactionCount": {
      "comment": "A count of a specific user interactions with this item\u2014for example, <code>20 UserLikes</code>, <code>5 UserComments</code>, or <code>300 UserDownloads</code>. The user interaction type should be one of the sub types of <a href=\"http://schema.org/UserInteraction\">UserInteraction</a>.", 
      "comment_plain": "A count of a specific user interactions with this item\u2014for example, 20 UserLikes, 5 UserComments, or 300 UserDownloads. The user interaction type should be one of the sub types of UserInteraction.", 
      "domains": [
        "Person", 
        "CreativeWork", 
        "Place", 
        "Organization"
      ], 
      "id": "interactionCount", 
      "label": "Interaction Count", 
      "ranges": [
        "Text"
      ]
    }, 
    "interactivityType": {
      "comment": "The predominant mode of learning supported by the learning resource. Acceptable values are 'active', 'expositive', or 'mixed'.", 
      "comment_plain": "The predominant mode of learning supported by the learning resource. Acceptable values are 'active', 'expositive', or 'mixed'.", 
      "domains": [
        "CreativeWork"
      ], 
      "id": "interactivityType", 
      "label": "Interactivity Type", 
      "ranges": [
        "Text"
      ]
    }, 
    "inventoryLevel": {
      "comment": "The current approximate inventory level for the item or items.", 
      "comment_plain": "The current approximate inventory level for the item or items.", 
      "domains": [
        "SomeProducts", 
        "Offer", 
        "Demand"
      ], 
      "id": "inventoryLevel", 
      "label": "Inventory Level", 
      "ranges": [
        "QuantitativeValue"
      ]
    }, 
    "isAccessoryOrSparePartFor": {
      "comment": "A pointer to another product (or multiple products) for which this product is an accessory or spare part.", 
      "comment_plain": "A pointer to another product (or multiple products) for which this product is an accessory or spare part.", 
      "domains": [
        "Product"
      ], 
      "id": "isAccessoryOrSparePartFor", 
      "label": "Is Accessory or Spare Part for", 
      "ranges": [
        "Product"
      ]
    }, 
    "isAvailableGenerically": {
      "comment": "True if the drug is available in a generic form (regardless of name).", 
      "comment_plain": "True if the drug is available in a generic form (regardless of name).", 
      "domains": [
        "Drug"
      ], 
      "id": "isAvailableGenerically", 
      "label": "Is Available Generically", 
      "ranges": [
        "Boolean"
      ]
    }, 
    "isBasedOnUrl": {
      "comment": "A resource that was used in the creation of this resource. This term can be repeated for multiple sources. For example, http://example.com/great-multiplication-intro.html", 
      "comment_plain": "A resource that was used in the creation of this resource. This term can be repeated for multiple sources. For example, http://example.com/great-multiplication-intro.html", 
      "domains": [
        "CreativeWork"
      ], 
      "id": "isBasedOnUrl", 
      "label": "Is Based On Url", 
      "ranges": [
        "URL"
      ]
    }, 
    "isConsumableFor": {
      "comment": "A pointer to another product (or multiple products) for which this product is a consumable.", 
      "comment_plain": "A pointer to another product (or multiple products) for which this product is a consumable.", 
      "domains": [
        "Product"
      ], 
      "id": "isConsumableFor", 
      "label": "Is Consumable for", 
      "ranges": [
        "Product"
      ]
    }, 
    "isFamilyFriendly": {
      "comment": "Indicates whether this content is family friendly.", 
      "comment_plain": "Indicates whether this content is family friendly.", 
      "domains": [
        "CreativeWork"
      ], 
      "id": "isFamilyFriendly", 
      "label": "Is Family Friendly", 
      "ranges": [
        "Boolean"
      ]
    }, 
    "isGift": {
      "comment": "Was the offer accepted as a gift for someone other than the buyer.", 
      "comment_plain": "Was the offer accepted as a gift for someone other than the buyer.", 
      "domains": [
        "Order"
      ], 
      "id": "isGift", 
      "label": "Is Gift", 
      "ranges": [
        "Boolean"
      ]
    }, 
    "isPartOf": {
      "comment": "Indicates the collection or gallery to which the item belongs.", 
      "comment_plain": "Indicates the collection or gallery to which the item belongs.", 
      "domains": [
        "WebPage"
      ], 
      "id": "isPartOf", 
      "label": "Is Part of", 
      "ranges": [
        "CollectionPage"
      ]
    }, 
    "isProprietary": {
      "comment": "True if this item's name is a proprietary/brand name (vs. generic name).", 
      "comment_plain": "True if this item's name is a proprietary/brand name (vs. generic name).", 
      "domains": [
        "DietarySupplement", 
        "Drug"
      ], 
      "id": "isProprietary", 
      "label": "Is Proprietary", 
      "ranges": [
        "Boolean"
      ]
    }, 
    "isRelatedTo": {
      "comment": "A pointer to another, somehow related product (or multiple products).", 
      "comment_plain": "A pointer to another, somehow related product (or multiple products).", 
      "domains": [
        "Product"
      ], 
      "id": "isRelatedTo", 
      "label": "Is Related to", 
      "ranges": [
        "Product"
      ]
    }, 
    "isSimilarTo": {
      "comment": "A pointer to another, functionally similar product (or multiple products).", 
      "comment_plain": "A pointer to another, functionally similar product (or multiple products).", 
      "domains": [
        "Product"
      ], 
      "id": "isSimilarTo", 
      "label": "Is Similar to", 
      "ranges": [
        "Product"
      ]
    }, 
    "isVariantOf": {
      "comment": "A pointer to a base product from which this product is a variant. It is safe to infer that the variant inherits all product features from the base model, unless defined locally. This is not transitive.", 
      "comment_plain": "A pointer to a base product from which this product is a variant. It is safe to infer that the variant inherits all product features from the base model, unless defined locally. This is not transitive.", 
      "domains": [
        "ProductModel"
      ], 
      "id": "isVariantOf", 
      "label": "Is Variant of", 
      "ranges": [
        "ProductModel"
      ]
    }, 
    "isbn": {
      "comment": "The ISBN of the book.", 
      "comment_plain": "The ISBN of the book.", 
      "domains": [
        "Book"
      ], 
      "id": "isbn", 
      "label": "ISBN", 
      "ranges": [
        "Text"
      ]
    }, 
    "isicV4": {
      "comment": "The International Standard of Industrial Classification of All Economic Activities (ISIC), Revision 4 code for a particular organization, business person, or place.", 
      "comment_plain": "The International Standard of Industrial Classification of All Economic Activities (ISIC), Revision 4 code for a particular organization, business person, or place.", 
      "domains": [
        "Person", 
        "Place", 
        "Organization"
      ], 
      "id": "isicV4", 
      "label": "Isic V4", 
      "ranges": [
        "Text"
      ]
    }, 
    "issuedBy": {
      "comment": "The organization issuing the permit.", 
      "comment_plain": "The organization issuing the permit.", 
      "domains": [
        "Permit"
      ], 
      "id": "issuedBy", 
      "label": "Issued by", 
      "ranges": [
        "Organization"
      ]
    }, 
    "issuedThrough": {
      "comment": "The service through with the permit was granted.", 
      "comment_plain": "The service through with the permit was granted.", 
      "domains": [
        "Permit"
      ], 
      "id": "issuedThrough", 
      "label": "Issued Through", 
      "ranges": [
        "Service"
      ]
    }, 
    "itemCondition": {
      "comment": "A predefined value from OfferItemCondition or a textual description of the condition of the product or service, or the products or services included in the offer.", 
      "comment_plain": "A predefined value from OfferItemCondition or a textual description of the condition of the product or service, or the products or services included in the offer.", 
      "domains": [
        "Product", 
        "Offer", 
        "Demand"
      ], 
      "id": "itemCondition", 
      "label": "Item Condition", 
      "ranges": [
        "OfferItemCondition"
      ]
    }, 
    "itemListElement": {
      "comment": "A single list item.", 
      "comment_plain": "A single list item.", 
      "domains": [
        "ItemList"
      ], 
      "id": "itemListElement", 
      "label": "Item List Element", 
      "ranges": [
        "Text"
      ]
    }, 
    "itemListOrder": {
      "comment": "Type of ordering (e.g. Ascending, Descending, Unordered).", 
      "comment_plain": "Type of ordering (e.g. Ascending, Descending, Unordered).", 
      "domains": [
        "ItemList"
      ], 
      "id": "itemListOrder", 
      "label": "Item List Order", 
      "ranges": [
        "Text"
      ]
    }, 
    "itemOffered": {
      "comment": "The item being offered.", 
      "comment_plain": "The item being offered.", 
      "domains": [
        "Offer", 
        "Demand"
      ], 
      "id": "itemOffered", 
      "label": "Item Offered", 
      "ranges": [
        "Product"
      ]
    }, 
    "itemReviewed": {
      "comment": "The item that is being reviewed/rated.", 
      "comment_plain": "The item that is being reviewed/rated.", 
      "domains": [
        "AggregateRating", 
        "Review"
      ], 
      "id": "itemReviewed", 
      "label": "Item Reviewed", 
      "ranges": [
        "Thing"
      ]
    }, 
    "itemShipped": {
      "comment": "Item(s) being shipped.", 
      "comment_plain": "Item(s) being shipped.", 
      "domains": [
        "ParcelDelivery"
      ], 
      "id": "itemShipped", 
      "label": "Item Shipped", 
      "ranges": [
        "Product"
      ]
    }, 
    "jobLocation": {
      "comment": "A (typically single) geographic location associated with the job position.", 
      "comment_plain": "A (typically single) geographic location associated with the job position.", 
      "domains": [
        "JobPosting"
      ], 
      "id": "jobLocation", 
      "label": "Job Location", 
      "ranges": [
        "Place"
      ]
    }, 
    "jobTitle": {
      "comment": "The job title of the person (for example, Financial Manager).", 
      "comment_plain": "The job title of the person (for example, Financial Manager).", 
      "domains": [
        "Person"
      ], 
      "id": "jobTitle", 
      "label": "Job Title", 
      "ranges": [
        "Text"
      ]
    }, 
    "keywords": {
      "comment": "The keywords/tags used to describe this content.", 
      "comment_plain": "The keywords/tags used to describe this content.", 
      "domains": [
        "CreativeWork"
      ], 
      "id": "keywords", 
      "label": "Keywords", 
      "ranges": [
        "Text"
      ]
    }, 
    "knows": {
      "comment": "The most generic bi-directional social/work relation.", 
      "comment_plain": "The most generic bi-directional social/work relation.", 
      "domains": [
        "Person"
      ], 
      "id": "knows", 
      "label": "Knows", 
      "ranges": [
        "Person"
      ]
    }, 
    "labelDetails": {
      "comment": "Link to the drug's label details.", 
      "comment_plain": "Link to the drug's label details.", 
      "domains": [
        "Drug"
      ], 
      "id": "labelDetails", 
      "label": "Label Details", 
      "ranges": [
        "URL"
      ]
    }, 
    "landlord": {
      "comment": "A sub property of participant. The owner of the real estate property. Sub property of destination or participant?", 
      "comment_plain": "A sub property of participant. The owner of the real estate property. Sub property of destination or participant?", 
      "domains": [
        "RentAction"
      ], 
      "id": "landlord", 
      "label": "Landlord", 
      "ranges": [
        "Organization", 
        "Person"
      ]
    }, 
    "language": {
      "comment": "A sub property of instrument. The languaged used on this action.", 
      "comment_plain": "A sub property of instrument. The languaged used on this action.", 
      "domains": [
        "WriteAction", 
        "CommunicateAction"
      ], 
      "id": "language", 
      "label": "Language", 
      "ranges": [
        "Language"
      ]
    }, 
    "lastReviewed": {
      "comment": "Date on which the content on this web page was last reviewed for accuracy and/or completeness.", 
      "comment_plain": "Date on which the content on this web page was last reviewed for accuracy and/or completeness.", 
      "domains": [
        "WebPage"
      ], 
      "id": "lastReviewed", 
      "label": "Last Reviewed", 
      "ranges": [
        "Date"
      ]
    }, 
    "latitude": {
      "comment": "The latitude of a location. For example <code>37.42242</code>.", 
      "comment_plain": "The latitude of a location. For example 37.42242.", 
      "domains": [
        "GeoCoordinates"
      ], 
      "id": "latitude", 
      "label": "Latitude", 
      "ranges": [
        "Number", 
        "Text"
      ]
    }, 
    "learningResourceType": {
      "comment": "The predominant type or kind characterizing the learning resource. For example, 'presentation', 'handout'.", 
      "comment_plain": "The predominant type or kind characterizing the learning resource. For example, 'presentation', 'handout'.", 
      "domains": [
        "CreativeWork"
      ], 
      "id": "learningResourceType", 
      "label": "Learning Resource Type", 
      "ranges": [
        "Text"
      ]
    }, 
    "legalName": {
      "comment": "The official name of the organization, e.g. the registered company name.", 
      "comment_plain": "The official name of the organization, e.g. the registered company name.", 
      "domains": [
        "Organization"
      ], 
      "id": "legalName", 
      "label": "Legal Name", 
      "ranges": [
        "Text"
      ]
    }, 
    "legalStatus": {
      "comment": "The drug or supplement's legal status, including any controlled substance schedules that apply.", 
      "comment_plain": "The drug or supplement's legal status, including any controlled substance schedules that apply.", 
      "domains": [
        "DietarySupplement", 
        "Drug"
      ], 
      "id": "legalStatus", 
      "label": "Legal Status", 
      "ranges": [
        "DrugLegalStatus"
      ]
    }, 
    "lender": {
      "comment": "A sub property of participant. The person that lends the object being borrowed.", 
      "comment_plain": "A sub property of participant. The person that lends the object being borrowed.", 
      "domains": [
        "BorrowAction"
      ], 
      "id": "lender", 
      "label": "Lender", 
      "ranges": [
        "Person"
      ]
    }, 
    "lesser": {
      "comment": "This ordering relation for qualitative values indicates that the subject is lesser than the object.", 
      "comment_plain": "This ordering relation for qualitative values indicates that the subject is lesser than the object.", 
      "domains": [
        "QualitativeValue"
      ], 
      "id": "lesser", 
      "label": "Lesser", 
      "ranges": [
        "QualitativeValue"
      ]
    }, 
    "lesserOrEqual": {
      "comment": "This ordering relation for qualitative values indicates that the subject is lesser than or equal to the object.", 
      "comment_plain": "This ordering relation for qualitative values indicates that the subject is lesser than or equal to the object.", 
      "domains": [
        "QualitativeValue"
      ], 
      "id": "lesserOrEqual", 
      "label": "Lesser or Equal", 
      "ranges": [
        "QualitativeValue"
      ]
    }, 
    "line": {
      "comment": "A line is a point-to-point path consisting of two or more points. A line is expressed as a series of two or more point objects separated by space.", 
      "comment_plain": "A line is a point-to-point path consisting of two or more points. A line is expressed as a series of two or more point objects separated by space.", 
      "domains": [
        "GeoShape"
      ], 
      "id": "line", 
      "label": "Line", 
      "ranges": [
        "Text"
      ]
    }, 
    "location": {
      "comment": "The location of the event, organization or action.", 
      "comment_plain": "The location of the event, organization or action.", 
      "domains": [
        "Action", 
        "Organization", 
        "Event"
      ], 
      "id": "location", 
      "label": "Location", 
      "ranges": [
        "PostalAddress", 
        "Place"
      ]
    }, 
    "logo": {
      "comment": "A logo associated with an organization.", 
      "comment_plain": "A logo associated with an organization.", 
      "domains": [
        "Organization", 
        "Brand", 
        "Place", 
        "Product"
      ], 
      "id": "logo", 
      "label": "Logo", 
      "ranges": [
        "URL", 
        "ImageObject"
      ]
    }, 
    "longitude": {
      "comment": "The longitude of a location. For example <code>-122.08585</code>.", 
      "comment_plain": "The longitude of a location. For example -122.08585.", 
      "domains": [
        "GeoCoordinates"
      ], 
      "id": "longitude", 
      "label": "Longitude", 
      "ranges": [
        "Number", 
        "Text"
      ]
    }, 
    "loser": {
      "comment": "A sub property of participant. The loser of the action.", 
      "comment_plain": "A sub property of participant. The loser of the action.", 
      "domains": [
        "WinAction"
      ], 
      "id": "loser", 
      "label": "Loser", 
      "ranges": [
        "Person"
      ]
    }, 
    "lowPrice": {
      "comment": "The lowest price of all offers available.", 
      "comment_plain": "The lowest price of all offers available.", 
      "domains": [
        "AggregateOffer"
      ], 
      "id": "lowPrice", 
      "label": "Low Price", 
      "ranges": [
        "Number", 
        "Text"
      ]
    }, 
    "mainContentOfPage": {
      "comment": "Indicates if this web page element is the main subject of the page.", 
      "comment_plain": "Indicates if this web page element is the main subject of the page.", 
      "domains": [
        "WebPage"
      ], 
      "id": "mainContentOfPage", 
      "label": "Main Content of Page", 
      "ranges": [
        "WebPageElement"
      ]
    }, 
    "makesOffer": {
      "comment": "A pointer to products or services offered by the organization or person.", 
      "comment_plain": "A pointer to products or services offered by the organization or person.", 
      "domains": [
        "Person", 
        "Organization"
      ], 
      "id": "makesOffer", 
      "label": "Makes Offer", 
      "ranges": [
        "Offer"
      ]
    }, 
    "manufacturer": {
      "comment": "The manufacturer of the product.", 
      "comment_plain": "The manufacturer of the product.", 
      "domains": [
        "Product", 
        "DietarySupplement", 
        "Drug"
      ], 
      "id": "manufacturer", 
      "label": "Manufacturer", 
      "ranges": [
        "Organization"
      ]
    }, 
    "map": {
      "comment": "A URL to a map of the place.", 
      "comment_plain": "A URL to a map of the place.", 
      "domains": [
        "Place"
      ], 
      "id": "map", 
      "label": "Map", 
      "ranges": [
        "URL"
      ]
    }, 
    "maps": {
      "comment": "A URL to a map of the place (legacy spelling; see singular form, map).", 
      "comment_plain": "A URL to a map of the place (legacy spelling; see singular form, map).", 
      "domains": [
        "Place"
      ], 
      "id": "maps", 
      "label": "Maps", 
      "ranges": [
        "URL"
      ]
    }, 
    "maxPrice": {
      "comment": "The highest price if the price is a range.", 
      "comment_plain": "The highest price if the price is a range.", 
      "domains": [
        "PriceSpecification"
      ], 
      "id": "maxPrice", 
      "label": "Max Price", 
      "ranges": [
        "Number"
      ]
    }, 
    "maxValue": {
      "comment": "The upper of the product characteristic.", 
      "comment_plain": "The upper of the product characteristic.", 
      "domains": [
        "QuantitativeValue"
      ], 
      "id": "maxValue", 
      "label": "Max Value", 
      "ranges": [
        "Number"
      ]
    }, 
    "maximumIntake": {
      "comment": "Recommended intake of this supplement for a given population as defined by a specific recommending authority.", 
      "comment_plain": "Recommended intake of this supplement for a given population as defined by a specific recommending authority.", 
      "domains": [
        "DietarySupplement"
      ], 
      "id": "maximumIntake", 
      "label": "Maximum Intake", 
      "ranges": [
        "MaximumDoseSchedule"
      ]
    }, 
    "mechanismOfAction": {
      "comment": "The specific biochemical interaction through which this drug or supplement produces its pharmacological effect.", 
      "comment_plain": "The specific biochemical interaction through which this drug or supplement produces its pharmacological effect.", 
      "domains": [
        "DietarySupplement", 
        "Drug"
      ], 
      "id": "mechanismOfAction", 
      "label": "Mechanism of Action", 
      "ranges": [
        "Text"
      ]
    }, 
    "medicalSpecialty": {
      "comment": "A medical specialty of the provider.", 
      "comment_plain": "A medical specialty of the provider.", 
      "domains": [
        "Physician", 
        "Hospital", 
        "MedicalClinic"
      ], 
      "id": "medicalSpecialty", 
      "label": "Medical Specialty", 
      "ranges": [
        "MedicalSpecialty"
      ]
    }, 
    "medicineSystem": {
      "comment": "The system of medicine that includes this MedicalEntity, for example 'evidence-based', 'homeopathic', 'chiropractic', etc.", 
      "comment_plain": "The system of medicine that includes this MedicalEntity, for example 'evidence-based', 'homeopathic', 'chiropractic', etc.", 
      "domains": [
        "MedicalEntity"
      ], 
      "id": "medicineSystem", 
      "label": "Medicine System", 
      "ranges": [
        "MedicineSystem"
      ]
    }, 
    "member": {
      "comment": "A member of this organization.", 
      "comment_plain": "A member of this organization.", 
      "domains": [
        "Organization"
      ], 
      "id": "member", 
      "label": "Member", 
      "ranges": [
        "Organization", 
        "Person"
      ]
    }, 
    "memberOf": {
      "comment": "An organization to which the person belongs.", 
      "comment_plain": "An organization to which the person belongs.", 
      "domains": [
        "Person"
      ], 
      "id": "memberOf", 
      "label": "Member of", 
      "ranges": [
        "Organization"
      ]
    }, 
    "members": {
      "comment": "A member of this organization (legacy spelling; see singular form, member).", 
      "comment_plain": "A member of this organization (legacy spelling; see singular form, member).", 
      "domains": [
        "Organization"
      ], 
      "id": "members", 
      "label": "Members", 
      "ranges": [
        "Organization", 
        "Person"
      ]
    }, 
    "memoryRequirements": {
      "comment": "Minimum memory requirements.", 
      "comment_plain": "Minimum memory requirements.", 
      "domains": [
        "SoftwareApplication"
      ], 
      "id": "memoryRequirements", 
      "label": "Memory Requirements", 
      "ranges": [
        "Text", 
        "URL"
      ]
    }, 
    "mentions": {
      "comment": "Indicates that the CreativeWork contains a reference to, but is not necessarily about a concept.", 
      "comment_plain": "Indicates that the CreativeWork contains a reference to, but is not necessarily about a concept.", 
      "domains": [
        "CreativeWork"
      ], 
      "id": "mentions", 
      "label": "Mentions", 
      "ranges": [
        "Thing"
      ]
    }, 
    "menu": {
      "comment": "Either the actual menu or a URL of the menu.", 
      "comment_plain": "Either the actual menu or a URL of the menu.", 
      "domains": [
        "FoodEstablishment"
      ], 
      "id": "menu", 
      "label": "Menu", 
      "ranges": [
        "Text", 
        "URL"
      ]
    }, 
    "merchant": {
      "comment": "The party taking the order (e.g. Amazon.com is a merchant for many sellers).", 
      "comment_plain": "The party taking the order (e.g. Amazon.com is a merchant for many sellers).", 
      "domains": [
        "Order"
      ], 
      "id": "merchant", 
      "label": "Merchant", 
      "ranges": [
        "Organization", 
        "Person"
      ]
    }, 
    "minPrice": {
      "comment": "The lowest price if the price is a range.", 
      "comment_plain": "The lowest price if the price is a range.", 
      "domains": [
        "PriceSpecification"
      ], 
      "id": "minPrice", 
      "label": "Min Price", 
      "ranges": [
        "Number"
      ]
    }, 
    "minValue": {
      "comment": "The lower value of the product characteristic.", 
      "comment_plain": "The lower value of the product characteristic.", 
      "domains": [
        "QuantitativeValue"
      ], 
      "id": "minValue", 
      "label": "Min Value", 
      "ranges": [
        "Number"
      ]
    }, 
    "model": {
      "comment": "The model of the product. Use with the URL of a ProductModel or a textual representation of the model identifier. The URL of the ProductModel can be from an external source. It is recommended to additionally provide strong product identifiers via the gtin8/gtin13/gtin14 and mpn properties.", 
      "comment_plain": "The model of the product. Use with the URL of a ProductModel or a textual representation of the model identifier. The URL of the ProductModel can be from an external source. It is recommended to additionally provide strong product identifiers via the gtin8/gtin13/gtin14 and mpn properties.", 
      "domains": [
        "Product"
      ], 
      "id": "model", 
      "label": "Model", 
      "ranges": [
        "ProductModel", 
        "Text"
      ]
    }, 
    "mpn": {
      "comment": "The Manufacturer Part Number (MPN) of the product, or the product to which the offer refers.", 
      "comment_plain": "The Manufacturer Part Number (MPN) of the product, or the product to which the offer refers.", 
      "domains": [
        "Product", 
        "Offer", 
        "Demand"
      ], 
      "id": "mpn", 
      "label": "Mpn", 
      "ranges": [
        "Text"
      ]
    }, 
    "musicBy": {
      "comment": "The composer of the movie or TV/radio soundtrack.", 
      "comment_plain": "The composer of the movie or TV/radio soundtrack.", 
      "domains": [
        "Series", 
        "Episode", 
        "Movie"
      ], 
      "id": "musicBy", 
      "label": "Music by", 
      "ranges": [
        "Person", 
        "MusicGroup"
      ]
    }, 
    "musicGroupMember": {
      "comment": "A member of the music group\u2014for example, John, Paul, George, or Ringo.", 
      "comment_plain": "A member of the music group\u2014for example, John, Paul, George, or Ringo.", 
      "domains": [
        "MusicGroup"
      ], 
      "id": "musicGroupMember", 
      "label": "Music Group Member", 
      "ranges": [
        "Person"
      ]
    }, 
    "naics": {
      "comment": "The North American Industry Classification System (NAICS) code for a particular organization or business person.", 
      "comment_plain": "The North American Industry Classification System (NAICS) code for a particular organization or business person.", 
      "domains": [
        "Person", 
        "Organization"
      ], 
      "id": "naics", 
      "label": "Naics", 
      "ranges": [
        "Text"
      ]
    }, 
    "name": {
      "comment": "The name of the item.", 
      "comment_plain": "The name of the item.", 
      "domains": [
        "Thing"
      ], 
      "id": "name", 
      "label": "Name", 
      "ranges": [
        "Text"
      ]
    }, 
    "nationality": {
      "comment": "Nationality of the person.", 
      "comment_plain": "Nationality of the person.", 
      "domains": [
        "Person"
      ], 
      "id": "nationality", 
      "label": "Nationality", 
      "ranges": [
        "Country"
      ]
    }, 
    "naturalProgression": {
      "comment": "The expected progression of the condition if it is not treated and allowed to progress naturally.", 
      "comment_plain": "The expected progression of the condition if it is not treated and allowed to progress naturally.", 
      "domains": [
        "MedicalCondition"
      ], 
      "id": "naturalProgression", 
      "label": "Natural Progression", 
      "ranges": [
        "Text"
      ]
    }, 
    "nerve": {
      "comment": "The underlying innervation associated with the muscle.", 
      "comment_plain": "The underlying innervation associated with the muscle.", 
      "domains": [
        "Muscle"
      ], 
      "id": "nerve", 
      "label": "Nerve", 
      "ranges": [
        "Nerve"
      ]
    }, 
    "nerveMotor": {
      "comment": "The neurological pathway extension that involves muscle control.", 
      "comment_plain": "The neurological pathway extension that involves muscle control.", 
      "domains": [
        "Nerve"
      ], 
      "id": "nerveMotor", 
      "label": "Nerve Motor", 
      "ranges": [
        "Muscle"
      ]
    }, 
    "nonEqual": {
      "comment": "This ordering relation for qualitative values indicates that the subject is not equal to the object.", 
      "comment_plain": "This ordering relation for qualitative values indicates that the subject is not equal to the object.", 
      "domains": [
        "QualitativeValue"
      ], 
      "id": "nonEqual", 
      "label": "Non Equal", 
      "ranges": [
        "QualitativeValue"
      ]
    }, 
    "nonProprietaryName": {
      "comment": "The generic name of this drug or supplement.", 
      "comment_plain": "The generic name of this drug or supplement.", 
      "domains": [
        "DietarySupplement", 
        "Drug"
      ], 
      "id": "nonProprietaryName", 
      "label": "Non Proprietary Name", 
      "ranges": [
        "Text"
      ]
    }, 
    "normalRange": {
      "comment": "Range of acceptable values for a typical patient, when applicable.", 
      "comment_plain": "Range of acceptable values for a typical patient, when applicable.", 
      "domains": [
        "MedicalTest"
      ], 
      "id": "normalRange", 
      "label": "Normal Range", 
      "ranges": [
        "Text"
      ]
    }, 
    "numTracks": {
      "comment": "The number of tracks in this album or playlist.", 
      "comment_plain": "The number of tracks in this album or playlist.", 
      "domains": [
        "MusicPlaylist"
      ], 
      "id": "numTracks", 
      "label": "Num Tracks", 
      "ranges": [
        "Integer"
      ]
    }, 
    "numberOfEpisodes": {
      "comment": "The number of episodes in this season or series.", 
      "comment_plain": "The number of episodes in this season or series.", 
      "domains": [
        "Series", 
        "Season"
      ], 
      "id": "numberOfEpisodes", 
      "label": "Number of Episodes", 
      "ranges": [
        "Number"
      ]
    }, 
    "numberOfPages": {
      "comment": "The number of pages in the book.", 
      "comment_plain": "The number of pages in the book.", 
      "domains": [
        "Book"
      ], 
      "id": "numberOfPages", 
      "label": "Number of Pages", 
      "ranges": [
        "Integer"
      ]
    }, 
    "numberOfSeasons": {
      "comment": "The number of seasons in this series.", 
      "comment_plain": "The number of seasons in this series.", 
      "domains": [
        "Series"
      ], 
      "id": "numberOfSeasons", 
      "label": "Number of Seasons", 
      "ranges": [
        "Number"
      ]
    }, 
    "numberofEmployees": {
      "comment": "The size of business by number of employees.", 
      "comment_plain": "The size of business by number of employees.", 
      "domains": [
        "BusinessAudience"
      ], 
      "id": "numberofEmployees", 
      "label": "Numberof Employees", 
      "ranges": [
        "QuantitativeValue"
      ]
    }, 
    "nutrition": {
      "comment": "Nutrition information about the recipe.", 
      "comment_plain": "Nutrition information about the recipe.", 
      "domains": [
        "Recipe"
      ], 
      "id": "nutrition", 
      "label": "Nutrition", 
      "ranges": [
        "NutritionInformation"
      ]
    }, 
    "object": {
      "comment": "The object upon the action is carried out, whose state is kept intact or changed. Also known as the semantic roles patient, affected or undergoer (which change their state) or theme (which doesn't). e.g. John read *a book*.", 
      "comment_plain": "The object upon the action is carried out, whose state is kept intact or changed. Also known as the semantic roles patient, affected or undergoer (which change their state) or theme (which doesn't). e.g. John read *a book*.", 
      "domains": [
        "Action"
      ], 
      "id": "object", 
      "label": "Object", 
      "ranges": [
        "Thing"
      ]
    }, 
    "occupationalCategory": {
      "comment": "Category or categories describing the job. Use BLS O*NET-SOC taxonomy: http://www.onetcenter.org/taxonomy.html. Ideally includes textual label and formal code, with the property repeated for each applicable value.", 
      "comment_plain": "Category or categories describing the job. Use BLS O*NET-SOC taxonomy: http://www.onetcenter.org/taxonomy.html. Ideally includes textual label and formal code, with the property repeated for each applicable value.", 
      "domains": [
        "JobPosting"
      ], 
      "id": "occupationalCategory", 
      "label": "Occupational Category", 
      "ranges": [
        "Text"
      ]
    }, 
    "offerCount": {
      "comment": "The number of offers for the product.", 
      "comment_plain": "The number of offers for the product.", 
      "domains": [
        "AggregateOffer"
      ], 
      "id": "offerCount", 
      "label": "Offer Count", 
      "ranges": [
        "Integer"
      ]
    }, 
    "offers": {
      "comment": "An offer to transfer some rights to an item or to provide a service\u2014for example, an offer to sell tickets to an event, to rent the DVD of a movie, to stream a TV show over the internet, to repair a motorcycle, or to loan a book.", 
      "comment_plain": "An offer to transfer some rights to an item or to provide a service\u2014for example, an offer to sell tickets to an event, to rent the DVD of a movie, to stream a TV show over the internet, to repair a motorcycle, or to loan a book.", 
      "domains": [
        "Product", 
        "CreativeWork", 
        "Event"
      ], 
      "id": "offers", 
      "label": "Offers", 
      "ranges": [
        "Offer"
      ]
    }, 
    "openingHours": {
      "comment": "The opening hours for a business. Opening hours can be specified as a weekly time range, starting with days, then times per day. Multiple days can be listed with commas ',' separating each day. Day or time ranges are specified using a hyphen '-'.<br/>- Days are specified using the following two-letter combinations: <code>Mo</code>, <code>Tu</code>, <code>We</code>, <code>Th</code>, <code>Fr</code>, <code>Sa</code>, <code>Su</code>.<br/>- Times are specified using 24:00 time. For example, 3pm is specified as <code>15:00</code>. <br/>- Here is an example: <code>&lt;time itemprop=\"openingHours\" datetime=\"Tu,Th 16:00-20:00\"&gt;Tuesdays and Thursdays 4-8pm&lt;/time&gt;</code>. <br/>- If a business is open 7 days a week, then it can be specified as <code>&lt;time itemprop=\"openingHours\" datetime=\"Mo-Su\"&gt;Monday through Sunday, all day&lt;/time&gt;</code>.", 
      "comment_plain": "The opening hours for a business. Opening hours can be specified as a weekly time range, starting with days, then times per day. Multiple days can be listed with commas ',' separating each day. Day or time ranges are specified using a hyphen '-'.- Days are specified using the following two-letter combinations: Mo, Tu, We, Th, Fr, Sa, Su.- Times are specified using 24:00 time. For example, 3pm is specified as 15:00. - Here is an example: <time itemprop=\"openingHours\" datetime=\"Tu,Th 16:00-20:00\">Tuesdays and Thursdays 4-8pm</time>. - If a business is open 7 days a week, then it can be specified as <time itemprop=\"openingHours\" datetime=\"Mo-Su\">Monday through Sunday, all day</time>.", 
      "domains": [
        "LocalBusiness", 
        "CivicStructure"
      ], 
      "id": "openingHours", 
      "label": "Opening Hours", 
      "ranges": [
        "Duration"
      ]
    }, 
    "openingHoursSpecification": {
      "comment": "The opening hours of a certain place.", 
      "comment_plain": "The opening hours of a certain place.", 
      "domains": [
        "Place"
      ], 
      "id": "openingHoursSpecification", 
      "label": "Opening Hours Specification", 
      "ranges": [
        "OpeningHoursSpecification"
      ]
    }, 
    "opens": {
      "comment": "The opening hour of the place or service on the given day(s) of the week.", 
      "comment_plain": "The opening hour of the place or service on the given day(s) of the week.", 
      "domains": [
        "OpeningHoursSpecification"
      ], 
      "id": "opens", 
      "label": "Opens", 
      "ranges": [
        "Time"
      ]
    }, 
    "operatingSystem": {
      "comment": "Operating systems supported (Windows 7, OSX 10.6, Android 1.6).", 
      "comment_plain": "Operating systems supported (Windows 7, OSX 10.6, Android 1.6).", 
      "domains": [
        "SoftwareApplication"
      ], 
      "id": "operatingSystem", 
      "label": "Operating System", 
      "ranges": [
        "Text"
      ]
    }, 
    "oponent": {
      "comment": "A sub property of participant. The oponent on this action.", 
      "comment_plain": "A sub property of participant. The oponent on this action.", 
      "domains": [
        "ExerciseAction"
      ], 
      "id": "oponent", 
      "label": "Oponent", 
      "ranges": [
        "Person"
      ]
    }, 
    "option": {
      "comment": "A sub property of object. The options subject to this action.", 
      "comment_plain": "A sub property of object. The options subject to this action.", 
      "domains": [
        "ChooseAction"
      ], 
      "id": "option", 
      "label": "Option", 
      "ranges": [
        "Text", 
        "Thing"
      ]
    }, 
    "orderDate": {
      "comment": "Date order was placed.", 
      "comment_plain": "Date order was placed.", 
      "domains": [
        "Order"
      ], 
      "id": "orderDate", 
      "label": "Order Date", 
      "ranges": [
        "DateTime"
      ]
    }, 
    "orderNumber": {
      "comment": "The identifier of the transaction.", 
      "comment_plain": "The identifier of the transaction.", 
      "domains": [
        "Order"
      ], 
      "id": "orderNumber", 
      "label": "Order Number", 
      "ranges": [
        "Text"
      ]
    }, 
    "orderStatus": {
      "comment": "The current status of the order.", 
      "comment_plain": "The current status of the order.", 
      "domains": [
        "Order"
      ], 
      "id": "orderStatus", 
      "label": "Order Status", 
      "ranges": [
        "OrderStatus"
      ]
    }, 
    "orderedItem": {
      "comment": "The item ordered.", 
      "comment_plain": "The item ordered.", 
      "domains": [
        "Order"
      ], 
      "id": "orderedItem", 
      "label": "Ordered Item", 
      "ranges": [
        "Product"
      ]
    }, 
    "origin": {
      "comment": "The place or point where a muscle arises.", 
      "comment_plain": "The place or point where a muscle arises.", 
      "domains": [
        "Muscle"
      ], 
      "id": "origin", 
      "label": "Origin", 
      "ranges": [
        "AnatomicalStructure"
      ]
    }, 
    "originAddress": {
      "comment": "Shipper's address.", 
      "comment_plain": "Shipper's address.", 
      "domains": [
        "ParcelDelivery"
      ], 
      "id": "originAddress", 
      "label": "Origin Address", 
      "ranges": [
        "PostalAddress"
      ]
    }, 
    "originatesFrom": {
      "comment": "The vasculature the lymphatic structure originates, or afferents, from.", 
      "comment_plain": "The vasculature the lymphatic structure originates, or afferents, from.", 
      "domains": [
        "LymphaticVessel"
      ], 
      "id": "originatesFrom", 
      "label": "Originates From", 
      "ranges": [
        "Vessel"
      ]
    }, 
    "outcome": {
      "comment": "Expected or actual outcomes of the study.", 
      "comment_plain": "Expected or actual outcomes of the study.", 
      "domains": [
        "MedicalStudy"
      ], 
      "id": "outcome", 
      "label": "Outcome", 
      "ranges": [
        "Text"
      ]
    }, 
    "overdosage": {
      "comment": "Any information related to overdose on a drug, including signs or symptoms, treatments, contact information for emergency response.", 
      "comment_plain": "Any information related to overdose on a drug, including signs or symptoms, treatments, contact information for emergency response.", 
      "domains": [
        "Drug"
      ], 
      "id": "overdosage", 
      "label": "Overdosage", 
      "ranges": [
        "Text"
      ]
    }, 
    "overview": {
      "comment": "Descriptive information establishing the overarching theory/philosophy of the plan. May include the rationale for the name, the population where the plan first came to prominence, etc.", 
      "comment_plain": "Descriptive information establishing the overarching theory/philosophy of the plan. May include the rationale for the name, the population where the plan first came to prominence, etc.", 
      "domains": [
        "Diet"
      ], 
      "id": "overview", 
      "label": "Overview", 
      "ranges": [
        "Text"
      ]
    }, 
    "ownedFrom": {
      "comment": "The date and time of obtaining the product.", 
      "comment_plain": "The date and time of obtaining the product.", 
      "domains": [
        "OwnershipInfo"
      ], 
      "id": "ownedFrom", 
      "label": "Owned From", 
      "ranges": [
        "DateTime"
      ]
    }, 
    "ownedThrough": {
      "comment": "The date and time of giving up ownership on the product.", 
      "comment_plain": "The date and time of giving up ownership on the product.", 
      "domains": [
        "OwnershipInfo"
      ], 
      "id": "ownedThrough", 
      "label": "Owned Through", 
      "ranges": [
        "DateTime"
      ]
    }, 
    "owns": {
      "comment": "Products owned by the organization or person.", 
      "comment_plain": "Products owned by the organization or person.", 
      "domains": [
        "Person", 
        "Organization"
      ], 
      "id": "owns", 
      "label": "Owns", 
      "ranges": [
        "OwnershipInfo", 
        "Product"
      ]
    }, 
    "parent": {
      "comment": "A parent of this person.", 
      "comment_plain": "A parent of this person.", 
      "domains": [
        "Person"
      ], 
      "id": "parent", 
      "label": "Parent", 
      "ranges": [
        "Person"
      ]
    }, 
    "parentService": {
      "comment": "A broadcast service to which the broadcast service may belong to such as regional variations of a national channel.", 
      "comment_plain": "A broadcast service to which the broadcast service may belong to such as regional variations of a national channel.", 
      "domains": [
        "BroadcastService"
      ], 
      "id": "parentService", 
      "label": "Parent Service", 
      "ranges": [
        "BroadcastService"
      ]
    }, 
    "parents": {
      "comment": "A parents of the person (legacy spelling; see singular form, parent).", 
      "comment_plain": "A parents of the person (legacy spelling; see singular form, parent).", 
      "domains": [
        "Person"
      ], 
      "id": "parents", 
      "label": "Parents", 
      "ranges": [
        "Person"
      ]
    }, 
    "partOfEpisode": {
      "comment": "The episode to which this clip belongs.", 
      "comment_plain": "The episode to which this clip belongs.", 
      "domains": [
        "Clip"
      ], 
      "id": "partOfEpisode", 
      "label": "Part of Episode", 
      "ranges": [
        "Episode"
      ]
    }, 
    "partOfOrder": {
      "comment": "The overall order the items in this delivery were included in.", 
      "comment_plain": "The overall order the items in this delivery were included in.", 
      "domains": [
        "ParcelDelivery"
      ], 
      "id": "partOfOrder", 
      "label": "Part of Order", 
      "ranges": [
        "Order"
      ]
    }, 
    "partOfSeason": {
      "comment": "The season to which this episode belongs.", 
      "comment_plain": "The season to which this episode belongs.", 
      "domains": [
        "Episode", 
        "Clip"
      ], 
      "id": "partOfSeason", 
      "label": "Part of Season", 
      "ranges": [
        "Season"
      ]
    }, 
    "partOfSeries": {
      "comment": "The series to which this episode or season belongs.", 
      "comment_plain": "The series to which this episode or season belongs.", 
      "domains": [
        "Season", 
        "Episode", 
        "Clip"
      ], 
      "id": "partOfSeries", 
      "label": "Part of Series", 
      "ranges": [
        "Series"
      ]
    }, 
    "partOfSystem": {
      "comment": "The anatomical or organ system that this structure is part of.", 
      "comment_plain": "The anatomical or organ system that this structure is part of.", 
      "domains": [
        "AnatomicalStructure"
      ], 
      "id": "partOfSystem", 
      "label": "Part of System", 
      "ranges": [
        "AnatomicalSystem"
      ]
    }, 
    "partOfTVSeries": {
      "comment": "The TV series to which this episode or season belongs. (legacy form; partOfSeries is preferred)", 
      "comment_plain": "The TV series to which this episode or season belongs. (legacy form; partOfSeries is preferred)", 
      "domains": [
        "TVEpisode", 
        "TVSeason", 
        "TVClip"
      ], 
      "id": "partOfTVSeries", 
      "label": "Part of TV Series", 
      "ranges": [
        "TVSeries"
      ]
    }, 
    "participant": {
      "comment": "Other co-agents that participated in the action indirectly. e.g. John wrote a book with *Steve*.", 
      "comment_plain": "Other co-agents that participated in the action indirectly. e.g. John wrote a book with *Steve*.", 
      "domains": [
        "Action"
      ], 
      "id": "participant", 
      "label": "Participant", 
      "ranges": [
        "Organization", 
        "Person"
      ]
    }, 
    "pathophysiology": {
      "comment": "Changes in the normal mechanical, physical, and biochemical functions that are associated with this activity or condition.", 
      "comment_plain": "Changes in the normal mechanical, physical, and biochemical functions that are associated with this activity or condition.", 
      "domains": [
        "MedicalCondition", 
        "PhysicalActivity"
      ], 
      "id": "pathophysiology", 
      "label": "Pathophysiology", 
      "ranges": [
        "Text"
      ]
    }, 
    "paymentAccepted": {
      "comment": "Cash, credit card, etc.", 
      "comment_plain": "Cash, credit card, etc.", 
      "domains": [
        "LocalBusiness"
      ], 
      "id": "paymentAccepted", 
      "label": "Payment Accepted", 
      "ranges": [
        "Text"
      ]
    }, 
    "paymentDue": {
      "comment": "The date that payment is due.", 
      "comment_plain": "The date that payment is due.", 
      "domains": [
        "Order"
      ], 
      "id": "paymentDue", 
      "label": "Payment Due", 
      "ranges": [
        "DateTime"
      ]
    }, 
    "paymentMethod": {
      "comment": "The name of the credit card or other method of payment for the order.", 
      "comment_plain": "The name of the credit card or other method of payment for the order.", 
      "domains": [
        "Order"
      ], 
      "id": "paymentMethod", 
      "label": "Payment Method", 
      "ranges": [
        "PaymentMethod"
      ]
    }, 
    "paymentMethodId": {
      "comment": "An identifier for the method of payment used (e.g. the last 4 digits of the credit card).", 
      "comment_plain": "An identifier for the method of payment used (e.g. the last 4 digits of the credit card).", 
      "domains": [
        "Order"
      ], 
      "id": "paymentMethodId", 
      "label": "Payment Method Id", 
      "ranges": [
        "Text"
      ]
    }, 
    "paymentUrl": {
      "comment": "The URL for sending a payment.", 
      "comment_plain": "The URL for sending a payment.", 
      "domains": [
        "Order"
      ], 
      "id": "paymentUrl", 
      "label": "Payment Url", 
      "ranges": [
        "URL"
      ]
    }, 
    "performer": {
      "comment": "A performer at the event\u2014for example, a presenter, musician, musical group or actor.", 
      "comment_plain": "A performer at the event\u2014for example, a presenter, musician, musical group or actor.", 
      "domains": [
        "Event"
      ], 
      "id": "performer", 
      "label": "Performer", 
      "ranges": [
        "Organization", 
        "Person"
      ]
    }, 
    "performerIn": {
      "comment": "Event that this person is a performer or participant in.", 
      "comment_plain": "Event that this person is a performer or participant in.", 
      "domains": [
        "Person"
      ], 
      "id": "performerIn", 
      "label": "Performer in", 
      "ranges": [
        "Event"
      ]
    }, 
    "performers": {
      "comment": "The main performer or performers of the event\u2014for example, a presenter, musician, or actor (legacy spelling; see singular form, performer).", 
      "comment_plain": "The main performer or performers of the event\u2014for example, a presenter, musician, or actor (legacy spelling; see singular form, performer).", 
      "domains": [
        "Event"
      ], 
      "id": "performers", 
      "label": "Performers", 
      "ranges": [
        "Organization", 
        "Person"
      ]
    }, 
    "permissions": {
      "comment": "Permission(s) required to run the app (for example, a mobile app may require full internet access or may run only on wifi).", 
      "comment_plain": "Permission(s) required to run the app (for example, a mobile app may require full internet access or may run only on wifi).", 
      "domains": [
        "SoftwareApplication"
      ], 
      "id": "permissions", 
      "label": "Permissions", 
      "ranges": [
        "Text"
      ]
    }, 
    "permitAudience": {
      "comment": "The target audience for this permit.", 
      "comment_plain": "The target audience for this permit.", 
      "domains": [
        "Permit"
      ], 
      "id": "permitAudience", 
      "label": "Permit Audience", 
      "ranges": [
        "Audience"
      ]
    }, 
    "phase": {
      "comment": "The phase of the trial.", 
      "comment_plain": "The phase of the trial.", 
      "domains": [
        "MedicalTrial"
      ], 
      "id": "phase", 
      "label": "Phase", 
      "ranges": [
        "Text"
      ]
    }, 
    "photo": {
      "comment": "A photograph of this place.", 
      "comment_plain": "A photograph of this place.", 
      "domains": [
        "Place"
      ], 
      "id": "photo", 
      "label": "Photo", 
      "ranges": [
        "ImageObject", 
        "Photograph"
      ]
    }, 
    "photos": {
      "comment": "Photographs of this place (legacy spelling; see singular form, photo).", 
      "comment_plain": "Photographs of this place (legacy spelling; see singular form, photo).", 
      "domains": [
        "Place"
      ], 
      "id": "photos", 
      "label": "Photos", 
      "ranges": [
        "ImageObject", 
        "Photograph"
      ]
    }, 
    "physiologicalBenefits": {
      "comment": "Specific physiologic benefits associated to the plan.", 
      "comment_plain": "Specific physiologic benefits associated to the plan.", 
      "domains": [
        "Diet"
      ], 
      "id": "physiologicalBenefits", 
      "label": "Physiological Benefits", 
      "ranges": [
        "Text"
      ]
    }, 
    "playerType": {
      "comment": "Player type required\u2014for example, Flash or Silverlight.", 
      "comment_plain": "Player type required\u2014for example, Flash or Silverlight.", 
      "domains": [
        "MediaObject"
      ], 
      "id": "playerType", 
      "label": "Player Type", 
      "ranges": [
        "Text"
      ]
    }, 
    "polygon": {
      "comment": "A polygon is the area enclosed by a point-to-point path for which the starting and ending points are the same. A polygon is expressed as a series of four or more spacedelimited points where the first and final points are identical.", 
      "comment_plain": "A polygon is the area enclosed by a point-to-point path for which the starting and ending points are the same. A polygon is expressed as a series of four or more spacedelimited points where the first and final points are identical.", 
      "domains": [
        "GeoShape"
      ], 
      "id": "polygon", 
      "label": "Polygon", 
      "ranges": [
        "Text"
      ]
    }, 
    "population": {
      "comment": "Any characteristics of the population used in the study, e.g. 'males under 65'.", 
      "comment_plain": "Any characteristics of the population used in the study, e.g. 'males under 65'.", 
      "domains": [
        "MedicalStudy"
      ], 
      "id": "population", 
      "label": "Population", 
      "ranges": [
        "Text"
      ]
    }, 
    "position": {
      "comment": "Free text to define other than pure numerical ranking of an episode or a season in an ordered list of items (further formatting restrictions may apply within particular user groups).", 
      "comment_plain": "Free text to define other than pure numerical ranking of an episode or a season in an ordered list of items (further formatting restrictions may apply within particular user groups).", 
      "domains": [
        "Season", 
        "Episode", 
        "Clip"
      ], 
      "id": "position", 
      "label": "Position", 
      "ranges": [
        "Text"
      ]
    }, 
    "possibleComplication": {
      "comment": "A possible unexpected and unfavorable evolution of a medical condition. Complications may include worsening of the signs or symptoms of the disease, extension of the condition to other organ systems, etc.", 
      "comment_plain": "A possible unexpected and unfavorable evolution of a medical condition. Complications may include worsening of the signs or symptoms of the disease, extension of the condition to other organ systems, etc.", 
      "domains": [
        "MedicalCondition"
      ], 
      "id": "possibleComplication", 
      "label": "Possible Complication", 
      "ranges": [
        "Text"
      ]
    }, 
    "possibleTreatment": {
      "comment": "A possible treatment to address this condition, sign or symptom.", 
      "comment_plain": "A possible treatment to address this condition, sign or symptom.", 
      "domains": [
        "MedicalCondition", 
        "MedicalSignOrSymptom"
      ], 
      "id": "possibleTreatment", 
      "label": "Possible Treatment", 
      "ranges": [
        "MedicalTherapy"
      ]
    }, 
    "postOfficeBoxNumber": {
      "comment": "The post offce box number for PO box addresses.", 
      "comment_plain": "The post offce box number for PO box addresses.", 
      "domains": [
        "PostalAddress"
      ], 
      "id": "postOfficeBoxNumber", 
      "label": "Post Office Box Number", 
      "ranges": [
        "Text"
      ]
    }, 
    "postOp": {
      "comment": "A description of the postoperative procedures, care, and/or followups for this device.", 
      "comment_plain": "A description of the postoperative procedures, care, and/or followups for this device.", 
      "domains": [
        "MedicalDevice"
      ], 
      "id": "postOp", 
      "label": "Post Op", 
      "ranges": [
        "Text"
      ]
    }, 
    "postalCode": {
      "comment": "The postal code. For example, 94043.", 
      "comment_plain": "The postal code. For example, 94043.", 
      "domains": [
        "PostalAddress"
      ], 
      "id": "postalCode", 
      "label": "Postal Code", 
      "ranges": [
        "Text"
      ]
    }, 
    "preOp": {
      "comment": "A description of the workup, testing, and other preparations required before implanting this device.", 
      "comment_plain": "A description of the workup, testing, and other preparations required before implanting this device.", 
      "domains": [
        "MedicalDevice"
      ], 
      "id": "preOp", 
      "label": "Pre Op", 
      "ranges": [
        "Text"
      ]
    }, 
    "predecessorOf": {
      "comment": "A pointer from a previous, often discontinued variant of the product to its newer variant.", 
      "comment_plain": "A pointer from a previous, often discontinued variant of the product to its newer variant.", 
      "domains": [
        "ProductModel"
      ], 
      "id": "predecessorOf", 
      "label": "Predecessor of", 
      "ranges": [
        "ProductModel"
      ]
    }, 
    "pregnancyCategory": {
      "comment": "Pregnancy category of this drug.", 
      "comment_plain": "Pregnancy category of this drug.", 
      "domains": [
        "Drug"
      ], 
      "id": "pregnancyCategory", 
      "label": "Pregnancy Category", 
      "ranges": [
        "DrugPregnancyCategory"
      ]
    }, 
    "pregnancyWarning": {
      "comment": "Any precaution, guidance, contraindication, etc. related to this drug's use during pregnancy.", 
      "comment_plain": "Any precaution, guidance, contraindication, etc. related to this drug's use during pregnancy.", 
      "domains": [
        "Drug"
      ], 
      "id": "pregnancyWarning", 
      "label": "Pregnancy Warning", 
      "ranges": [
        "Text"
      ]
    }, 
    "prepTime": {
      "comment": "The length of time it takes to prepare the recipe, in <a href=\"http://en.wikipedia.org/wiki/ISO_8601\">ISO 8601 duration format</a>.", 
      "comment_plain": "The length of time it takes to prepare the recipe, in ISO 8601 duration format.", 
      "domains": [
        "Recipe"
      ], 
      "id": "prepTime", 
      "label": "Prep Time", 
      "ranges": [
        "Duration"
      ]
    }, 
    "preparation": {
      "comment": "Typical preparation that a patient must undergo before having the procedure performed.", 
      "comment_plain": "Typical preparation that a patient must undergo before having the procedure performed.", 
      "domains": [
        "MedicalProcedure"
      ], 
      "id": "preparation", 
      "label": "Preparation", 
      "ranges": [
        "Text"
      ]
    }, 
    "prescribingInfo": {
      "comment": "Link to prescribing information for the drug.", 
      "comment_plain": "Link to prescribing information for the drug.", 
      "domains": [
        "Drug"
      ], 
      "id": "prescribingInfo", 
      "label": "Prescribing Info", 
      "ranges": [
        "URL"
      ]
    }, 
    "prescriptionStatus": {
      "comment": "Indicates whether this drug is available by prescription or over-the-counter.", 
      "comment_plain": "Indicates whether this drug is available by prescription or over-the-counter.", 
      "domains": [
        "Drug"
      ], 
      "id": "prescriptionStatus", 
      "label": "Prescription Status", 
      "ranges": [
        "DrugPrescriptionStatus"
      ]
    }, 
    "previousStartDate": {
      "comment": "Used in conjunction with eventStatus for rescheduled or cancelled events. This property contains the previously scheduled start date. For rescheduled events, the startDate property should be used for the newly scheduled start date. In the (rare) case of an event that has been postponed and rescheduled multiple times, this field may be repeated.", 
      "comment_plain": "Used in conjunction with eventStatus for rescheduled or cancelled events. This property contains the previously scheduled start date. For rescheduled events, the startDate property should be used for the newly scheduled start date. In the (rare) case of an event that has been postponed and rescheduled multiple times, this field may be repeated.", 
      "domains": [
        "Event"
      ], 
      "id": "previousStartDate", 
      "label": "Previous Start Date", 
      "ranges": [
        "Date"
      ]
    }, 
    "price": {
      "comment": "The offer price of a product, or of a price component when attached to PriceSpecification and its subtypes.", 
      "comment_plain": "The offer price of a product, or of a price component when attached to PriceSpecification and its subtypes.", 
      "domains": [
        "TradeAction", 
        "PriceSpecification", 
        "Offer"
      ], 
      "id": "price", 
      "label": "Price", 
      "ranges": [
        "Text", 
        "Number"
      ]
    }, 
    "priceCurrency": {
      "comment": "The currency (in 3-letter ISO 4217 format) of the offer price or a price component, when attached to PriceSpecification and its subtypes.", 
      "comment_plain": "The currency (in 3-letter ISO 4217 format) of the offer price or a price component, when attached to PriceSpecification and its subtypes.", 
      "domains": [
        "PriceSpecification", 
        "Offer"
      ], 
      "id": "priceCurrency", 
      "label": "Price Currency", 
      "ranges": [
        "Text"
      ]
    }, 
    "priceRange": {
      "comment": "The price range of the business, for example <code>$$$</code>.", 
      "comment_plain": "The price range of the business, for example $$$.", 
      "domains": [
        "LocalBusiness"
      ], 
      "id": "priceRange", 
      "label": "Price Range", 
      "ranges": [
        "Text"
      ]
    }, 
    "priceSpecification": {
      "comment": "One or more detailed price specifications, indicating the unit price and delivery or payment charges.", 
      "comment_plain": "One or more detailed price specifications, indicating the unit price and delivery or payment charges.", 
      "domains": [
        "Offer", 
        "Demand"
      ], 
      "id": "priceSpecification", 
      "label": "Price Specification", 
      "ranges": [
        "PriceSpecification"
      ]
    }, 
    "priceType": {
      "comment": "A short text or acronym indicating multiple price specifications for the same offer, e.g. SRP for the suggested retail price or INVOICE for the invoice price, mostly used in the car industry.", 
      "comment_plain": "A short text or acronym indicating multiple price specifications for the same offer, e.g. SRP for the suggested retail price or INVOICE for the invoice price, mostly used in the car industry.", 
      "domains": [
        "UnitPriceSpecification"
      ], 
      "id": "priceType", 
      "label": "Price Type", 
      "ranges": [
        "Text"
      ]
    }, 
    "priceValidUntil": {
      "comment": "The date after which the price is no longer available.", 
      "comment_plain": "The date after which the price is no longer available.", 
      "domains": [
        "Offer"
      ], 
      "id": "priceValidUntil", 
      "label": "Price Valid Until", 
      "ranges": [
        "Date"
      ]
    }, 
    "primaryImageOfPage": {
      "comment": "Indicates the main image on the page", 
      "comment_plain": "Indicates the main image on the page", 
      "domains": [
        "WebPage"
      ], 
      "id": "primaryImageOfPage", 
      "label": "Primary Image of Page", 
      "ranges": [
        "ImageObject"
      ]
    }, 
    "primaryPrevention": {
      "comment": "A preventative therapy used to prevent an initial occurrence of the medical condition, such as vaccination.", 
      "comment_plain": "A preventative therapy used to prevent an initial occurrence of the medical condition, such as vaccination.", 
      "domains": [
        "MedicalCondition"
      ], 
      "id": "primaryPrevention", 
      "label": "Primary Prevention", 
      "ranges": [
        "MedicalTherapy"
      ]
    }, 
    "printColumn": {
      "comment": "The number of the column in which the NewsArticle appears in the print edition.", 
      "comment_plain": "The number of the column in which the NewsArticle appears in the print edition.", 
      "domains": [
        "NewsArticle"
      ], 
      "id": "printColumn", 
      "label": "Print Column", 
      "ranges": [
        "Text"
      ]
    }, 
    "printEdition": {
      "comment": "The edition of the print product in which the NewsArticle appears.", 
      "comment_plain": "The edition of the print product in which the NewsArticle appears.", 
      "domains": [
        "NewsArticle"
      ], 
      "id": "printEdition", 
      "label": "Print Edition", 
      "ranges": [
        "Text"
      ]
    }, 
    "printPage": {
      "comment": "If this NewsArticle appears in print, this field indicates the name of the page on which the article is found. Please note that this field is intended for the exact page name (e.g. A5, B18).", 
      "comment_plain": "If this NewsArticle appears in print, this field indicates the name of the page on which the article is found. Please note that this field is intended for the exact page name (e.g. A5, B18).", 
      "domains": [
        "NewsArticle"
      ], 
      "id": "printPage", 
      "label": "Print Page", 
      "ranges": [
        "Text"
      ]
    }, 
    "printSection": {
      "comment": "If this NewsArticle appears in print, this field indicates the print section in which the article appeared.", 
      "comment_plain": "If this NewsArticle appears in print, this field indicates the print section in which the article appeared.", 
      "domains": [
        "NewsArticle"
      ], 
      "id": "printSection", 
      "label": "Print Section", 
      "ranges": [
        "Text"
      ]
    }, 
    "procedure": {
      "comment": "A description of the procedure involved in setting up, using, and/or installing the device.", 
      "comment_plain": "A description of the procedure involved in setting up, using, and/or installing the device.", 
      "domains": [
        "MedicalDevice"
      ], 
      "id": "procedure", 
      "label": "Procedure", 
      "ranges": [
        "Text"
      ]
    }, 
    "procedureType": {
      "comment": "The type of procedure, for example Surgical, Noninvasive, or Percutaneous.", 
      "comment_plain": "The type of procedure, for example Surgical, Noninvasive, or Percutaneous.", 
      "domains": [
        "MedicalProcedure"
      ], 
      "id": "procedureType", 
      "label": "Procedure Type", 
      "ranges": [
        "MedicalProcedureType"
      ]
    }, 
    "processingTime": {
      "comment": "Estimated processing time for the service using this channel.", 
      "comment_plain": "Estimated processing time for the service using this channel.", 
      "domains": [
        "ServiceChannel"
      ], 
      "id": "processingTime", 
      "label": "Processing Time", 
      "ranges": [
        "Duration"
      ]
    }, 
    "processorRequirements": {
      "comment": "Processor architecture required to run the application (e.g. IA64).", 
      "comment_plain": "Processor architecture required to run the application (e.g. IA64).", 
      "domains": [
        "SoftwareApplication"
      ], 
      "id": "processorRequirements", 
      "label": "Processor Requirements", 
      "ranges": [
        "Text"
      ]
    }, 
    "producer": {
      "comment": "The producer of the movie, tv/radio series, season, or episode, or video.", 
      "comment_plain": "The producer of the movie, tv/radio series, season, or episode, or video.", 
      "domains": [
        "Movie", 
        "Season", 
        "Episode", 
        "Series"
      ], 
      "id": "producer", 
      "label": "Producer", 
      "ranges": [
        "Person"
      ]
    }, 
    "produces": {
      "comment": "The tangible thing generated by the service, e.g. a passport, permit, etc.", 
      "comment_plain": "The tangible thing generated by the service, e.g. a passport, permit, etc.", 
      "domains": [
        "Service"
      ], 
      "id": "produces", 
      "label": "Produces", 
      "ranges": [
        "Thing"
      ]
    }, 
    "productID": {
      "comment": "The product identifier, such as ISBN. For example: <code>&lt;meta itemprop='productID' content='isbn:123-456-789'/&gt;</code>.", 
      "comment_plain": "The product identifier, such as ISBN. For example: <meta itemprop='productID' content='isbn:123-456-789'/>.", 
      "domains": [
        "Product"
      ], 
      "id": "productID", 
      "label": "Product ID", 
      "ranges": [
        "Text"
      ]
    }, 
    "productSupported": {
      "comment": "The product or service this support contact point is related to (such as product support for a particular product line). This can be a specific product or product line (e.g. \"iPhone\") or a general category of products or services (e.g. \"smartphones\").", 
      "comment_plain": "The product or service this support contact point is related to (such as product support for a particular product line). This can be a specific product or product line (e.g. \"iPhone\") or a general category of products or services (e.g. \"smartphones\").", 
      "domains": [
        "ContactPoint"
      ], 
      "id": "productSupported", 
      "label": "Product Supported", 
      "ranges": [
        "Product", 
        "Text"
      ]
    }, 
    "productionCompany": {
      "comment": "The production company or studio that made the movie, tv/radio series, season, or episode, or media object.", 
      "comment_plain": "The production company or studio that made the movie, tv/radio series, season, or episode, or media object.", 
      "domains": [
        "Movie", 
        "MediaObject", 
        "Season", 
        "Episode", 
        "Series"
      ], 
      "id": "productionCompany", 
      "label": "Production Company", 
      "ranges": [
        "Organization"
      ]
    }, 
    "proficiencyLevel": {
      "comment": "Proficiency needed for this content; expected values: 'Beginner', 'Expert'.", 
      "comment_plain": "Proficiency needed for this content; expected values: 'Beginner', 'Expert'.", 
      "domains": [
        "TechArticle"
      ], 
      "id": "proficiencyLevel", 
      "label": "Proficiency Level", 
      "ranges": [
        "Text"
      ]
    }, 
    "programmingLanguage": {
      "comment": "The computer programming language.", 
      "comment_plain": "The computer programming language.", 
      "domains": [
        "Code"
      ], 
      "id": "programmingLanguage", 
      "label": "Programming Language", 
      "ranges": [
        "Thing"
      ]
    }, 
    "programmingModel": {
      "comment": "Indicates whether API is managed or unmanaged.", 
      "comment_plain": "Indicates whether API is managed or unmanaged.", 
      "domains": [
        "APIReference"
      ], 
      "id": "programmingModel", 
      "label": "Programming Model", 
      "ranges": [
        "Text"
      ]
    }, 
    "proprietaryName": {
      "comment": "Proprietary name given to the diet plan, typically by its originator or creator.", 
      "comment_plain": "Proprietary name given to the diet plan, typically by its originator or creator.", 
      "domains": [
        "Diet"
      ], 
      "id": "proprietaryName", 
      "label": "Proprietary Name", 
      "ranges": [
        "Text"
      ]
    }, 
    "proteinContent": {
      "comment": "The number of grams of protein.", 
      "comment_plain": "The number of grams of protein.", 
      "domains": [
        "NutritionInformation"
      ], 
      "id": "proteinContent", 
      "label": "Protein Content", 
      "ranges": [
        "Mass"
      ]
    }, 
    "provider": {
      "comment": "The organization or agency that is providing the service.", 
      "comment_plain": "The organization or agency that is providing the service.", 
      "domains": [
        "CreativeWork", 
        "Service"
      ], 
      "id": "provider", 
      "label": "Provider", 
      "ranges": [
        "Organization", 
        "Person"
      ]
    }, 
    "providesService": {
      "comment": "The service provided by this channel.", 
      "comment_plain": "The service provided by this channel.", 
      "domains": [
        "ServiceChannel"
      ], 
      "id": "providesService", 
      "label": "Provides Service", 
      "ranges": [
        "Service"
      ]
    }, 
    "publication": {
      "comment": "A publication event associated with the episode, clip or media object.", 
      "comment_plain": "A publication event associated with the episode, clip or media object.", 
      "domains": [
        "MediaObject", 
        "Episode", 
        "Clip"
      ], 
      "id": "publication", 
      "label": "Publication", 
      "ranges": [
        "PublicationEvent"
      ]
    }, 
    "publicationType": {
      "comment": "The type of the medical article, taken from the US NLM MeSH <a href=\"http://www.nlm.nih.gov/mesh/pubtypes.html\">publication type catalog.</a>", 
      "comment_plain": "The type of the medical article, taken from the US NLM MeSH publication type catalog.", 
      "domains": [
        "MedicalScholarlyArticle"
      ], 
      "id": "publicationType", 
      "label": "Publication Type", 
      "ranges": [
        "Text"
      ]
    }, 
    "publishedOn": {
      "comment": "A broadcast service associated with the publication event", 
      "comment_plain": "A broadcast service associated with the publication event", 
      "domains": [
        "PublicationEvent"
      ], 
      "id": "publishedOn", 
      "label": "Published On", 
      "ranges": [
        "BroadcastService"
      ]
    }, 
    "publisher": {
      "comment": "The publisher of the creative work.", 
      "comment_plain": "The publisher of the creative work.", 
      "domains": [
        "CreativeWork"
      ], 
      "id": "publisher", 
      "label": "Publisher", 
      "ranges": [
        "Organization"
      ]
    }, 
    "publishingPrinciples": {
      "comment": "Link to page describing the editorial principles of the organization primarily responsible for the creation of the CreativeWork.", 
      "comment_plain": "Link to page describing the editorial principles of the organization primarily responsible for the creation of the CreativeWork.", 
      "domains": [
        "CreativeWork"
      ], 
      "id": "publishingPrinciples", 
      "label": "Publishing Principles", 
      "ranges": [
        "URL"
      ]
    }, 
    "purpose": {
      "comment": "A goal towards an action is taken. Can be concrete or abstract.", 
      "comment_plain": "A goal towards an action is taken. Can be concrete or abstract.", 
      "domains": [
        "AllocateAction", 
        "MedicalDevice", 
        "PayAction"
      ], 
      "id": "purpose", 
      "label": "Purpose", 
      "ranges": [
        "Thing", 
        "MedicalDevicePurpose"
      ]
    }, 
    "qualifications": {
      "comment": "Specific qualifications required for this role.", 
      "comment_plain": "Specific qualifications required for this role.", 
      "domains": [
        "JobPosting"
      ], 
      "id": "qualifications", 
      "label": "Qualifications", 
      "ranges": [
        "Text"
      ]
    }, 
    "query": {
      "comment": "A sub property of instrument. The query used on this action.", 
      "comment_plain": "A sub property of instrument. The query used on this action.", 
      "domains": [
        "SearchAction"
      ], 
      "id": "query", 
      "label": "Query", 
      "ranges": [
        "Class", 
        "Text"
      ]
    }, 
    "question": {
      "comment": "A sub property of object. A question.", 
      "comment_plain": "A sub property of object. A question.", 
      "domains": [
        "AskAction"
      ], 
      "id": "question", 
      "label": "Question", 
      "ranges": [
        "Text"
      ]
    }, 
    "rangeIncludes": {
      "comment": "Relates a property to a class that constitutes (one of) the expected type(s) for values of the property.", 
      "comment_plain": "Relates a property to a class that constitutes (one of) the expected type(s) for values of the property.", 
      "domains": [
        "Property"
      ], 
      "id": "rangeIncludes", 
      "label": "Range Includes", 
      "ranges": [
        "Class"
      ]
    }, 
    "ratingCount": {
      "comment": "The count of total number of ratings.", 
      "comment_plain": "The count of total number of ratings.", 
      "domains": [
        "AggregateRating"
      ], 
      "id": "ratingCount", 
      "label": "Rating Count", 
      "ranges": [
        "Number"
      ]
    }, 
    "ratingValue": {
      "comment": "The rating for the content.", 
      "comment_plain": "The rating for the content.", 
      "domains": [
        "Rating"
      ], 
      "id": "ratingValue", 
      "label": "Rating Value", 
      "ranges": [
        "Text"
      ]
    }, 
    "realEstateAgent": {
      "comment": "A sub property of participant. The real estate agent involved in the action.", 
      "comment_plain": "A sub property of participant. The real estate agent involved in the action.", 
      "domains": [
        "RentAction"
      ], 
      "id": "realEstateAgent", 
      "label": "Real Estate Agent", 
      "ranges": [
        "RealEstateAgent"
      ]
    }, 
    "recipe": {
      "comment": "A sub property of instrument. The recipe/instructions used to perform the action.", 
      "comment_plain": "A sub property of instrument. The recipe/instructions used to perform the action.", 
      "domains": [
        "CookAction"
      ], 
      "id": "recipe", 
      "label": "Recipe", 
      "ranges": [
        "Recipe"
      ]
    }, 
    "recipeCategory": {
      "comment": "The category of the recipe\u2014for example, appetizer, entree, etc.", 
      "comment_plain": "The category of the recipe\u2014for example, appetizer, entree, etc.", 
      "domains": [
        "Recipe"
      ], 
      "id": "recipeCategory", 
      "label": "Recipe Category", 
      "ranges": [
        "Text"
      ]
    }, 
    "recipeCuisine": {
      "comment": "The cuisine of the recipe (for example, French or Ethopian).", 
      "comment_plain": "The cuisine of the recipe (for example, French or Ethopian).", 
      "domains": [
        "Recipe"
      ], 
      "id": "recipeCuisine", 
      "label": "Recipe Cuisine", 
      "ranges": [
        "Text"
      ]
    }, 
    "recipeInstructions": {
      "comment": "The steps to make the dish.", 
      "comment_plain": "The steps to make the dish.", 
      "domains": [
        "Recipe"
      ], 
      "id": "recipeInstructions", 
      "label": "Recipe Instructions", 
      "ranges": [
        "Text"
      ]
    }, 
    "recipeYield": {
      "comment": "The quantity produced by the recipe (for example, number of people served, number of servings, etc).", 
      "comment_plain": "The quantity produced by the recipe (for example, number of people served, number of servings, etc).", 
      "domains": [
        "Recipe"
      ], 
      "id": "recipeYield", 
      "label": "Recipe Yield", 
      "ranges": [
        "Text"
      ]
    }, 
    "recipient": {
      "comment": "A sub property of participant. The participant who is at the receiving end of the action.", 
      "comment_plain": "A sub property of participant. The participant who is at the receiving end of the action.", 
      "domains": [
        "DonateAction", 
        "ReturnAction", 
        "GiveAction", 
        "CommunicateAction", 
        "PayAction", 
        "SendAction", 
        "TipAction", 
        "AuthorizeAction"
      ], 
      "id": "recipient", 
      "label": "Recipient", 
      "ranges": [
        "Organization", 
        "Audience", 
        "Person"
      ]
    }, 
    "recognizingAuthority": {
      "comment": "If applicable, the organization that officially recognizes this entity as part of its endorsed system of medicine.", 
      "comment_plain": "If applicable, the organization that officially recognizes this entity as part of its endorsed system of medicine.", 
      "domains": [
        "MedicalEntity"
      ], 
      "id": "recognizingAuthority", 
      "label": "Recognizing Authority", 
      "ranges": [
        "Organization"
      ]
    }, 
    "recommendationStrength": {
      "comment": "Strength of the guideline's recommendation (e.g. 'class I').", 
      "comment_plain": "Strength of the guideline's recommendation (e.g. 'class I').", 
      "domains": [
        "MedicalGuidelineRecommendation"
      ], 
      "id": "recommendationStrength", 
      "label": "Recommendation Strength", 
      "ranges": [
        "Text"
      ]
    }, 
    "recommendedIntake": {
      "comment": "Recommended intake of this supplement for a given population as defined by a specific recommending authority.", 
      "comment_plain": "Recommended intake of this supplement for a given population as defined by a specific recommending authority.", 
      "domains": [
        "DietarySupplement"
      ], 
      "id": "recommendedIntake", 
      "label": "Recommended Intake", 
      "ranges": [
        "RecommendedDoseSchedule"
      ]
    }, 
    "regionDrained": {
      "comment": "The anatomical or organ system drained by this vessel; generally refers to a specific part of an organ.", 
      "comment_plain": "The anatomical or organ system drained by this vessel; generally refers to a specific part of an organ.", 
      "domains": [
        "LymphaticVessel", 
        "Vein"
      ], 
      "id": "regionDrained", 
      "label": "Region Drained", 
      "ranges": [
        "AnatomicalSystem", 
        "AnatomicalStructure"
      ]
    }, 
    "regionsAllowed": {
      "comment": "The regions where the media is allowed. If not specified, then it's assumed to be allowed everywhere. Specify the countries in <a href=\"http://en.wikipedia.org/wiki/ISO_3166\">ISO 3166 format</a>.", 
      "comment_plain": "The regions where the media is allowed. If not specified, then it's assumed to be allowed everywhere. Specify the countries in ISO 3166 format.", 
      "domains": [
        "MediaObject"
      ], 
      "id": "regionsAllowed", 
      "label": "Regions Allowed", 
      "ranges": [
        "Place"
      ]
    }, 
    "relatedAnatomy": {
      "comment": "Anatomical systems or structures that relate to the superficial anatomy.", 
      "comment_plain": "Anatomical systems or structures that relate to the superficial anatomy.", 
      "domains": [
        "SuperficialAnatomy"
      ], 
      "id": "relatedAnatomy", 
      "label": "Related Anatomy", 
      "ranges": [
        "AnatomicalStructure", 
        "AnatomicalSystem"
      ]
    }, 
    "relatedCondition": {
      "comment": "A medical condition associated with this anatomy.", 
      "comment_plain": "A medical condition associated with this anatomy.", 
      "domains": [
        "SuperficialAnatomy", 
        "AnatomicalSystem", 
        "AnatomicalStructure"
      ], 
      "id": "relatedCondition", 
      "label": "Related Condition", 
      "ranges": [
        "MedicalCondition"
      ]
    }, 
    "relatedDrug": {
      "comment": "Any other drug related to this one, for example commonly-prescribed alternatives.", 
      "comment_plain": "Any other drug related to this one, for example commonly-prescribed alternatives.", 
      "domains": [
        "Drug"
      ], 
      "id": "relatedDrug", 
      "label": "Related Drug", 
      "ranges": [
        "Drug"
      ]
    }, 
    "relatedLink": {
      "comment": "A link related to this web page, for example to other related web pages.", 
      "comment_plain": "A link related to this web page, for example to other related web pages.", 
      "domains": [
        "WebPage"
      ], 
      "id": "relatedLink", 
      "label": "Related Link", 
      "ranges": [
        "URL"
      ]
    }, 
    "relatedStructure": {
      "comment": "Related anatomical structure(s) that are not part of the system but relate or connect to it, such as vascular bundles associated with an organ system.", 
      "comment_plain": "Related anatomical structure(s) that are not part of the system but relate or connect to it, such as vascular bundles associated with an organ system.", 
      "domains": [
        "AnatomicalSystem"
      ], 
      "id": "relatedStructure", 
      "label": "Related Structure", 
      "ranges": [
        "AnatomicalStructure"
      ]
    }, 
    "relatedTherapy": {
      "comment": "A medical therapy related to this anatomy.", 
      "comment_plain": "A medical therapy related to this anatomy.", 
      "domains": [
        "SuperficialAnatomy", 
        "AnatomicalSystem", 
        "AnatomicalStructure"
      ], 
      "id": "relatedTherapy", 
      "label": "Related Therapy", 
      "ranges": [
        "MedicalTherapy"
      ]
    }, 
    "relatedTo": {
      "comment": "The most generic familial relation.", 
      "comment_plain": "The most generic familial relation.", 
      "domains": [
        "Person"
      ], 
      "id": "relatedTo", 
      "label": "Related to", 
      "ranges": [
        "Person"
      ]
    }, 
    "releaseDate": {
      "comment": "The release date of a product or product model. This can be used to distinguish the exact variant of a product.", 
      "comment_plain": "The release date of a product or product model. This can be used to distinguish the exact variant of a product.", 
      "domains": [
        "Product"
      ], 
      "id": "releaseDate", 
      "label": "Release Date", 
      "ranges": [
        "Date"
      ]
    }, 
    "releaseNotes": {
      "comment": "Description of what changed in this version.", 
      "comment_plain": "Description of what changed in this version.", 
      "domains": [
        "SoftwareApplication"
      ], 
      "id": "releaseNotes", 
      "label": "Release Notes", 
      "ranges": [
        "Text", 
        "URL"
      ]
    }, 
    "relevantSpecialty": {
      "comment": "If applicable, a medical specialty in which this entity is relevant.", 
      "comment_plain": "If applicable, a medical specialty in which this entity is relevant.", 
      "domains": [
        "MedicalEntity"
      ], 
      "id": "relevantSpecialty", 
      "label": "Relevant Specialty", 
      "ranges": [
        "MedicalSpecialty"
      ]
    }, 
    "repetitions": {
      "comment": "Number of times one should repeat the activity.", 
      "comment_plain": "Number of times one should repeat the activity.", 
      "domains": [
        "ExercisePlan"
      ], 
      "id": "repetitions", 
      "label": "Repetitions", 
      "ranges": [
        "Number"
      ]
    }, 
    "replacee": {
      "comment": "A sub property of object. The object that is being replaced.", 
      "comment_plain": "A sub property of object. The object that is being replaced.", 
      "domains": [
        "ReplaceAction"
      ], 
      "id": "replacee", 
      "label": "Replacee", 
      "ranges": [
        "Thing"
      ]
    }, 
    "replacer": {
      "comment": "A sub property of object. The object that replaces.", 
      "comment_plain": "A sub property of object. The object that replaces.", 
      "domains": [
        "ReplaceAction"
      ], 
      "id": "replacer", 
      "label": "Replacer", 
      "ranges": [
        "Thing"
      ]
    }, 
    "replyToUrl": {
      "comment": "The URL at which a reply may be posted to the specified UserComment.", 
      "comment_plain": "The URL at which a reply may be posted to the specified UserComment.", 
      "domains": [
        "UserComments"
      ], 
      "id": "replyToUrl", 
      "label": "Reply to Url", 
      "ranges": [
        "URL"
      ]
    }, 
    "representativeOfPage": {
      "comment": "Indicates whether this image is representative of the content of the page.", 
      "comment_plain": "Indicates whether this image is representative of the content of the page.", 
      "domains": [
        "ImageObject"
      ], 
      "id": "representativeOfPage", 
      "label": "Representative of Page", 
      "ranges": [
        "Boolean"
      ]
    }, 
    "requiredGender": {
      "comment": "Audiences defined by a person's gender.", 
      "comment_plain": "Audiences defined by a person's gender.", 
      "domains": [
        "PeopleAudience"
      ], 
      "id": "requiredGender", 
      "label": "Required Gender", 
      "ranges": [
        "Text"
      ]
    }, 
    "requiredMaxAge": {
      "comment": "Audiences defined by a person's maximum age.", 
      "comment_plain": "Audiences defined by a person's maximum age.", 
      "domains": [
        "PeopleAudience"
      ], 
      "id": "requiredMaxAge", 
      "label": "Required Max Age", 
      "ranges": [
        "Integer"
      ]
    }, 
    "requiredMinAge": {
      "comment": "Audiences defined by a person's minimum age.", 
      "comment_plain": "Audiences defined by a person's minimum age.", 
      "domains": [
        "PeopleAudience"
      ], 
      "id": "requiredMinAge", 
      "label": "Required Min Age", 
      "ranges": [
        "Integer"
      ]
    }, 
    "requirements": {
      "comment": "Component dependency requirements for application. This includes runtime environments and shared libraries that are not included in the application distribution package, but required to run the application (Examples: DirectX, Java or .NET runtime).", 
      "comment_plain": "Component dependency requirements for application. This includes runtime environments and shared libraries that are not included in the application distribution package, but required to run the application (Examples: DirectX, Java or .NET runtime).", 
      "domains": [
        "SoftwareApplication"
      ], 
      "id": "requirements", 
      "label": "Requirements", 
      "ranges": [
        "Text", 
        "URL"
      ]
    }, 
    "requiresSubscription": {
      "comment": "Indicates if use of the media require a subscription  (either paid or free). Allowed values are <code>true</code> or <code>false</code> (note that an earlier version had 'yes', 'no').", 
      "comment_plain": "Indicates if use of the media require a subscription  (either paid or free). Allowed values are true or false (note that an earlier version had 'yes', 'no').", 
      "domains": [
        "MediaObject"
      ], 
      "id": "requiresSubscription", 
      "label": "Requires Subscription", 
      "ranges": [
        "Boolean"
      ]
    }, 
    "responsibilities": {
      "comment": "Responsibilities associated with this role.", 
      "comment_plain": "Responsibilities associated with this role.", 
      "domains": [
        "JobPosting"
      ], 
      "id": "responsibilities", 
      "label": "Responsibilities", 
      "ranges": [
        "Text"
      ]
    }, 
    "restPeriods": {
      "comment": "How often one should break from the activity.", 
      "comment_plain": "How often one should break from the activity.", 
      "domains": [
        "ExercisePlan"
      ], 
      "id": "restPeriods", 
      "label": "Rest Periods", 
      "ranges": [
        "Text"
      ]
    }, 
    "result": {
      "comment": "The result produced in the action. e.g. John wrote *a book*.", 
      "comment_plain": "The result produced in the action. e.g. John wrote *a book*.", 
      "domains": [
        "Action"
      ], 
      "id": "result", 
      "label": "Result", 
      "ranges": [
        "Thing"
      ]
    }, 
    "resultReview": {
      "comment": "A sub property of result. The review that resulted in the performing of the action.", 
      "comment_plain": "A sub property of result. The review that resulted in the performing of the action.", 
      "domains": [
        "ReviewAction"
      ], 
      "id": "resultReview", 
      "label": "Result Review", 
      "ranges": [
        "Review"
      ]
    }, 
    "review": {
      "comment": "A review of the item.", 
      "comment_plain": "A review of the item.", 
      "domains": [
        "Organization", 
        "Product", 
        "CreativeWork", 
        "Place", 
        "Offer"
      ], 
      "id": "review", 
      "label": "Review", 
      "ranges": [
        "Review"
      ]
    }, 
    "reviewBody": {
      "comment": "The actual body of the review", 
      "comment_plain": "The actual body of the review", 
      "domains": [
        "Review"
      ], 
      "id": "reviewBody", 
      "label": "Review Body", 
      "ranges": [
        "Text"
      ]
    }, 
    "reviewCount": {
      "comment": "The count of total number of reviews.", 
      "comment_plain": "The count of total number of reviews.", 
      "domains": [
        "AggregateRating"
      ], 
      "id": "reviewCount", 
      "label": "Review Count", 
      "ranges": [
        "Number"
      ]
    }, 
    "reviewRating": {
      "comment": "The rating given in this review. Note that reviews can themselves be rated. The <code>reviewRating</code> applies to rating given by the review. The <code>aggregateRating</code> property applies to the review itself, as a creative work.", 
      "comment_plain": "The rating given in this review. Note that reviews can themselves be rated. The reviewRating applies to rating given by the review. The aggregateRating property applies to the review itself, as a creative work.", 
      "domains": [
        "Review"
      ], 
      "id": "reviewRating", 
      "label": "Review Rating", 
      "ranges": [
        "Rating"
      ]
    }, 
    "reviewedBy": {
      "comment": "People or organizations that have reviewed the content on this web page for accuracy and/or completeness.", 
      "comment_plain": "People or organizations that have reviewed the content on this web page for accuracy and/or completeness.", 
      "domains": [
        "WebPage"
      ], 
      "id": "reviewedBy", 
      "label": "Reviewed by", 
      "ranges": [
        "Organization", 
        "Person"
      ]
    }, 
    "reviews": {
      "comment": "Review of the item (legacy spelling; see singular form, review).", 
      "comment_plain": "Review of the item (legacy spelling; see singular form, review).", 
      "domains": [
        "Organization", 
        "Product", 
        "CreativeWork", 
        "Place", 
        "Offer"
      ], 
      "id": "reviews", 
      "label": "Reviews", 
      "ranges": [
        "Review"
      ]
    }, 
    "riskFactor": {
      "comment": "A modifiable or non-modifiable factor that increases the risk of a patient contracting this condition, e.g. age,  coexisting condition.", 
      "comment_plain": "A modifiable or non-modifiable factor that increases the risk of a patient contracting this condition, e.g. age,  coexisting condition.", 
      "domains": [
        "MedicalCondition"
      ], 
      "id": "riskFactor", 
      "label": "Risk Factor", 
      "ranges": [
        "MedicalRiskFactor"
      ]
    }, 
    "risks": {
      "comment": "Specific physiologic risks associated to the plan.", 
      "comment_plain": "Specific physiologic risks associated to the plan.", 
      "domains": [
        "Diet"
      ], 
      "id": "risks", 
      "label": "Risks", 
      "ranges": [
        "Text"
      ]
    }, 
    "runsTo": {
      "comment": "The vasculature the lymphatic structure runs, or efferents, to.", 
      "comment_plain": "The vasculature the lymphatic structure runs, or efferents, to.", 
      "domains": [
        "LymphaticVessel"
      ], 
      "id": "runsTo", 
      "label": "Runs to", 
      "ranges": [
        "Vessel"
      ]
    }, 
    "runtime": {
      "comment": "Runtime platform or script interpreter dependencies (Example - Java v1, Python2.3, .Net Framework 3.0)", 
      "comment_plain": "Runtime platform or script interpreter dependencies (Example - Java v1, Python2.3, .Net Framework 3.0)", 
      "domains": [
        "Code"
      ], 
      "id": "runtime", 
      "label": "Runtime", 
      "ranges": [
        "Text"
      ]
    }, 
    "safetyConsideration": {
      "comment": "Any potential safety concern associated with the supplement. May include interactions with other drugs and foods, pregnancy, breastfeeding, known adverse reactions, and documented efficacy of the supplement.", 
      "comment_plain": "Any potential safety concern associated with the supplement. May include interactions with other drugs and foods, pregnancy, breastfeeding, known adverse reactions, and documented efficacy of the supplement.", 
      "domains": [
        "DietarySupplement"
      ], 
      "id": "safetyConsideration", 
      "label": "Safety Consideration", 
      "ranges": [
        "Text"
      ]
    }, 
    "salaryCurrency": {
      "comment": "The currency (coded using ISO 4217, http://en.wikipedia.org/wiki/ISO_4217 used for the main salary information in this job posting.", 
      "comment_plain": "The currency (coded using ISO 4217, http://en.wikipedia.org/wiki/ISO_4217 used for the main salary information in this job posting.", 
      "domains": [
        "JobPosting"
      ], 
      "id": "salaryCurrency", 
      "label": "Salary Currency", 
      "ranges": [
        "Text"
      ]
    }, 
    "sameAs": {
      "comment": "URL of a reference Web page that unambiguously indicates the item's identity. E.g. the URL of the item's Wikipedia page, Freebase page, or official website.", 
      "comment_plain": "URL of a reference Web page that unambiguously indicates the item's identity. E.g. the URL of the item's Wikipedia page, Freebase page, or official website.", 
      "domains": [
        "Thing"
      ], 
      "id": "sameAs", 
      "label": "Same As", 
      "ranges": [
        "URL"
      ]
    }, 
    "sampleType": {
      "comment": "Full (compile ready) solution, code snippet, inline code, scripts, template.", 
      "comment_plain": "Full (compile ready) solution, code snippet, inline code, scripts, template.", 
      "domains": [
        "Code"
      ], 
      "id": "sampleType", 
      "label": "Sample Type", 
      "ranges": [
        "Text"
      ]
    }, 
    "saturatedFatContent": {
      "comment": "The number of grams of saturated fat.", 
      "comment_plain": "The number of grams of saturated fat.", 
      "domains": [
        "NutritionInformation"
      ], 
      "id": "saturatedFatContent", 
      "label": "Saturated Fat Content", 
      "ranges": [
        "Mass"
      ]
    }, 
    "scheduledTime": {
      "comment": "The time the object is scheduled to.", 
      "comment_plain": "The time the object is scheduled to.", 
      "domains": [
        "PlanAction"
      ], 
      "id": "scheduledTime", 
      "label": "Scheduled Time", 
      "ranges": [
        "DateTime"
      ]
    }, 
    "screenshot": {
      "comment": "A link to a screenshot image of the app.", 
      "comment_plain": "A link to a screenshot image of the app.", 
      "domains": [
        "SoftwareApplication"
      ], 
      "id": "screenshot", 
      "label": "Screenshot", 
      "ranges": [
        "ImageObject", 
        "URL"
      ]
    }, 
    "season": {
      "comment": "A season in a tv/radio series.", 
      "comment_plain": "A season in a tv/radio series.", 
      "domains": [
        "Series"
      ], 
      "id": "season", 
      "label": "Season", 
      "ranges": [
        "Season"
      ]
    }, 
    "seasonNumber": {
      "comment": "Position of the season within an ordered group of seasons.", 
      "comment_plain": "Position of the season within an ordered group of seasons.", 
      "domains": [
        "Season"
      ], 
      "id": "seasonNumber", 
      "label": "Season Number", 
      "ranges": [
        "Integer"
      ]
    }, 
    "seasons": {
      "comment": "A season in a tv/radio series. (legacy spelling; see singular form, season)", 
      "comment_plain": "A season in a tv/radio series. (legacy spelling; see singular form, season)", 
      "domains": [
        "Series"
      ], 
      "id": "seasons", 
      "label": "Seasons", 
      "ranges": [
        "Season"
      ]
    }, 
    "secondaryPrevention": {
      "comment": "A preventative therapy used to prevent reoccurrence of the medical condition after an initial episode of the condition.", 
      "comment_plain": "A preventative therapy used to prevent reoccurrence of the medical condition after an initial episode of the condition.", 
      "domains": [
        "MedicalCondition"
      ], 
      "id": "secondaryPrevention", 
      "label": "Secondary Prevention", 
      "ranges": [
        "MedicalTherapy"
      ]
    }, 
    "seeks": {
      "comment": "A pointer to products or services sought by the organization or person (demand).", 
      "comment_plain": "A pointer to products or services sought by the organization or person (demand).", 
      "domains": [
        "Person", 
        "Organization"
      ], 
      "id": "seeks", 
      "label": "Seeks", 
      "ranges": [
        "Demand"
      ]
    }, 
    "seller": {
      "comment": "The organization or person making the offer.", 
      "comment_plain": "The organization or person making the offer.", 
      "domains": [
        "Offer", 
        "Demand"
      ], 
      "id": "seller", 
      "label": "Seller", 
      "ranges": [
        "Organization", 
        "Person"
      ]
    }, 
    "sender": {
      "comment": "A sub property of participant. The participant who is at the sending end of the action.", 
      "comment_plain": "A sub property of participant. The participant who is at the sending end of the action.", 
      "domains": [
        "ReceiveAction"
      ], 
      "id": "sender", 
      "label": "Sender", 
      "ranges": [
        "Audience", 
        "Organization", 
        "Person"
      ]
    }, 
    "sensoryUnit": {
      "comment": "The neurological pathway extension that inputs and sends information to the brain or spinal cord.", 
      "comment_plain": "The neurological pathway extension that inputs and sends information to the brain or spinal cord.", 
      "domains": [
        "Nerve"
      ], 
      "id": "sensoryUnit", 
      "label": "Sensory Unit", 
      "ranges": [
        "AnatomicalStructure", 
        "SuperficialAnatomy"
      ]
    }, 
    "serialNumber": {
      "comment": "The serial number or any alphanumeric identifier of a particular product. When attached to an offer, it is a shortcut for the serial number of the product included in the offer.", 
      "comment_plain": "The serial number or any alphanumeric identifier of a particular product. When attached to an offer, it is a shortcut for the serial number of the product included in the offer.", 
      "domains": [
        "Demand", 
        "IndividualProduct", 
        "Offer"
      ], 
      "id": "serialNumber", 
      "label": "Serial Number", 
      "ranges": [
        "Text"
      ]
    }, 
    "seriousAdverseOutcome": {
      "comment": "A possible serious complication and/or serious side effect of this therapy. Serious adverse outcomes include those that are life-threatening; result in death, disability, or permanent damage; require hospitalization or prolong existing hospitalization; cause congenital anomalies or birth defects; or jeopardize the patient and may require medical or surgical intervention to prevent one of the outcomes in this definition.", 
      "comment_plain": "A possible serious complication and/or serious side effect of this therapy. Serious adverse outcomes include those that are life-threatening; result in death, disability, or permanent damage; require hospitalization or prolong existing hospitalization; cause congenital anomalies or birth defects; or jeopardize the patient and may require medical or surgical intervention to prevent one of the outcomes in this definition.", 
      "domains": [
        "MedicalDevice", 
        "MedicalTherapy"
      ], 
      "id": "seriousAdverseOutcome", 
      "label": "Serious Adverse Outcome", 
      "ranges": [
        "MedicalEntity"
      ]
    }, 
    "servesCuisine": {
      "comment": "The cuisine of the restaurant.", 
      "comment_plain": "The cuisine of the restaurant.", 
      "domains": [
        "FoodEstablishment"
      ], 
      "id": "servesCuisine", 
      "label": "Serves Cuisine", 
      "ranges": [
        "Text"
      ]
    }, 
    "serviceArea": {
      "comment": "The geographic area where the service is provided.", 
      "comment_plain": "The geographic area where the service is provided.", 
      "domains": [
        "Service"
      ], 
      "id": "serviceArea", 
      "label": "Service Area", 
      "ranges": [
        "AdministrativeArea"
      ]
    }, 
    "serviceAudience": {
      "comment": "The audience eligible for this service.", 
      "comment_plain": "The audience eligible for this service.", 
      "domains": [
        "Service"
      ], 
      "id": "serviceAudience", 
      "label": "Service Audience", 
      "ranges": [
        "Audience"
      ]
    }, 
    "serviceLocation": {
      "comment": "The location (e.g. civic structure, local business, etc.) where a person can go to access the service.", 
      "comment_plain": "The location (e.g. civic structure, local business, etc.) where a person can go to access the service.", 
      "domains": [
        "ServiceChannel"
      ], 
      "id": "serviceLocation", 
      "label": "Service Location", 
      "ranges": [
        "Place"
      ]
    }, 
    "serviceOperator": {
      "comment": "The operating organization, if different from the provider.  This enables the representation of services that are provided by an organization, but operated by another organization like a subcontractor.", 
      "comment_plain": "The operating organization, if different from the provider.  This enables the representation of services that are provided by an organization, but operated by another organization like a subcontractor.", 
      "domains": [
        "GovernmentService"
      ], 
      "id": "serviceOperator", 
      "label": "Service Operator", 
      "ranges": [
        "Organization"
      ]
    }, 
    "servicePhone": {
      "comment": "The phone number to use to access the service.", 
      "comment_plain": "The phone number to use to access the service.", 
      "domains": [
        "ServiceChannel"
      ], 
      "id": "servicePhone", 
      "label": "Service Phone", 
      "ranges": [
        "ContactPoint"
      ]
    }, 
    "servicePostalAddress": {
      "comment": "The address for accessing the service by mail.", 
      "comment_plain": "The address for accessing the service by mail.", 
      "domains": [
        "ServiceChannel"
      ], 
      "id": "servicePostalAddress", 
      "label": "Service Postal Address", 
      "ranges": [
        "PostalAddress"
      ]
    }, 
    "serviceSmsNumber": {
      "comment": "The number to access the service by text message.", 
      "comment_plain": "The number to access the service by text message.", 
      "domains": [
        "ServiceChannel"
      ], 
      "id": "serviceSmsNumber", 
      "label": "Service Sms Number", 
      "ranges": [
        "ContactPoint"
      ]
    }, 
    "serviceType": {
      "comment": "The type of service being offered, e.g. veterans' benefits, emergency relief, etc.", 
      "comment_plain": "The type of service being offered, e.g. veterans' benefits, emergency relief, etc.", 
      "domains": [
        "Service"
      ], 
      "id": "serviceType", 
      "label": "Service Type", 
      "ranges": [
        "Text"
      ]
    }, 
    "serviceUrl": {
      "comment": "The website to access the service.", 
      "comment_plain": "The website to access the service.", 
      "domains": [
        "ServiceChannel"
      ], 
      "id": "serviceUrl", 
      "label": "Service Url", 
      "ranges": [
        "URL"
      ]
    }, 
    "servingSize": {
      "comment": "The serving size, in terms of the number of volume or mass", 
      "comment_plain": "The serving size, in terms of the number of volume or mass", 
      "domains": [
        "NutritionInformation"
      ], 
      "id": "servingSize", 
      "label": "Serving Size", 
      "ranges": [
        "Text"
      ]
    }, 
    "sibling": {
      "comment": "A sibling of the person.", 
      "comment_plain": "A sibling of the person.", 
      "domains": [
        "Person"
      ], 
      "id": "sibling", 
      "label": "Sibling", 
      "ranges": [
        "Person"
      ]
    }, 
    "siblings": {
      "comment": "A sibling of the person (legacy spelling; see singular form, sibling).", 
      "comment_plain": "A sibling of the person (legacy spelling; see singular form, sibling).", 
      "domains": [
        "Person"
      ], 
      "id": "siblings", 
      "label": "Siblings", 
      "ranges": [
        "Person"
      ]
    }, 
    "signDetected": {
      "comment": "A sign detected by the test.", 
      "comment_plain": "A sign detected by the test.", 
      "domains": [
        "MedicalTest"
      ], 
      "id": "signDetected", 
      "label": "Sign Detected", 
      "ranges": [
        "MedicalSign"
      ]
    }, 
    "signOrSymptom": {
      "comment": "A sign or symptom of this condition. Signs are objective or physically observable manifestations of the medical condition while symptoms are the subjective experienceof the medical condition.", 
      "comment_plain": "A sign or symptom of this condition. Signs are objective or physically observable manifestations of the medical condition while symptoms are the subjective experienceof the medical condition.", 
      "domains": [
        "MedicalCondition"
      ], 
      "id": "signOrSymptom", 
      "label": "Sign or Symptom", 
      "ranges": [
        "MedicalSignOrSymptom"
      ]
    }, 
    "significance": {
      "comment": "The significance associated with the superficial anatomy; as an example, how characteristics of the superficial anatomy can suggest underlying medical conditions or courses of treatment.", 
      "comment_plain": "The significance associated with the superficial anatomy; as an example, how characteristics of the superficial anatomy can suggest underlying medical conditions or courses of treatment.", 
      "domains": [
        "SuperficialAnatomy"
      ], 
      "id": "significance", 
      "label": "Significance", 
      "ranges": [
        "Text"
      ]
    }, 
    "significantLink": {
      "comment": "One of the more significant URLs on the page. Typically, these are the non-navigation links that are clicked on the most.", 
      "comment_plain": "One of the more significant URLs on the page. Typically, these are the non-navigation links that are clicked on the most.", 
      "domains": [
        "WebPage"
      ], 
      "id": "significantLink", 
      "label": "Significant Link", 
      "ranges": [
        "URL"
      ]
    }, 
    "significantLinks": {
      "comment": "The most significant URLs on the page. Typically, these are the non-navigation links that are clicked on the most (legacy spelling; see singular form, significantLink).", 
      "comment_plain": "The most significant URLs on the page. Typically, these are the non-navigation links that are clicked on the most (legacy spelling; see singular form, significantLink).", 
      "domains": [
        "WebPage"
      ], 
      "id": "significantLinks", 
      "label": "Significant Links", 
      "ranges": [
        "URL"
      ]
    }, 
    "skills": {
      "comment": "Skills required to fulfill this role.", 
      "comment_plain": "Skills required to fulfill this role.", 
      "domains": [
        "JobPosting"
      ], 
      "id": "skills", 
      "label": "Skills", 
      "ranges": [
        "Text"
      ]
    }, 
    "sku": {
      "comment": "The Stock Keeping Unit (SKU), i.e. a merchant-specific identifier for a product or service, or the product to which the offer refers.", 
      "comment_plain": "The Stock Keeping Unit (SKU), i.e. a merchant-specific identifier for a product or service, or the product to which the offer refers.", 
      "domains": [
        "Product", 
        "Offer", 
        "Demand"
      ], 
      "id": "sku", 
      "label": "Sku", 
      "ranges": [
        "Text"
      ]
    }, 
    "sodiumContent": {
      "comment": "The number of milligrams of sodium.", 
      "comment_plain": "The number of milligrams of sodium.", 
      "domains": [
        "NutritionInformation"
      ], 
      "id": "sodiumContent", 
      "label": "Sodium Content", 
      "ranges": [
        "Mass"
      ]
    }, 
    "softwareVersion": {
      "comment": "Version of the software instance.", 
      "comment_plain": "Version of the software instance.", 
      "domains": [
        "SoftwareApplication"
      ], 
      "id": "softwareVersion", 
      "label": "Software Version", 
      "ranges": [
        "Text"
      ]
    }, 
    "source": {
      "comment": "The anatomical or organ system that the artery originates from.", 
      "comment_plain": "The anatomical or organ system that the artery originates from.", 
      "domains": [
        "Artery"
      ], 
      "id": "source", 
      "label": "Source", 
      "ranges": [
        "AnatomicalStructure"
      ]
    }, 
    "sourceOrganization": {
      "comment": "The Organization on whose behalf the creator was working.", 
      "comment_plain": "The Organization on whose behalf the creator was working.", 
      "domains": [
        "CreativeWork"
      ], 
      "id": "sourceOrganization", 
      "label": "Source Organization", 
      "ranges": [
        "Organization"
      ]
    }, 
    "sourcedFrom": {
      "comment": "The neurological pathway that originates the neurons.", 
      "comment_plain": "The neurological pathway that originates the neurons.", 
      "domains": [
        "Nerve"
      ], 
      "id": "sourcedFrom", 
      "label": "Sourced From", 
      "ranges": [
        "BrainStructure"
      ]
    }, 
    "spatial": {
      "comment": "The range of spatial applicability of a dataset, e.g. for a dataset of New York weather, the state of New York.", 
      "comment_plain": "The range of spatial applicability of a dataset, e.g. for a dataset of New York weather, the state of New York.", 
      "domains": [
        "Dataset"
      ], 
      "id": "spatial", 
      "label": "Spatial", 
      "ranges": [
        "Place"
      ]
    }, 
    "specialCommitments": {
      "comment": "Any special commitments associated with this job posting. Valid entries include VeteranCommit, MilitarySpouseCommit, etc.", 
      "comment_plain": "Any special commitments associated with this job posting. Valid entries include VeteranCommit, MilitarySpouseCommit, etc.", 
      "domains": [
        "JobPosting"
      ], 
      "id": "specialCommitments", 
      "label": "Special Commitments", 
      "ranges": [
        "Text"
      ]
    }, 
    "specialty": {
      "comment": "One of the domain specialities to which this web page's content applies.", 
      "comment_plain": "One of the domain specialities to which this web page's content applies.", 
      "domains": [
        "WebPage"
      ], 
      "id": "specialty", 
      "label": "Specialty", 
      "ranges": [
        "Specialty"
      ]
    }, 
    "sponsor": {
      "comment": "Sponsor of the study.", 
      "comment_plain": "Sponsor of the study.", 
      "domains": [
        "MedicalStudy"
      ], 
      "id": "sponsor", 
      "label": "Sponsor", 
      "ranges": [
        "Organization"
      ]
    }, 
    "sportsActivityLocation": {
      "comment": "A sub property of location. The sports activity location where this action occurred.", 
      "comment_plain": "A sub property of location. The sports activity location where this action occurred.", 
      "domains": [
        "ExerciseAction"
      ], 
      "id": "sportsActivityLocation", 
      "label": "Sports Activity Location", 
      "ranges": [
        "SportsActivityLocation"
      ]
    }, 
    "sportsEvent": {
      "comment": "A sub property of location. The sports event where this action occurred.", 
      "comment_plain": "A sub property of location. The sports event where this action occurred.", 
      "domains": [
        "ExerciseAction"
      ], 
      "id": "sportsEvent", 
      "label": "Sports Event", 
      "ranges": [
        "SportsEvent"
      ]
    }, 
    "sportsTeam": {
      "comment": "A sub property of participant. The sports team that participated on this action.", 
      "comment_plain": "A sub property of participant. The sports team that participated on this action.", 
      "domains": [
        "ExerciseAction"
      ], 
      "id": "sportsTeam", 
      "label": "Sports Team", 
      "ranges": [
        "SportsTeam"
      ]
    }, 
    "spouse": {
      "comment": "The person's spouse.", 
      "comment_plain": "The person's spouse.", 
      "domains": [
        "Person"
      ], 
      "id": "spouse", 
      "label": "Spouse", 
      "ranges": [
        "Person"
      ]
    }, 
    "stage": {
      "comment": "The stage of the condition, if applicable.", 
      "comment_plain": "The stage of the condition, if applicable.", 
      "domains": [
        "MedicalCondition"
      ], 
      "id": "stage", 
      "label": "Stage", 
      "ranges": [
        "MedicalConditionStage"
      ]
    }, 
    "stageAsNumber": {
      "comment": "The stage represented as a number, e.g. 3.", 
      "comment_plain": "The stage represented as a number, e.g. 3.", 
      "domains": [
        "MedicalConditionStage"
      ], 
      "id": "stageAsNumber", 
      "label": "Stage As Number", 
      "ranges": [
        "Number"
      ]
    }, 
    "startDate": {
      "comment": "The start date and time of the event or item (in <a href=\"http://en.wikipedia.org/wiki/ISO_8601\">ISO 8601 date format</a>).", 
      "comment_plain": "The start date and time of the event or item (in ISO 8601 date format).", 
      "domains": [
        "Series", 
        "Event", 
        "Season"
      ], 
      "id": "startDate", 
      "label": "Start Date", 
      "ranges": [
        "Date"
      ]
    }, 
    "startTime": {
      "comment": "When the Action was performed: start time. This is for actions that span a period of time. e.g. John wrote a book from *January* to December.", 
      "comment_plain": "When the Action was performed: start time. This is for actions that span a period of time. e.g. John wrote a book from *January* to December.", 
      "domains": [
        "Action"
      ], 
      "id": "startTime", 
      "label": "Start Time", 
      "ranges": [
        "DateTime"
      ]
    }, 
    "status": {
      "comment": "The status of the study (enumerated).", 
      "comment_plain": "The status of the study (enumerated).", 
      "domains": [
        "MedicalStudy"
      ], 
      "id": "status", 
      "label": "Status", 
      "ranges": [
        "MedicalStudyStatus"
      ]
    }, 
    "storageRequirements": {
      "comment": "Storage requirements (free space required).", 
      "comment_plain": "Storage requirements (free space required).", 
      "domains": [
        "SoftwareApplication"
      ], 
      "id": "storageRequirements", 
      "label": "Storage Requirements", 
      "ranges": [
        "Text", 
        "URL"
      ]
    }, 
    "streetAddress": {
      "comment": "The street address. For example, 1600 Amphitheatre Pkwy.", 
      "comment_plain": "The street address. For example, 1600 Amphitheatre Pkwy.", 
      "domains": [
        "PostalAddress"
      ], 
      "id": "streetAddress", 
      "label": "Street Address", 
      "ranges": [
        "Text"
      ]
    }, 
    "strengthUnit": {
      "comment": "The units of an active ingredient's strength, e.g. mg.", 
      "comment_plain": "The units of an active ingredient's strength, e.g. mg.", 
      "domains": [
        "DrugStrength"
      ], 
      "id": "strengthUnit", 
      "label": "Strength Unit", 
      "ranges": [
        "Text"
      ]
    }, 
    "strengthValue": {
      "comment": "The value of an active ingredient's strength, e.g. 325.", 
      "comment_plain": "The value of an active ingredient's strength, e.g. 325.", 
      "domains": [
        "DrugStrength"
      ], 
      "id": "strengthValue", 
      "label": "Strength Value", 
      "ranges": [
        "Number"
      ]
    }, 
    "structuralClass": {
      "comment": "The name given to how bone physically connects to each other.", 
      "comment_plain": "The name given to how bone physically connects to each other.", 
      "domains": [
        "Joint"
      ], 
      "id": "structuralClass", 
      "label": "Structural Class", 
      "ranges": [
        "Text"
      ]
    }, 
    "study": {
      "comment": "A medical study or trial related to this entity.", 
      "comment_plain": "A medical study or trial related to this entity.", 
      "domains": [
        "MedicalEntity"
      ], 
      "id": "study", 
      "label": "Study", 
      "ranges": [
        "MedicalStudy"
      ]
    }, 
    "studyDesign": {
      "comment": "Specifics about the observational study design (enumerated).", 
      "comment_plain": "Specifics about the observational study design (enumerated).", 
      "domains": [
        "MedicalObservationalStudy"
      ], 
      "id": "studyDesign", 
      "label": "Study Design", 
      "ranges": [
        "MedicalObservationalStudyDesign"
      ]
    }, 
    "studyLocation": {
      "comment": "The location in which the study is taking/took place.", 
      "comment_plain": "The location in which the study is taking/took place.", 
      "domains": [
        "MedicalStudy"
      ], 
      "id": "studyLocation", 
      "label": "Study Location", 
      "ranges": [
        "AdministrativeArea"
      ]
    }, 
    "studySubject": {
      "comment": "A subject of the study, i.e. one of the medical conditions, therapies, devices, drugs, etc. investigated by the study.", 
      "comment_plain": "A subject of the study, i.e. one of the medical conditions, therapies, devices, drugs, etc. investigated by the study.", 
      "domains": [
        "MedicalStudy"
      ], 
      "id": "studySubject", 
      "label": "Study Subject", 
      "ranges": [
        "MedicalEntity"
      ]
    }, 
    "subEvent": {
      "comment": "An Event that is part of this event. For example, a conference event includes many presentations, each are a subEvent of the conference.", 
      "comment_plain": "An Event that is part of this event. For example, a conference event includes many presentations, each are a subEvent of the conference.", 
      "domains": [
        "Event"
      ], 
      "id": "subEvent", 
      "label": "Sub Event", 
      "ranges": [
        "Event"
      ]
    }, 
    "subEvents": {
      "comment": "Events that are a part of this event. For example, a conference event includes many presentations, each are subEvents of the conference (legacy spelling; see singular form, subEvent).", 
      "comment_plain": "Events that are a part of this event. For example, a conference event includes many presentations, each are subEvents of the conference (legacy spelling; see singular form, subEvent).", 
      "domains": [
        "Event"
      ], 
      "id": "subEvents", 
      "label": "Sub Events", 
      "ranges": [
        "Event"
      ]
    }, 
    "subOrganization": {
      "comment": "A relationship between two organizations where the first includes the second, e.g., as a subsidiary. See also: the more specific 'department' property.", 
      "comment_plain": "A relationship between two organizations where the first includes the second, e.g., as a subsidiary. See also: the more specific 'department' property.", 
      "domains": [
        "Organization"
      ], 
      "id": "subOrganization", 
      "label": "Sub Organization", 
      "ranges": [
        "Organization"
      ]
    }, 
    "subStageSuffix": {
      "comment": "The substage, e.g. 'a' for Stage IIIa.", 
      "comment_plain": "The substage, e.g. 'a' for Stage IIIa.", 
      "domains": [
        "MedicalConditionStage"
      ], 
      "id": "subStageSuffix", 
      "label": "Sub Stage Suffix", 
      "ranges": [
        "Text"
      ]
    }, 
    "subStructure": {
      "comment": "Component (sub-)structure(s) that comprise this anatomical structure.", 
      "comment_plain": "Component (sub-)structure(s) that comprise this anatomical structure.", 
      "domains": [
        "AnatomicalStructure"
      ], 
      "id": "subStructure", 
      "label": "Sub Structure", 
      "ranges": [
        "AnatomicalStructure"
      ]
    }, 
    "subTest": {
      "comment": "A component test of the panel.", 
      "comment_plain": "A component test of the panel.", 
      "domains": [
        "MedicalTestPanel"
      ], 
      "id": "subTest", 
      "label": "Sub Test", 
      "ranges": [
        "MedicalTest"
      ]
    }, 
    "subtype": {
      "comment": "A more specific type of the condition, where applicable, for example 'Type 1 Diabetes', 'Type 2 Diabetes', or 'Gestational Diabetes' for Diabetes.", 
      "comment_plain": "A more specific type of the condition, where applicable, for example 'Type 1 Diabetes', 'Type 2 Diabetes', or 'Gestational Diabetes' for Diabetes.", 
      "domains": [
        "MedicalCondition"
      ], 
      "id": "subtype", 
      "label": "Subtype", 
      "ranges": [
        "Text"
      ]
    }, 
    "successorOf": {
      "comment": "A pointer from a newer variant of a product  to its previous, often discontinued predecessor.", 
      "comment_plain": "A pointer from a newer variant of a product  to its previous, often discontinued predecessor.", 
      "domains": [
        "ProductModel"
      ], 
      "id": "successorOf", 
      "label": "Successor of", 
      "ranges": [
        "ProductModel"
      ]
    }, 
    "sugarContent": {
      "comment": "The number of grams of sugar.", 
      "comment_plain": "The number of grams of sugar.", 
      "domains": [
        "NutritionInformation"
      ], 
      "id": "sugarContent", 
      "label": "Sugar Content", 
      "ranges": [
        "Mass"
      ]
    }, 
    "suggestedGender": {
      "comment": "The gender of the person or audience.", 
      "comment_plain": "The gender of the person or audience.", 
      "domains": [
        "PeopleAudience"
      ], 
      "id": "suggestedGender", 
      "label": "Suggested Gender", 
      "ranges": [
        "Text"
      ]
    }, 
    "suggestedMaxAge": {
      "comment": "Maximal age recommended for viewing content", 
      "comment_plain": "Maximal age recommended for viewing content", 
      "domains": [
        "PeopleAudience"
      ], 
      "id": "suggestedMaxAge", 
      "label": "Suggested Max Age", 
      "ranges": [
        "Number"
      ]
    }, 
    "suggestedMinAge": {
      "comment": "Minimal age recommended for viewing content", 
      "comment_plain": "Minimal age recommended for viewing content", 
      "domains": [
        "PeopleAudience"
      ], 
      "id": "suggestedMinAge", 
      "label": "Suggested Min Age", 
      "ranges": [
        "Number"
      ]
    }, 
    "superEvent": {
      "comment": "An event that this event is a part of. For example, a collection of individual music performances might each have a music festival as their superEvent.", 
      "comment_plain": "An event that this event is a part of. For example, a collection of individual music performances might each have a music festival as their superEvent.", 
      "domains": [
        "Event"
      ], 
      "id": "superEvent", 
      "label": "Super Event", 
      "ranges": [
        "Event"
      ]
    }, 
    "supplyTo": {
      "comment": "The area to which the artery supplies blood to.", 
      "comment_plain": "The area to which the artery supplies blood to.", 
      "domains": [
        "Artery"
      ], 
      "id": "supplyTo", 
      "label": "Supply to", 
      "ranges": [
        "AnatomicalStructure"
      ]
    }, 
    "targetDescription": {
      "comment": "The description of a node in an established educational framework.", 
      "comment_plain": "The description of a node in an established educational framework.", 
      "domains": [
        "AlignmentObject"
      ], 
      "id": "targetDescription", 
      "label": "Target Description", 
      "ranges": [
        "Text"
      ]
    }, 
    "targetName": {
      "comment": "The name of a node in an established educational framework.", 
      "comment_plain": "The name of a node in an established educational framework.", 
      "domains": [
        "AlignmentObject"
      ], 
      "id": "targetName", 
      "label": "Target Name", 
      "ranges": [
        "Text"
      ]
    }, 
    "targetPlatform": {
      "comment": "Type of app development: phone, Metro style, desktop, XBox, etc.", 
      "comment_plain": "Type of app development: phone, Metro style, desktop, XBox, etc.", 
      "domains": [
        "APIReference"
      ], 
      "id": "targetPlatform", 
      "label": "Target Platform", 
      "ranges": [
        "Text"
      ]
    }, 
    "targetPopulation": {
      "comment": "Characteristics of the population for which this is intended, or which typically uses it, e.g. 'adults'.", 
      "comment_plain": "Characteristics of the population for which this is intended, or which typically uses it, e.g. 'adults'.", 
      "domains": [
        "DietarySupplement", 
        "DoseSchedule"
      ], 
      "id": "targetPopulation", 
      "label": "Target Population", 
      "ranges": [
        "Text"
      ]
    }, 
    "targetProduct": {
      "comment": "Target Operating System / Product to which the code applies.  If applies to several versions, just the product name can be used.", 
      "comment_plain": "Target Operating System / Product to which the code applies.  If applies to several versions, just the product name can be used.", 
      "domains": [
        "Code"
      ], 
      "id": "targetProduct", 
      "label": "Target Product", 
      "ranges": [
        "SoftwareApplication"
      ]
    }, 
    "targetUrl": {
      "comment": "The URL of a node in an established educational framework.", 
      "comment_plain": "The URL of a node in an established educational framework.", 
      "domains": [
        "AlignmentObject"
      ], 
      "id": "targetUrl", 
      "label": "Target Url", 
      "ranges": [
        "URL"
      ]
    }, 
    "taxID": {
      "comment": "The Tax / Fiscal ID of the organization or person, e.g. the TIN in the US or the CIF/NIF in Spain.", 
      "comment_plain": "The Tax / Fiscal ID of the organization or person, e.g. the TIN in the US or the CIF/NIF in Spain.", 
      "domains": [
        "Person", 
        "Organization"
      ], 
      "id": "taxID", 
      "label": "Tax ID", 
      "ranges": [
        "Text"
      ]
    }, 
    "telephone": {
      "comment": "The telephone number.", 
      "comment_plain": "The telephone number.", 
      "domains": [
        "Person", 
        "ContactPoint", 
        "Place", 
        "Organization"
      ], 
      "id": "telephone", 
      "label": "Telephone", 
      "ranges": [
        "Text"
      ]
    }, 
    "temporal": {
      "comment": "The range of temporal applicability of a dataset, e.g. for a 2011 census dataset, the year 2011 (in ISO 8601 time interval format).", 
      "comment_plain": "The range of temporal applicability of a dataset, e.g. for a 2011 census dataset, the year 2011 (in ISO 8601 time interval format).", 
      "domains": [
        "Dataset"
      ], 
      "id": "temporal", 
      "label": "Temporal", 
      "ranges": [
        "DateTime"
      ]
    }, 
    "text": {
      "comment": "The textual content of this CreativeWork.", 
      "comment_plain": "The textual content of this CreativeWork.", 
      "domains": [
        "CreativeWork"
      ], 
      "id": "text", 
      "label": "Text", 
      "ranges": [
        "Text"
      ]
    }, 
    "thumbnail": {
      "comment": "Thumbnail image for an image or video.", 
      "comment_plain": "Thumbnail image for an image or video.", 
      "domains": [
        "VideoObject", 
        "ImageObject"
      ], 
      "id": "thumbnail", 
      "label": "Thumbnail", 
      "ranges": [
        "ImageObject"
      ]
    }, 
    "thumbnailUrl": {
      "comment": "A thumbnail image relevant to the Thing.", 
      "comment_plain": "A thumbnail image relevant to the Thing.", 
      "domains": [
        "CreativeWork"
      ], 
      "id": "thumbnailUrl", 
      "label": "Thumbnail Url", 
      "ranges": [
        "URL"
      ]
    }, 
    "tickerSymbol": {
      "comment": "The exchange traded instrument associated with a Corporation object. The tickerSymbol is expressed as an exchange and an instrument name separated by a space character. For the exchange component of the tickerSymbol attribute, we reccommend using the controlled vocaulary of Market Identifier Codes (MIC) specified in ISO15022.", 
      "comment_plain": "The exchange traded instrument associated with a Corporation object. The tickerSymbol is expressed as an exchange and an instrument name separated by a space character. For the exchange component of the tickerSymbol attribute, we reccommend using the controlled vocaulary of Market Identifier Codes (MIC) specified in ISO15022.", 
      "domains": [
        "Corporation"
      ], 
      "id": "tickerSymbol", 
      "label": "Ticker Symbol", 
      "ranges": [
        "Text"
      ]
    }, 
    "timeRequired": {
      "comment": "Approximate or typical time it takes to work with or through this learning resource for the typical intended target audience, e.g. 'P30M', 'P1H25M'.", 
      "comment_plain": "Approximate or typical time it takes to work with or through this learning resource for the typical intended target audience, e.g. 'P30M', 'P1H25M'.", 
      "domains": [
        "CreativeWork"
      ], 
      "id": "timeRequired", 
      "label": "Time Required", 
      "ranges": [
        "Duration"
      ]
    }, 
    "tissueSample": {
      "comment": "The type of tissue sample required for the test.", 
      "comment_plain": "The type of tissue sample required for the test.", 
      "domains": [
        "PathologyTest"
      ], 
      "id": "tissueSample", 
      "label": "Tissue Sample", 
      "ranges": [
        "Text"
      ]
    }, 
    "title": {
      "comment": "The title of the job.", 
      "comment_plain": "The title of the job.", 
      "domains": [
        "JobPosting"
      ], 
      "id": "title", 
      "label": "Title", 
      "ranges": [
        "Text"
      ]
    }, 
    "toLocation": {
      "comment": "A sub property of location. The final location of the object or the agent after the action.", 
      "comment_plain": "A sub property of location. The final location of the object or the agent after the action.", 
      "domains": [
        "InsertAction", 
        "TransferAction", 
        "ExerciseAction", 
        "MoveAction"
      ], 
      "id": "toLocation", 
      "label": "To Location", 
      "ranges": [
        "Place", 
        "Number"
      ]
    }, 
    "totalTime": {
      "comment": "The total time it takes to prepare and cook the recipe, in <a href=\"http://en.wikipedia.org/wiki/ISO_8601\">ISO 8601 duration format</a>.", 
      "comment_plain": "The total time it takes to prepare and cook the recipe, in ISO 8601 duration format.", 
      "domains": [
        "Recipe"
      ], 
      "id": "totalTime", 
      "label": "Total Time", 
      "ranges": [
        "Duration"
      ]
    }, 
    "track": {
      "comment": "A music recording (track)\u2014usually a single song.", 
      "comment_plain": "A music recording (track)\u2014usually a single song.", 
      "domains": [
        "MusicPlaylist", 
        "MusicGroup"
      ], 
      "id": "track", 
      "label": "Track", 
      "ranges": [
        "MusicRecording"
      ]
    }, 
    "trackingNumber": {
      "comment": "Shipper tracking number.", 
      "comment_plain": "Shipper tracking number.", 
      "domains": [
        "ParcelDelivery"
      ], 
      "id": "trackingNumber", 
      "label": "Tracking Number", 
      "ranges": [
        "Text"
      ]
    }, 
    "trackingUrl": {
      "comment": "Tracking url for the parcel delivery.", 
      "comment_plain": "Tracking url for the parcel delivery.", 
      "domains": [
        "ParcelDelivery"
      ], 
      "id": "trackingUrl", 
      "label": "Tracking Url", 
      "ranges": [
        "URL"
      ]
    }, 
    "tracks": {
      "comment": "A music recording (track)\u2014usually a single song (legacy spelling; see singular form, track).", 
      "comment_plain": "A music recording (track)\u2014usually a single song (legacy spelling; see singular form, track).", 
      "domains": [
        "MusicPlaylist", 
        "MusicGroup"
      ], 
      "id": "tracks", 
      "label": "Tracks", 
      "ranges": [
        "MusicRecording"
      ]
    }, 
    "trailer": {
      "comment": "The trailer of a movie or tv/radio series, season, or episode.", 
      "comment_plain": "The trailer of a movie or tv/radio series, season, or episode.", 
      "domains": [
        "Movie", 
        "Season", 
        "Episode", 
        "Series"
      ], 
      "id": "trailer", 
      "label": "Trailer", 
      "ranges": [
        "VideoObject"
      ]
    }, 
    "transFatContent": {
      "comment": "The number of grams of trans fat.", 
      "comment_plain": "The number of grams of trans fat.", 
      "domains": [
        "NutritionInformation"
      ], 
      "id": "transFatContent", 
      "label": "Trans Fat Content", 
      "ranges": [
        "Mass"
      ]
    }, 
    "transcript": {
      "comment": "If this MediaObject is an AudioObject or VideoObject, the transcript of that object.", 
      "comment_plain": "If this MediaObject is an AudioObject or VideoObject, the transcript of that object.", 
      "domains": [
        "AudioObject", 
        "VideoObject"
      ], 
      "id": "transcript", 
      "label": "Transcript", 
      "ranges": [
        "Text"
      ]
    }, 
    "transmissionMethod": {
      "comment": "How the disease spreads, either as a route or vector, for example 'direct contact', 'Aedes aegypti', etc.", 
      "comment_plain": "How the disease spreads, either as a route or vector, for example 'direct contact', 'Aedes aegypti', etc.", 
      "domains": [
        "InfectiousDisease"
      ], 
      "id": "transmissionMethod", 
      "label": "Transmission Method", 
      "ranges": [
        "Text"
      ]
    }, 
    "trialDesign": {
      "comment": "Specifics about the trial design (enumerated).", 
      "comment_plain": "Specifics about the trial design (enumerated).", 
      "domains": [
        "MedicalTrial"
      ], 
      "id": "trialDesign", 
      "label": "Trial Design", 
      "ranges": [
        "MedicalTrialDesign"
      ]
    }, 
    "tributary": {
      "comment": "The anatomical or organ system that the vein flows into; a larger structure that the vein connects to.", 
      "comment_plain": "The anatomical or organ system that the vein flows into; a larger structure that the vein connects to.", 
      "domains": [
        "Vein"
      ], 
      "id": "tributary", 
      "label": "Tributary", 
      "ranges": [
        "AnatomicalStructure"
      ]
    }, 
    "typeOfGood": {
      "comment": "The product that this structured value is referring to.", 
      "comment_plain": "The product that this structured value is referring to.", 
      "domains": [
        "OwnershipInfo", 
        "TypeAndQuantityNode"
      ], 
      "id": "typeOfGood", 
      "label": "Type of Good", 
      "ranges": [
        "Product"
      ]
    }, 
    "typicalAgeRange": {
      "comment": "The typical expected age range, e.g. '7-9', '11-'.", 
      "comment_plain": "The typical expected age range, e.g. '7-9', '11-'.", 
      "domains": [
        "CreativeWork", 
        "Event"
      ], 
      "id": "typicalAgeRange", 
      "label": "Typical Age Range", 
      "ranges": [
        "Text"
      ]
    }, 
    "typicalTest": {
      "comment": "A medical test typically performed given this condition.", 
      "comment_plain": "A medical test typically performed given this condition.", 
      "domains": [
        "MedicalCondition"
      ], 
      "id": "typicalTest", 
      "label": "Typical Test", 
      "ranges": [
        "MedicalTest"
      ]
    }, 
    "unitCode": {
      "comment": "The unit of measurement given using the UN/CEFACT Common Code (3 characters).", 
      "comment_plain": "The unit of measurement given using the UN/CEFACT Common Code (3 characters).", 
      "domains": [
        "TypeAndQuantityNode", 
        "QuantitativeValue", 
        "UnitPriceSpecification"
      ], 
      "id": "unitCode", 
      "label": "Unit Code", 
      "ranges": [
        "Text"
      ]
    }, 
    "unsaturatedFatContent": {
      "comment": "The number of grams of unsaturated fat.", 
      "comment_plain": "The number of grams of unsaturated fat.", 
      "domains": [
        "NutritionInformation"
      ], 
      "id": "unsaturatedFatContent", 
      "label": "Unsaturated Fat Content", 
      "ranges": [
        "Mass"
      ]
    }, 
    "uploadDate": {
      "comment": "Date when this media object was uploaded to this site.", 
      "comment_plain": "Date when this media object was uploaded to this site.", 
      "domains": [
        "MediaObject"
      ], 
      "id": "uploadDate", 
      "label": "Upload Date", 
      "ranges": [
        "Date"
      ]
    }, 
    "url": {
      "comment": "URL of the item.", 
      "comment_plain": "URL of the item.", 
      "domains": [
        "Thing"
      ], 
      "id": "url", 
      "label": "URL", 
      "ranges": [
        "URL"
      ]
    }, 
    "usedToDiagnose": {
      "comment": "A condition the test is used to diagnose.", 
      "comment_plain": "A condition the test is used to diagnose.", 
      "domains": [
        "MedicalTest"
      ], 
      "id": "usedToDiagnose", 
      "label": "Used to Diagnose", 
      "ranges": [
        "MedicalCondition"
      ]
    }, 
    "usesDevice": {
      "comment": "Device used to perform the test.", 
      "comment_plain": "Device used to perform the test.", 
      "domains": [
        "MedicalTest"
      ], 
      "id": "usesDevice", 
      "label": "Uses Device", 
      "ranges": [
        "MedicalDevice"
      ]
    }, 
    "validFor": {
      "comment": "The time validity of the permit.", 
      "comment_plain": "The time validity of the permit.", 
      "domains": [
        "Permit"
      ], 
      "id": "validFor", 
      "label": "Valid for", 
      "ranges": [
        "Duration"
      ]
    }, 
    "validFrom": {
      "comment": "The date when the item becomes valid.", 
      "comment_plain": "The date when the item becomes valid.", 
      "domains": [
        "OpeningHoursSpecification", 
        "Offer", 
        "Demand", 
        "PriceSpecification", 
        "Permit"
      ], 
      "id": "validFrom", 
      "label": "Valid From", 
      "ranges": [
        "DateTime"
      ]
    }, 
    "validIn": {
      "comment": "The geographic area where the permit is valid.", 
      "comment_plain": "The geographic area where the permit is valid.", 
      "domains": [
        "Permit"
      ], 
      "id": "validIn", 
      "label": "Valid in", 
      "ranges": [
        "AdministrativeArea"
      ]
    }, 
    "validThrough": {
      "comment": "The end of the validity of offer, price specification, or opening hours data.", 
      "comment_plain": "The end of the validity of offer, price specification, or opening hours data.", 
      "domains": [
        "OpeningHoursSpecification", 
        "Demand", 
        "PriceSpecification", 
        "Offer"
      ], 
      "id": "validThrough", 
      "label": "Valid Through", 
      "ranges": [
        "DateTime"
      ]
    }, 
    "validUntil": {
      "comment": "The date when the item is no longer valid.", 
      "comment_plain": "The date when the item is no longer valid.", 
      "domains": [
        "Permit"
      ], 
      "id": "validUntil", 
      "label": "Valid Until", 
      "ranges": [
        "Date"
      ]
    }, 
    "value": {
      "comment": "The value of the product characteristic.", 
      "comment_plain": "The value of the product characteristic.", 
      "domains": [
        "QuantitativeValue"
      ], 
      "id": "value", 
      "label": "Value", 
      "ranges": [
        "Number"
      ]
    }, 
    "valueAddedTaxIncluded": {
      "comment": "Specifies whether the applicable value-added tax (VAT) is included in the price specification or not.", 
      "comment_plain": "Specifies whether the applicable value-added tax (VAT) is included in the price specification or not.", 
      "domains": [
        "PriceSpecification"
      ], 
      "id": "valueAddedTaxIncluded", 
      "label": "Value Added Tax Included", 
      "ranges": [
        "Boolean"
      ]
    }, 
    "valueReference": {
      "comment": "A pointer to a secondary value that provides additional information on the original value, e.g. a reference temperature.", 
      "comment_plain": "A pointer to a secondary value that provides additional information on the original value, e.g. a reference temperature.", 
      "domains": [
        "QualitativeValue", 
        "QuantitativeValue"
      ], 
      "id": "valueReference", 
      "label": "Value Reference", 
      "ranges": [
        "Enumeration", 
        "StructuredValue"
      ]
    }, 
    "vatID": {
      "comment": "The Value-added Tax ID of the organisation or person.", 
      "comment_plain": "The Value-added Tax ID of the organisation or person.", 
      "domains": [
        "Person", 
        "Organization"
      ], 
      "id": "vatID", 
      "label": "Vat ID", 
      "ranges": [
        "Text"
      ]
    }, 
    "vendor": {
      "comment": "A sub property of participant. The seller.The participant/person/organization that sold the object.", 
      "comment_plain": "A sub property of participant. The seller.The participant/person/organization that sold the object.", 
      "domains": [
        "BuyAction"
      ], 
      "id": "vendor", 
      "label": "Vendor", 
      "ranges": [
        "Organization", 
        "Person"
      ]
    }, 
    "version": {
      "comment": "The version of the CreativeWork embodied by a specified resource.", 
      "comment_plain": "The version of the CreativeWork embodied by a specified resource.", 
      "domains": [
        "CreativeWork"
      ], 
      "id": "version", 
      "label": "Version", 
      "ranges": [
        "Number"
      ]
    }, 
    "video": {
      "comment": "An embedded video object.", 
      "comment_plain": "An embedded video object.", 
      "domains": [
        "CreativeWork"
      ], 
      "id": "video", 
      "label": "Video", 
      "ranges": [
        "VideoObject"
      ]
    }, 
    "videoFrameSize": {
      "comment": "The frame size of the video.", 
      "comment_plain": "The frame size of the video.", 
      "domains": [
        "VideoObject"
      ], 
      "id": "videoFrameSize", 
      "label": "Video Frame Size", 
      "ranges": [
        "Text"
      ]
    }, 
    "videoQuality": {
      "comment": "The quality of the video.", 
      "comment_plain": "The quality of the video.", 
      "domains": [
        "VideoObject"
      ], 
      "id": "videoQuality", 
      "label": "Video Quality", 
      "ranges": [
        "Text"
      ]
    }, 
    "warning": {
      "comment": "Any FDA or other warnings about the drug (text or URL).", 
      "comment_plain": "Any FDA or other warnings about the drug (text or URL).", 
      "domains": [
        "Drug"
      ], 
      "id": "warning", 
      "label": "Warning", 
      "ranges": [
        "Text", 
        "URL"
      ]
    }, 
    "warranty": {
      "comment": "The warranty promise(s) included in the offer.", 
      "comment_plain": "The warranty promise(s) included in the offer.", 
      "domains": [
        "Offer", 
        "Demand"
      ], 
      "id": "warranty", 
      "label": "Warranty", 
      "ranges": [
        "WarrantyPromise"
      ]
    }, 
    "warrantyPromise": {
      "comment": "The warranty promise(s) included in the offer.", 
      "comment_plain": "The warranty promise(s) included in the offer.", 
      "domains": [
        "SellAction", 
        "BuyAction"
      ], 
      "id": "warrantyPromise", 
      "label": "Warranty Promise", 
      "ranges": [
        "WarrantyPromise"
      ]
    }, 
    "warrantyScope": {
      "comment": "The scope of the warranty promise.", 
      "comment_plain": "The scope of the warranty promise.", 
      "domains": [
        "WarrantyPromise"
      ], 
      "id": "warrantyScope", 
      "label": "Warranty Scope", 
      "ranges": [
        "WarrantyScope"
      ]
    }, 
    "weight": {
      "comment": "The weight of the product.", 
      "comment_plain": "The weight of the product.", 
      "domains": [
        "Product"
      ], 
      "id": "weight", 
      "label": "Weight", 
      "ranges": [
        "QuantitativeValue"
      ]
    }, 
    "width": {
      "comment": "The width of the item.", 
      "comment_plain": "The width of the item.", 
      "domains": [
        "MediaObject", 
        "Product"
      ], 
      "id": "width", 
      "label": "Width", 
      "ranges": [
        "Distance", 
        "QuantitativeValue"
      ]
    }, 
    "winner": {
      "comment": "A sub property of participant. The winner of the action.", 
      "comment_plain": "A sub property of participant. The winner of the action.", 
      "domains": [
        "LoseAction"
      ], 
      "id": "winner", 
      "label": "Winner", 
      "ranges": [
        "Person"
      ]
    }, 
    "wordCount": {
      "comment": "The number of words in the text of the Article.", 
      "comment_plain": "The number of words in the text of the Article.", 
      "domains": [
        "Article"
      ], 
      "id": "wordCount", 
      "label": "Word Count", 
      "ranges": [
        "Integer"
      ]
    }, 
    "workHours": {
      "comment": "The typical working hours for this job (e.g. 1st shift, night shift, 8am-5pm).", 
      "comment_plain": "The typical working hours for this job (e.g. 1st shift, night shift, 8am-5pm).", 
      "domains": [
        "JobPosting"
      ], 
      "id": "workHours", 
      "label": "Work Hours", 
      "ranges": [
        "Text"
      ]
    }, 
    "workLocation": {
      "comment": "A contact location for a person's place of work.", 
      "comment_plain": "A contact location for a person's place of work.", 
      "domains": [
        "Person"
      ], 
      "id": "workLocation", 
      "label": "Work Location", 
      "ranges": [
        "ContactPoint", 
        "Place"
      ]
    }, 
    "workload": {
      "comment": "Quantitative measure of the physiologic output of the exercise; also referred to as energy expenditure.", 
      "comment_plain": "Quantitative measure of the physiologic output of the exercise; also referred to as energy expenditure.", 
      "domains": [
        "ExercisePlan"
      ], 
      "id": "workload", 
      "label": "Workload", 
      "ranges": [
        "Energy"
      ]
    }, 
    "worksFor": {
      "comment": "Organizations that the person works for.", 
      "comment_plain": "Organizations that the person works for.", 
      "domains": [
        "Person"
      ], 
      "id": "worksFor", 
      "label": "Works for", 
      "ranges": [
        "Organization"
      ]
    }, 
    "worstRating": {
      "comment": "The lowest value allowed in this rating system. If worstRating is omitted, 1 is assumed.", 
      "comment_plain": "The lowest value allowed in this rating system. If worstRating is omitted, 1 is assumed.", 
      "domains": [
        "Rating"
      ], 
      "id": "worstRating", 
      "label": "Worst Rating", 
      "ranges": [
        "Number", 
        "Text"
      ]
    }, 
    "yearlyRevenue": {
      "comment": "The size of the business in annual revenue.", 
      "comment_plain": "The size of the business in annual revenue.", 
      "domains": [
        "BusinessAudience"
      ], 
      "id": "yearlyRevenue", 
      "label": "Yearly Revenue", 
      "ranges": [
        "QuantitativeValue"
      ]
    }, 
    "yearsInOperation": {
      "comment": "The age of the business.", 
      "comment_plain": "The age of the business.", 
      "domains": [
        "BusinessAudience"
      ], 
      "id": "yearsInOperation", 
      "label": "Years in Operation", 
      "ranges": [
        "QuantitativeValue"
      ]
    }
  }, 
  "types": {
    "APIReference": {
      "ancestors": [
        "Thing", 
        "CreativeWork", 
        "Article", 
        "TechArticle"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "APIReference", 
      "label": "API Reference", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "about", 
        "accessibilityAPI", 
        "accessibilityControl", 
        "accessibilityFeature", 
        "accessibilityHazard", 
        "accountablePerson", 
        "aggregateRating", 
        "alternativeHeadline", 
        "associatedMedia", 
        "audience", 
        "audio", 
        "author", 
        "award", 
        "awards", 
        "citation", 
        "comment", 
        "contentLocation", 
        "contentRating", 
        "contributor", 
        "copyrightHolder", 
        "copyrightYear", 
        "creator", 
        "dateCreated", 
        "dateModified", 
        "datePublished", 
        "discussionUrl", 
        "editor", 
        "educationalAlignment", 
        "educationalUse", 
        "encoding", 
        "encodings", 
        "genre", 
        "headline", 
        "inLanguage", 
        "interactionCount", 
        "interactivityType", 
        "isBasedOnUrl", 
        "isFamilyFriendly", 
        "keywords", 
        "learningResourceType", 
        "mentions", 
        "offers", 
        "provider", 
        "publisher", 
        "publishingPrinciples", 
        "review", 
        "reviews", 
        "sourceOrganization", 
        "text", 
        "thumbnailUrl", 
        "timeRequired", 
        "typicalAgeRange", 
        "version", 
        "video", 
        "articleBody", 
        "articleSection", 
        "wordCount", 
        "dependencies", 
        "proficiencyLevel", 
        "assembly", 
        "assemblyVersion", 
        "programmingModel", 
        "targetPlatform"
      ], 
      "specific_properties": [
        "assembly", 
        "assemblyVersion", 
        "programmingModel", 
        "targetPlatform"
      ], 
      "subtypes": [], 
      "supertypes": [
        "TechArticle"
      ], 
      "url": "http://schema.org/APIReference"
    }, 
    "AboutPage": {
      "ancestors": [
        "Thing", 
        "CreativeWork", 
        "WebPage"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "AboutPage", 
      "label": "About Page", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "about", 
        "accessibilityAPI", 
        "accessibilityControl", 
        "accessibilityFeature", 
        "accessibilityHazard", 
        "accountablePerson", 
        "aggregateRating", 
        "alternativeHeadline", 
        "associatedMedia", 
        "audience", 
        "audio", 
        "author", 
        "award", 
        "awards", 
        "citation", 
        "comment", 
        "contentLocation", 
        "contentRating", 
        "contributor", 
        "copyrightHolder", 
        "copyrightYear", 
        "creator", 
        "dateCreated", 
        "dateModified", 
        "datePublished", 
        "discussionUrl", 
        "editor", 
        "educationalAlignment", 
        "educationalUse", 
        "encoding", 
        "encodings", 
        "genre", 
        "headline", 
        "inLanguage", 
        "interactionCount", 
        "interactivityType", 
        "isBasedOnUrl", 
        "isFamilyFriendly", 
        "keywords", 
        "learningResourceType", 
        "mentions", 
        "offers", 
        "provider", 
        "publisher", 
        "publishingPrinciples", 
        "review", 
        "reviews", 
        "sourceOrganization", 
        "text", 
        "thumbnailUrl", 
        "timeRequired", 
        "typicalAgeRange", 
        "version", 
        "video", 
        "breadcrumb", 
        "isPartOf", 
        "lastReviewed", 
        "mainContentOfPage", 
        "primaryImageOfPage", 
        "relatedLink", 
        "reviewedBy", 
        "significantLink", 
        "significantLinks", 
        "specialty"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "WebPage"
      ], 
      "url": "http://schema.org/AboutPage"
    }, 
    "AcceptAction": {
      "ancestors": [
        "Thing", 
        "Action", 
        "OrganizeAction", 
        "AllocateAction"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "AcceptAction", 
      "label": "Accept Action", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "agent", 
        "endTime", 
        "instrument", 
        "location", 
        "object", 
        "participant", 
        "result", 
        "startTime", 
        "purpose"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "AllocateAction"
      ], 
      "url": "http://schema.org/AcceptAction"
    }, 
    "AccountingService": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "LocalBusiness", 
        "FinancialService"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "AccountingService", 
      "label": "Accounting Service", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "founder", 
        "founders", 
        "foundingDate", 
        "hasPOS", 
        "legalName", 
        "location", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "vatID", 
        "branchOf", 
        "currenciesAccepted", 
        "openingHours", 
        "paymentAccepted", 
        "priceRange"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "ProfessionalService", 
        "FinancialService"
      ], 
      "url": "http://schema.org/AccountingService"
    }, 
    "AchieveAction": {
      "ancestors": [
        "Thing", 
        "Action"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "AchieveAction", 
      "label": "Achieve Action", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "agent", 
        "endTime", 
        "instrument", 
        "location", 
        "object", 
        "participant", 
        "result", 
        "startTime"
      ], 
      "specific_properties": [], 
      "subtypes": [
        "LoseAction", 
        "TieAction", 
        "WinAction"
      ], 
      "supertypes": [
        "Action"
      ], 
      "url": "http://schema.org/AchieveAction"
    }, 
    "Action": {
      "ancestors": [
        "Thing"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "Action", 
      "label": "Action", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "agent", 
        "endTime", 
        "instrument", 
        "location", 
        "object", 
        "participant", 
        "result", 
        "startTime"
      ], 
      "specific_properties": [
        "agent", 
        "endTime", 
        "instrument", 
        "location", 
        "object", 
        "participant", 
        "result", 
        "startTime"
      ], 
      "subtypes": [
        "AchieveAction", 
        "AssessAction", 
        "ConsumeAction", 
        "CreateAction", 
        "FindAction", 
        "InteractAction", 
        "MoveAction", 
        "OrganizeAction", 
        "PlayAction", 
        "SearchAction", 
        "TradeAction", 
        "TransferAction", 
        "UpdateAction"
      ], 
      "supertypes": [
        "Thing"
      ], 
      "url": "http://schema.org/Action"
    }, 
    "AddAction": {
      "ancestors": [
        "Thing", 
        "Action", 
        "UpdateAction"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "AddAction", 
      "label": "Add Action", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "agent", 
        "endTime", 
        "instrument", 
        "location", 
        "object", 
        "participant", 
        "result", 
        "startTime", 
        "collection"
      ], 
      "specific_properties": [], 
      "subtypes": [
        "InsertAction"
      ], 
      "supertypes": [
        "UpdateAction"
      ], 
      "url": "http://schema.org/AddAction"
    }, 
    "AdministrativeArea": {
      "ancestors": [
        "Thing", 
        "Place"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "AdministrativeArea", 
      "label": "Administrative Area", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone"
      ], 
      "specific_properties": [], 
      "subtypes": [
        "City", 
        "Country", 
        "State"
      ], 
      "supertypes": [
        "Place"
      ], 
      "url": "http://schema.org/AdministrativeArea"
    }, 
    "AdultEntertainment": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "LocalBusiness", 
        "EntertainmentBusiness"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "AdultEntertainment", 
      "label": "Adult Entertainment", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "founder", 
        "founders", 
        "foundingDate", 
        "hasPOS", 
        "legalName", 
        "location", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "vatID", 
        "branchOf", 
        "currenciesAccepted", 
        "openingHours", 
        "paymentAccepted", 
        "priceRange"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "EntertainmentBusiness"
      ], 
      "url": "http://schema.org/AdultEntertainment"
    }, 
    "AggregateOffer": {
      "ancestors": [
        "Thing", 
        "Intangible", 
        "Offer"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "AggregateOffer", 
      "label": "Aggregate Offer", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "acceptedPaymentMethod", 
        "addOn", 
        "advanceBookingRequirement", 
        "aggregateRating", 
        "availability", 
        "availabilityEnds", 
        "availabilityStarts", 
        "availableAtOrFrom", 
        "availableDeliveryMethod", 
        "businessFunction", 
        "category", 
        "deliveryLeadTime", 
        "eligibleCustomerType", 
        "eligibleDuration", 
        "eligibleQuantity", 
        "eligibleRegion", 
        "eligibleTransactionVolume", 
        "gtin13", 
        "gtin14", 
        "gtin8", 
        "includesObject", 
        "inventoryLevel", 
        "itemCondition", 
        "itemOffered", 
        "mpn", 
        "price", 
        "priceCurrency", 
        "priceSpecification", 
        "priceValidUntil", 
        "review", 
        "reviews", 
        "seller", 
        "serialNumber", 
        "sku", 
        "validFrom", 
        "validThrough", 
        "warranty", 
        "highPrice", 
        "lowPrice", 
        "offerCount"
      ], 
      "specific_properties": [
        "highPrice", 
        "lowPrice", 
        "offerCount"
      ], 
      "subtypes": [], 
      "supertypes": [
        "Offer"
      ], 
      "url": "http://schema.org/AggregateOffer"
    }, 
    "AggregateRating": {
      "ancestors": [
        "Thing", 
        "Intangible", 
        "Rating"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "AggregateRating", 
      "label": "Aggregate Rating", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "bestRating", 
        "ratingValue", 
        "worstRating", 
        "itemReviewed", 
        "ratingCount", 
        "reviewCount"
      ], 
      "specific_properties": [
        "itemReviewed", 
        "ratingCount", 
        "reviewCount"
      ], 
      "subtypes": [], 
      "supertypes": [
        "Rating"
      ], 
      "url": "http://schema.org/AggregateRating"
    }, 
    "AgreeAction": {
      "ancestors": [
        "Thing", 
        "Action", 
        "AssessAction", 
        "ReactAction"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "AgreeAction", 
      "label": "Agree Action", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "agent", 
        "endTime", 
        "instrument", 
        "location", 
        "object", 
        "participant", 
        "result", 
        "startTime"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "ReactAction"
      ], 
      "url": "http://schema.org/AgreeAction"
    }, 
    "Airport": {
      "ancestors": [
        "Thing", 
        "Place", 
        "CivicStructure"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "Airport", 
      "label": "Airport", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "openingHours"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "CivicStructure"
      ], 
      "url": "http://schema.org/Airport"
    }, 
    "AlignmentObject": {
      "ancestors": [
        "Thing", 
        "Intangible"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "AlignmentObject", 
      "label": "Alignment Object", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "alignmentType", 
        "educationalFramework", 
        "targetDescription", 
        "targetName", 
        "targetUrl"
      ], 
      "specific_properties": [
        "alignmentType", 
        "educationalFramework", 
        "targetDescription", 
        "targetName", 
        "targetUrl"
      ], 
      "subtypes": [], 
      "supertypes": [
        "Intangible"
      ], 
      "url": "http://schema.org/AlignmentObject"
    }, 
    "AllocateAction": {
      "ancestors": [
        "Thing", 
        "Action", 
        "OrganizeAction"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "AllocateAction", 
      "label": "Allocate Action", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "agent", 
        "endTime", 
        "instrument", 
        "location", 
        "object", 
        "participant", 
        "result", 
        "startTime", 
        "purpose"
      ], 
      "specific_properties": [
        "purpose"
      ], 
      "subtypes": [
        "AcceptAction", 
        "AssignAction", 
        "AuthorizeAction", 
        "RejectAction"
      ], 
      "supertypes": [
        "OrganizeAction"
      ], 
      "url": "http://schema.org/AllocateAction"
    }, 
    "AmusementPark": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "LocalBusiness", 
        "EntertainmentBusiness"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "AmusementPark", 
      "label": "Amusement Park", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "founder", 
        "founders", 
        "foundingDate", 
        "hasPOS", 
        "legalName", 
        "location", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "vatID", 
        "branchOf", 
        "currenciesAccepted", 
        "openingHours", 
        "paymentAccepted", 
        "priceRange"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "EntertainmentBusiness"
      ], 
      "url": "http://schema.org/AmusementPark"
    }, 
    "AnatomicalStructure": {
      "ancestors": [
        "Thing", 
        "MedicalEntity"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "AnatomicalStructure", 
      "label": "Anatomical Structure", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "code", 
        "guideline", 
        "medicineSystem", 
        "recognizingAuthority", 
        "relevantSpecialty", 
        "study", 
        "associatedPathophysiology", 
        "bodyLocation", 
        "connectedTo", 
        "diagram", 
        "function", 
        "partOfSystem", 
        "relatedCondition", 
        "relatedTherapy", 
        "subStructure"
      ], 
      "specific_properties": [
        "associatedPathophysiology", 
        "bodyLocation", 
        "connectedTo", 
        "diagram", 
        "function", 
        "partOfSystem", 
        "relatedCondition", 
        "relatedTherapy", 
        "subStructure"
      ], 
      "subtypes": [
        "Bone", 
        "BrainStructure", 
        "Joint", 
        "Ligament", 
        "Muscle", 
        "Nerve", 
        "Vessel"
      ], 
      "supertypes": [
        "MedicalEntity"
      ], 
      "url": "http://schema.org/AnatomicalStructure"
    }, 
    "AnatomicalSystem": {
      "ancestors": [
        "Thing", 
        "MedicalEntity"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "AnatomicalSystem", 
      "label": "Anatomical System", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "code", 
        "guideline", 
        "medicineSystem", 
        "recognizingAuthority", 
        "relevantSpecialty", 
        "study", 
        "associatedPathophysiology", 
        "comprisedOf", 
        "relatedCondition", 
        "relatedStructure", 
        "relatedTherapy"
      ], 
      "specific_properties": [
        "associatedPathophysiology", 
        "comprisedOf", 
        "relatedCondition", 
        "relatedStructure", 
        "relatedTherapy"
      ], 
      "subtypes": [], 
      "supertypes": [
        "MedicalEntity"
      ], 
      "url": "http://schema.org/AnatomicalSystem"
    }, 
    "AnimalShelter": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "LocalBusiness"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "AnimalShelter", 
      "label": "Animal Shelter", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "founder", 
        "founders", 
        "foundingDate", 
        "hasPOS", 
        "legalName", 
        "location", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "vatID", 
        "branchOf", 
        "currenciesAccepted", 
        "openingHours", 
        "paymentAccepted", 
        "priceRange"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "LocalBusiness"
      ], 
      "url": "http://schema.org/AnimalShelter"
    }, 
    "ApartmentComplex": {
      "ancestors": [
        "Thing", 
        "Place", 
        "Residence"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "ApartmentComplex", 
      "label": "Apartment Complex", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "Residence"
      ], 
      "url": "http://schema.org/ApartmentComplex"
    }, 
    "AppendAction": {
      "ancestors": [
        "Thing", 
        "Action", 
        "UpdateAction", 
        "AddAction", 
        "InsertAction"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "AppendAction", 
      "label": "Append Action", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "agent", 
        "endTime", 
        "instrument", 
        "location", 
        "object", 
        "participant", 
        "result", 
        "startTime", 
        "collection", 
        "toLocation"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "InsertAction"
      ], 
      "url": "http://schema.org/AppendAction"
    }, 
    "ApplyAction": {
      "ancestors": [
        "Thing", 
        "Action", 
        "OrganizeAction"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "ApplyAction", 
      "label": "Apply Action", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "agent", 
        "endTime", 
        "instrument", 
        "location", 
        "object", 
        "participant", 
        "result", 
        "startTime"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "OrganizeAction"
      ], 
      "url": "http://schema.org/ApplyAction"
    }, 
    "ApprovedIndication": {
      "ancestors": [
        "Thing", 
        "MedicalEntity", 
        "MedicalIndication"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "ApprovedIndication", 
      "label": "Approved Indication", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "code", 
        "guideline", 
        "medicineSystem", 
        "recognizingAuthority", 
        "relevantSpecialty", 
        "study"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "MedicalIndication"
      ], 
      "url": "http://schema.org/ApprovedIndication"
    }, 
    "Aquarium": {
      "ancestors": [
        "Thing", 
        "Place", 
        "CivicStructure"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "Aquarium", 
      "label": "Aquarium", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "openingHours"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "CivicStructure"
      ], 
      "url": "http://schema.org/Aquarium"
    }, 
    "ArriveAction": {
      "ancestors": [
        "Thing", 
        "Action", 
        "MoveAction"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "ArriveAction", 
      "label": "Arrive Action", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "agent", 
        "endTime", 
        "instrument", 
        "location", 
        "object", 
        "participant", 
        "result", 
        "startTime", 
        "fromLocation", 
        "toLocation"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "MoveAction"
      ], 
      "url": "http://schema.org/ArriveAction"
    }, 
    "ArtGallery": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "LocalBusiness", 
        "EntertainmentBusiness"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "ArtGallery", 
      "label": "Art Gallery", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "founder", 
        "founders", 
        "foundingDate", 
        "hasPOS", 
        "legalName", 
        "location", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "vatID", 
        "branchOf", 
        "currenciesAccepted", 
        "openingHours", 
        "paymentAccepted", 
        "priceRange"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "EntertainmentBusiness"
      ], 
      "url": "http://schema.org/ArtGallery"
    }, 
    "Artery": {
      "ancestors": [
        "Thing", 
        "MedicalEntity", 
        "AnatomicalStructure", 
        "Vessel"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "Artery", 
      "label": "Artery", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "code", 
        "guideline", 
        "medicineSystem", 
        "recognizingAuthority", 
        "relevantSpecialty", 
        "study", 
        "associatedPathophysiology", 
        "bodyLocation", 
        "connectedTo", 
        "diagram", 
        "function", 
        "partOfSystem", 
        "relatedCondition", 
        "relatedTherapy", 
        "subStructure", 
        "arterialBranch", 
        "source", 
        "supplyTo"
      ], 
      "specific_properties": [
        "arterialBranch", 
        "source", 
        "supplyTo"
      ], 
      "subtypes": [], 
      "supertypes": [
        "Vessel"
      ], 
      "url": "http://schema.org/Artery"
    }, 
    "Article": {
      "ancestors": [
        "Thing", 
        "CreativeWork"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "Article", 
      "label": "Article", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "about", 
        "accessibilityAPI", 
        "accessibilityControl", 
        "accessibilityFeature", 
        "accessibilityHazard", 
        "accountablePerson", 
        "aggregateRating", 
        "alternativeHeadline", 
        "associatedMedia", 
        "audience", 
        "audio", 
        "author", 
        "award", 
        "awards", 
        "citation", 
        "comment", 
        "contentLocation", 
        "contentRating", 
        "contributor", 
        "copyrightHolder", 
        "copyrightYear", 
        "creator", 
        "dateCreated", 
        "dateModified", 
        "datePublished", 
        "discussionUrl", 
        "editor", 
        "educationalAlignment", 
        "educationalUse", 
        "encoding", 
        "encodings", 
        "genre", 
        "headline", 
        "inLanguage", 
        "interactionCount", 
        "interactivityType", 
        "isBasedOnUrl", 
        "isFamilyFriendly", 
        "keywords", 
        "learningResourceType", 
        "mentions", 
        "offers", 
        "provider", 
        "publisher", 
        "publishingPrinciples", 
        "review", 
        "reviews", 
        "sourceOrganization", 
        "text", 
        "thumbnailUrl", 
        "timeRequired", 
        "typicalAgeRange", 
        "version", 
        "video", 
        "articleBody", 
        "articleSection", 
        "wordCount"
      ], 
      "specific_properties": [
        "articleBody", 
        "articleSection", 
        "wordCount"
      ], 
      "subtypes": [
        "BlogPosting", 
        "NewsArticle", 
        "ScholarlyArticle", 
        "TechArticle"
      ], 
      "supertypes": [
        "CreativeWork"
      ], 
      "url": "http://schema.org/Article"
    }, 
    "AskAction": {
      "ancestors": [
        "Thing", 
        "Action", 
        "InteractAction", 
        "CommunicateAction"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "AskAction", 
      "label": "Ask Action", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "agent", 
        "endTime", 
        "instrument", 
        "location", 
        "object", 
        "participant", 
        "result", 
        "startTime", 
        "about", 
        "language", 
        "recipient", 
        "question"
      ], 
      "specific_properties": [
        "question"
      ], 
      "subtypes": [], 
      "supertypes": [
        "CommunicateAction"
      ], 
      "url": "http://schema.org/AskAction"
    }, 
    "AssessAction": {
      "ancestors": [
        "Thing", 
        "Action"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "AssessAction", 
      "label": "Assess Action", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "agent", 
        "endTime", 
        "instrument", 
        "location", 
        "object", 
        "participant", 
        "result", 
        "startTime"
      ], 
      "specific_properties": [], 
      "subtypes": [
        "ChooseAction", 
        "IgnoreAction", 
        "ReactAction", 
        "ReviewAction"
      ], 
      "supertypes": [
        "Action"
      ], 
      "url": "http://schema.org/AssessAction"
    }, 
    "AssignAction": {
      "ancestors": [
        "Thing", 
        "Action", 
        "OrganizeAction", 
        "AllocateAction"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "AssignAction", 
      "label": "Assign Action", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "agent", 
        "endTime", 
        "instrument", 
        "location", 
        "object", 
        "participant", 
        "result", 
        "startTime", 
        "purpose"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "AllocateAction"
      ], 
      "url": "http://schema.org/AssignAction"
    }, 
    "Attorney": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "LocalBusiness", 
        "ProfessionalService"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "Attorney", 
      "label": "Attorney", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "founder", 
        "founders", 
        "foundingDate", 
        "hasPOS", 
        "legalName", 
        "location", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "vatID", 
        "branchOf", 
        "currenciesAccepted", 
        "openingHours", 
        "paymentAccepted", 
        "priceRange"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "ProfessionalService"
      ], 
      "url": "http://schema.org/Attorney"
    }, 
    "Audience": {
      "ancestors": [
        "Thing", 
        "Intangible"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "Audience", 
      "instances": [
        "Researcher"
      ], 
      "label": "Audience", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "audienceType", 
        "geographicArea"
      ], 
      "specific_properties": [
        "audienceType", 
        "geographicArea"
      ], 
      "subtypes": [
        "BusinessAudience", 
        "EducationalAudience", 
        "MedicalAudience", 
        "PeopleAudience"
      ], 
      "supertypes": [
        "Intangible"
      ], 
      "url": "http://schema.org/Audience"
    }, 
    "AudioObject": {
      "ancestors": [
        "Thing", 
        "CreativeWork", 
        "MediaObject"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "AudioObject", 
      "label": "Audio Object", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "about", 
        "accessibilityAPI", 
        "accessibilityControl", 
        "accessibilityFeature", 
        "accessibilityHazard", 
        "accountablePerson", 
        "aggregateRating", 
        "alternativeHeadline", 
        "associatedMedia", 
        "audience", 
        "audio", 
        "author", 
        "award", 
        "awards", 
        "citation", 
        "comment", 
        "contentLocation", 
        "contentRating", 
        "contributor", 
        "copyrightHolder", 
        "copyrightYear", 
        "creator", 
        "dateCreated", 
        "dateModified", 
        "datePublished", 
        "discussionUrl", 
        "editor", 
        "educationalAlignment", 
        "educationalUse", 
        "encoding", 
        "encodings", 
        "genre", 
        "headline", 
        "inLanguage", 
        "interactionCount", 
        "interactivityType", 
        "isBasedOnUrl", 
        "isFamilyFriendly", 
        "keywords", 
        "learningResourceType", 
        "mentions", 
        "offers", 
        "provider", 
        "publisher", 
        "publishingPrinciples", 
        "review", 
        "reviews", 
        "sourceOrganization", 
        "text", 
        "thumbnailUrl", 
        "timeRequired", 
        "typicalAgeRange", 
        "version", 
        "video", 
        "associatedArticle", 
        "bitrate", 
        "contentSize", 
        "contentUrl", 
        "duration", 
        "embedUrl", 
        "encodesCreativeWork", 
        "encodingFormat", 
        "expires", 
        "height", 
        "playerType", 
        "productionCompany", 
        "publication", 
        "regionsAllowed", 
        "requiresSubscription", 
        "uploadDate", 
        "width", 
        "transcript"
      ], 
      "specific_properties": [
        "transcript"
      ], 
      "subtypes": [], 
      "supertypes": [
        "MediaObject"
      ], 
      "url": "http://schema.org/AudioObject"
    }, 
    "AuthorizeAction": {
      "ancestors": [
        "Thing", 
        "Action", 
        "OrganizeAction", 
        "AllocateAction"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "AuthorizeAction", 
      "label": "Authorize Action", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "agent", 
        "endTime", 
        "instrument", 
        "location", 
        "object", 
        "participant", 
        "result", 
        "startTime", 
        "purpose", 
        "recipient"
      ], 
      "specific_properties": [
        "recipient"
      ], 
      "subtypes": [], 
      "supertypes": [
        "AllocateAction"
      ], 
      "url": "http://schema.org/AuthorizeAction"
    }, 
    "AutoBodyShop": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "LocalBusiness", 
        "AutomotiveBusiness"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "AutoBodyShop", 
      "label": "Auto Body Shop", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "founder", 
        "founders", 
        "foundingDate", 
        "hasPOS", 
        "legalName", 
        "location", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "vatID", 
        "branchOf", 
        "currenciesAccepted", 
        "openingHours", 
        "paymentAccepted", 
        "priceRange"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "AutomotiveBusiness"
      ], 
      "url": "http://schema.org/AutoBodyShop"
    }, 
    "AutoDealer": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "LocalBusiness", 
        "AutomotiveBusiness"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "AutoDealer", 
      "label": "Auto Dealer", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "founder", 
        "founders", 
        "foundingDate", 
        "hasPOS", 
        "legalName", 
        "location", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "vatID", 
        "branchOf", 
        "currenciesAccepted", 
        "openingHours", 
        "paymentAccepted", 
        "priceRange"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "AutomotiveBusiness"
      ], 
      "url": "http://schema.org/AutoDealer"
    }, 
    "AutoPartsStore": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "LocalBusiness", 
        "AutomotiveBusiness"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "AutoPartsStore", 
      "label": "Auto Parts Store", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "founder", 
        "founders", 
        "foundingDate", 
        "hasPOS", 
        "legalName", 
        "location", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "vatID", 
        "branchOf", 
        "currenciesAccepted", 
        "openingHours", 
        "paymentAccepted", 
        "priceRange"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "AutomotiveBusiness", 
        "Store"
      ], 
      "url": "http://schema.org/AutoPartsStore"
    }, 
    "AutoRental": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "LocalBusiness", 
        "AutomotiveBusiness"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "AutoRental", 
      "label": "Auto Rental", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "founder", 
        "founders", 
        "foundingDate", 
        "hasPOS", 
        "legalName", 
        "location", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "vatID", 
        "branchOf", 
        "currenciesAccepted", 
        "openingHours", 
        "paymentAccepted", 
        "priceRange"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "AutomotiveBusiness"
      ], 
      "url": "http://schema.org/AutoRental"
    }, 
    "AutoRepair": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "LocalBusiness", 
        "AutomotiveBusiness"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "AutoRepair", 
      "label": "Auto Repair", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "founder", 
        "founders", 
        "foundingDate", 
        "hasPOS", 
        "legalName", 
        "location", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "vatID", 
        "branchOf", 
        "currenciesAccepted", 
        "openingHours", 
        "paymentAccepted", 
        "priceRange"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "AutomotiveBusiness"
      ], 
      "url": "http://schema.org/AutoRepair"
    }, 
    "AutoWash": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "LocalBusiness", 
        "AutomotiveBusiness"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "AutoWash", 
      "label": "Auto Wash", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "founder", 
        "founders", 
        "foundingDate", 
        "hasPOS", 
        "legalName", 
        "location", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "vatID", 
        "branchOf", 
        "currenciesAccepted", 
        "openingHours", 
        "paymentAccepted", 
        "priceRange"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "AutomotiveBusiness"
      ], 
      "url": "http://schema.org/AutoWash"
    }, 
    "AutomatedTeller": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "LocalBusiness", 
        "FinancialService"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "AutomatedTeller", 
      "label": "Automated Teller", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "founder", 
        "founders", 
        "foundingDate", 
        "hasPOS", 
        "legalName", 
        "location", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "vatID", 
        "branchOf", 
        "currenciesAccepted", 
        "openingHours", 
        "paymentAccepted", 
        "priceRange"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "FinancialService"
      ], 
      "url": "http://schema.org/AutomatedTeller"
    }, 
    "AutomotiveBusiness": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "LocalBusiness"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "AutomotiveBusiness", 
      "label": "Automotive Business", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "founder", 
        "founders", 
        "foundingDate", 
        "hasPOS", 
        "legalName", 
        "location", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "vatID", 
        "branchOf", 
        "currenciesAccepted", 
        "openingHours", 
        "paymentAccepted", 
        "priceRange"
      ], 
      "specific_properties": [], 
      "subtypes": [
        "AutoBodyShop", 
        "AutoDealer", 
        "AutoPartsStore", 
        "AutoRental", 
        "AutoRepair", 
        "AutoWash", 
        "GasStation", 
        "MotorcycleDealer", 
        "MotorcycleRepair"
      ], 
      "supertypes": [
        "LocalBusiness"
      ], 
      "url": "http://schema.org/AutomotiveBusiness"
    }, 
    "Bakery": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "LocalBusiness", 
        "FoodEstablishment"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "Bakery", 
      "label": "Bakery", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "founder", 
        "founders", 
        "foundingDate", 
        "hasPOS", 
        "legalName", 
        "location", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "vatID", 
        "branchOf", 
        "currenciesAccepted", 
        "openingHours", 
        "paymentAccepted", 
        "priceRange", 
        "acceptsReservations", 
        "menu", 
        "servesCuisine"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "FoodEstablishment"
      ], 
      "url": "http://schema.org/Bakery"
    }, 
    "BankOrCreditUnion": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "LocalBusiness", 
        "FinancialService"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "BankOrCreditUnion", 
      "label": "Bank or Credit Union", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "founder", 
        "founders", 
        "foundingDate", 
        "hasPOS", 
        "legalName", 
        "location", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "vatID", 
        "branchOf", 
        "currenciesAccepted", 
        "openingHours", 
        "paymentAccepted", 
        "priceRange"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "FinancialService"
      ], 
      "url": "http://schema.org/BankOrCreditUnion"
    }, 
    "BarOrPub": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "LocalBusiness", 
        "FoodEstablishment"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "BarOrPub", 
      "label": "Bar or Pub", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "founder", 
        "founders", 
        "foundingDate", 
        "hasPOS", 
        "legalName", 
        "location", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "vatID", 
        "branchOf", 
        "currenciesAccepted", 
        "openingHours", 
        "paymentAccepted", 
        "priceRange", 
        "acceptsReservations", 
        "menu", 
        "servesCuisine"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "FoodEstablishment"
      ], 
      "url": "http://schema.org/BarOrPub"
    }, 
    "Beach": {
      "ancestors": [
        "Thing", 
        "Place", 
        "CivicStructure"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "Beach", 
      "label": "Beach", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "openingHours"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "CivicStructure"
      ], 
      "url": "http://schema.org/Beach"
    }, 
    "BeautySalon": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "LocalBusiness", 
        "HealthAndBeautyBusiness"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "BeautySalon", 
      "label": "Beauty Salon", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "founder", 
        "founders", 
        "foundingDate", 
        "hasPOS", 
        "legalName", 
        "location", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "vatID", 
        "branchOf", 
        "currenciesAccepted", 
        "openingHours", 
        "paymentAccepted", 
        "priceRange"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "HealthAndBeautyBusiness"
      ], 
      "url": "http://schema.org/BeautySalon"
    }, 
    "BedAndBreakfast": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "LocalBusiness", 
        "LodgingBusiness"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "BedAndBreakfast", 
      "label": "Bed And Breakfast", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "founder", 
        "founders", 
        "foundingDate", 
        "hasPOS", 
        "legalName", 
        "location", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "vatID", 
        "branchOf", 
        "currenciesAccepted", 
        "openingHours", 
        "paymentAccepted", 
        "priceRange"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "LodgingBusiness"
      ], 
      "url": "http://schema.org/BedAndBreakfast"
    }, 
    "BefriendAction": {
      "ancestors": [
        "Thing", 
        "Action", 
        "InteractAction"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "BefriendAction", 
      "label": "Befriend Action", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "agent", 
        "endTime", 
        "instrument", 
        "location", 
        "object", 
        "participant", 
        "result", 
        "startTime"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "InteractAction"
      ], 
      "url": "http://schema.org/BefriendAction"
    }, 
    "BikeStore": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "LocalBusiness", 
        "Store"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "BikeStore", 
      "label": "Bike Store", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "founder", 
        "founders", 
        "foundingDate", 
        "hasPOS", 
        "legalName", 
        "location", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "vatID", 
        "branchOf", 
        "currenciesAccepted", 
        "openingHours", 
        "paymentAccepted", 
        "priceRange"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "Store"
      ], 
      "url": "http://schema.org/BikeStore"
    }, 
    "Blog": {
      "ancestors": [
        "Thing", 
        "CreativeWork"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "Blog", 
      "label": "Blog", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "about", 
        "accessibilityAPI", 
        "accessibilityControl", 
        "accessibilityFeature", 
        "accessibilityHazard", 
        "accountablePerson", 
        "aggregateRating", 
        "alternativeHeadline", 
        "associatedMedia", 
        "audience", 
        "audio", 
        "author", 
        "award", 
        "awards", 
        "citation", 
        "comment", 
        "contentLocation", 
        "contentRating", 
        "contributor", 
        "copyrightHolder", 
        "copyrightYear", 
        "creator", 
        "dateCreated", 
        "dateModified", 
        "datePublished", 
        "discussionUrl", 
        "editor", 
        "educationalAlignment", 
        "educationalUse", 
        "encoding", 
        "encodings", 
        "genre", 
        "headline", 
        "inLanguage", 
        "interactionCount", 
        "interactivityType", 
        "isBasedOnUrl", 
        "isFamilyFriendly", 
        "keywords", 
        "learningResourceType", 
        "mentions", 
        "offers", 
        "provider", 
        "publisher", 
        "publishingPrinciples", 
        "review", 
        "reviews", 
        "sourceOrganization", 
        "text", 
        "thumbnailUrl", 
        "timeRequired", 
        "typicalAgeRange", 
        "version", 
        "video", 
        "blogPost", 
        "blogPosts"
      ], 
      "specific_properties": [
        "blogPost", 
        "blogPosts"
      ], 
      "subtypes": [], 
      "supertypes": [
        "CreativeWork"
      ], 
      "url": "http://schema.org/Blog"
    }, 
    "BlogPosting": {
      "ancestors": [
        "Thing", 
        "CreativeWork", 
        "Article"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "BlogPosting", 
      "label": "Blog Posting", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "about", 
        "accessibilityAPI", 
        "accessibilityControl", 
        "accessibilityFeature", 
        "accessibilityHazard", 
        "accountablePerson", 
        "aggregateRating", 
        "alternativeHeadline", 
        "associatedMedia", 
        "audience", 
        "audio", 
        "author", 
        "award", 
        "awards", 
        "citation", 
        "comment", 
        "contentLocation", 
        "contentRating", 
        "contributor", 
        "copyrightHolder", 
        "copyrightYear", 
        "creator", 
        "dateCreated", 
        "dateModified", 
        "datePublished", 
        "discussionUrl", 
        "editor", 
        "educationalAlignment", 
        "educationalUse", 
        "encoding", 
        "encodings", 
        "genre", 
        "headline", 
        "inLanguage", 
        "interactionCount", 
        "interactivityType", 
        "isBasedOnUrl", 
        "isFamilyFriendly", 
        "keywords", 
        "learningResourceType", 
        "mentions", 
        "offers", 
        "provider", 
        "publisher", 
        "publishingPrinciples", 
        "review", 
        "reviews", 
        "sourceOrganization", 
        "text", 
        "thumbnailUrl", 
        "timeRequired", 
        "typicalAgeRange", 
        "version", 
        "video", 
        "articleBody", 
        "articleSection", 
        "wordCount"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "Article"
      ], 
      "url": "http://schema.org/BlogPosting"
    }, 
    "BloodTest": {
      "ancestors": [
        "Thing", 
        "MedicalEntity", 
        "MedicalTest"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "BloodTest", 
      "label": "Blood Test", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "code", 
        "guideline", 
        "medicineSystem", 
        "recognizingAuthority", 
        "relevantSpecialty", 
        "study", 
        "affectedBy", 
        "normalRange", 
        "signDetected", 
        "usedToDiagnose", 
        "usesDevice"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "MedicalTest"
      ], 
      "url": "http://schema.org/BloodTest"
    }, 
    "BodyOfWater": {
      "ancestors": [
        "Thing", 
        "Place", 
        "Landform"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "BodyOfWater", 
      "label": "Body of Water", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone"
      ], 
      "specific_properties": [], 
      "subtypes": [
        "Canal", 
        "LakeBodyOfWater", 
        "OceanBodyOfWater", 
        "Pond", 
        "Reservoir", 
        "RiverBodyOfWater", 
        "SeaBodyOfWater", 
        "Waterfall"
      ], 
      "supertypes": [
        "Landform"
      ], 
      "url": "http://schema.org/BodyOfWater"
    }, 
    "Bone": {
      "ancestors": [
        "Thing", 
        "MedicalEntity", 
        "AnatomicalStructure"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "Bone", 
      "label": "Bone", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "code", 
        "guideline", 
        "medicineSystem", 
        "recognizingAuthority", 
        "relevantSpecialty", 
        "study", 
        "associatedPathophysiology", 
        "bodyLocation", 
        "connectedTo", 
        "diagram", 
        "function", 
        "partOfSystem", 
        "relatedCondition", 
        "relatedTherapy", 
        "subStructure"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "AnatomicalStructure"
      ], 
      "url": "http://schema.org/Bone"
    }, 
    "Book": {
      "ancestors": [
        "Thing", 
        "CreativeWork"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "Book", 
      "label": "Book", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "about", 
        "accessibilityAPI", 
        "accessibilityControl", 
        "accessibilityFeature", 
        "accessibilityHazard", 
        "accountablePerson", 
        "aggregateRating", 
        "alternativeHeadline", 
        "associatedMedia", 
        "audience", 
        "audio", 
        "author", 
        "award", 
        "awards", 
        "citation", 
        "comment", 
        "contentLocation", 
        "contentRating", 
        "contributor", 
        "copyrightHolder", 
        "copyrightYear", 
        "creator", 
        "dateCreated", 
        "dateModified", 
        "datePublished", 
        "discussionUrl", 
        "editor", 
        "educationalAlignment", 
        "educationalUse", 
        "encoding", 
        "encodings", 
        "genre", 
        "headline", 
        "inLanguage", 
        "interactionCount", 
        "interactivityType", 
        "isBasedOnUrl", 
        "isFamilyFriendly", 
        "keywords", 
        "learningResourceType", 
        "mentions", 
        "offers", 
        "provider", 
        "publisher", 
        "publishingPrinciples", 
        "review", 
        "reviews", 
        "sourceOrganization", 
        "text", 
        "thumbnailUrl", 
        "timeRequired", 
        "typicalAgeRange", 
        "version", 
        "video", 
        "bookEdition", 
        "bookFormat", 
        "illustrator", 
        "isbn", 
        "numberOfPages"
      ], 
      "specific_properties": [
        "bookEdition", 
        "bookFormat", 
        "illustrator", 
        "isbn", 
        "numberOfPages"
      ], 
      "subtypes": [], 
      "supertypes": [
        "CreativeWork"
      ], 
      "url": "http://schema.org/Book"
    }, 
    "BookFormatType": {
      "ancestors": [
        "Thing", 
        "Intangible", 
        "Enumeration"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "BookFormatType", 
      "instances": [
        "EBook", 
        "Hardcover", 
        "Paperback"
      ], 
      "label": "Book Format Type", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "Enumeration"
      ], 
      "url": "http://schema.org/BookFormatType"
    }, 
    "BookStore": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "LocalBusiness", 
        "Store"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "BookStore", 
      "label": "Book Store", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "founder", 
        "founders", 
        "foundingDate", 
        "hasPOS", 
        "legalName", 
        "location", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "vatID", 
        "branchOf", 
        "currenciesAccepted", 
        "openingHours", 
        "paymentAccepted", 
        "priceRange"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "Store"
      ], 
      "url": "http://schema.org/BookStore"
    }, 
    "BookmarkAction": {
      "ancestors": [
        "Thing", 
        "Action", 
        "OrganizeAction"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "BookmarkAction", 
      "label": "Bookmark Action", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "agent", 
        "endTime", 
        "instrument", 
        "location", 
        "object", 
        "participant", 
        "result", 
        "startTime"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "OrganizeAction"
      ], 
      "url": "http://schema.org/BookmarkAction"
    }, 
    "BorrowAction": {
      "ancestors": [
        "Thing", 
        "Action", 
        "TransferAction"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "BorrowAction", 
      "label": "Borrow Action", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "agent", 
        "endTime", 
        "instrument", 
        "location", 
        "object", 
        "participant", 
        "result", 
        "startTime", 
        "fromLocation", 
        "toLocation", 
        "lender"
      ], 
      "specific_properties": [
        "lender"
      ], 
      "subtypes": [], 
      "supertypes": [
        "TransferAction"
      ], 
      "url": "http://schema.org/BorrowAction"
    }, 
    "BowlingAlley": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "LocalBusiness", 
        "SportsActivityLocation"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "BowlingAlley", 
      "label": "Bowling Alley", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "founder", 
        "founders", 
        "foundingDate", 
        "hasPOS", 
        "legalName", 
        "location", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "vatID", 
        "branchOf", 
        "currenciesAccepted", 
        "openingHours", 
        "paymentAccepted", 
        "priceRange"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "SportsActivityLocation"
      ], 
      "url": "http://schema.org/BowlingAlley"
    }, 
    "BrainStructure": {
      "ancestors": [
        "Thing", 
        "MedicalEntity", 
        "AnatomicalStructure"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "BrainStructure", 
      "label": "Brain Structure", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "code", 
        "guideline", 
        "medicineSystem", 
        "recognizingAuthority", 
        "relevantSpecialty", 
        "study", 
        "associatedPathophysiology", 
        "bodyLocation", 
        "connectedTo", 
        "diagram", 
        "function", 
        "partOfSystem", 
        "relatedCondition", 
        "relatedTherapy", 
        "subStructure"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "AnatomicalStructure"
      ], 
      "url": "http://schema.org/BrainStructure"
    }, 
    "Brand": {
      "ancestors": [
        "Thing", 
        "Intangible"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "Brand", 
      "label": "Brand", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "logo"
      ], 
      "specific_properties": [
        "logo"
      ], 
      "subtypes": [], 
      "supertypes": [
        "Intangible"
      ], 
      "url": "http://schema.org/Brand"
    }, 
    "Brewery": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "LocalBusiness", 
        "FoodEstablishment"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "Brewery", 
      "label": "Brewery", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "founder", 
        "founders", 
        "foundingDate", 
        "hasPOS", 
        "legalName", 
        "location", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "vatID", 
        "branchOf", 
        "currenciesAccepted", 
        "openingHours", 
        "paymentAccepted", 
        "priceRange", 
        "acceptsReservations", 
        "menu", 
        "servesCuisine"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "FoodEstablishment"
      ], 
      "url": "http://schema.org/Brewery"
    }, 
    "BroadcastEvent": {
      "ancestors": [
        "Thing", 
        "Event", 
        "PublicationEvent"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "BroadcastEvent", 
      "label": "Broadcast Event", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "attendee", 
        "attendees", 
        "doorTime", 
        "duration", 
        "endDate", 
        "eventStatus", 
        "location", 
        "offers", 
        "performer", 
        "performers", 
        "previousStartDate", 
        "startDate", 
        "subEvent", 
        "subEvents", 
        "superEvent", 
        "typicalAgeRange", 
        "free", 
        "publishedOn"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "PublicationEvent"
      ], 
      "url": "http://schema.org/BroadcastEvent"
    }, 
    "BroadcastService": {
      "ancestors": [
        "Thing"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "BroadcastService", 
      "label": "Broadcast Service", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "area", 
        "broadcaster", 
        "parentService"
      ], 
      "specific_properties": [
        "area", 
        "broadcaster", 
        "parentService"
      ], 
      "subtypes": [], 
      "supertypes": [
        "Thing"
      ], 
      "url": "http://schema.org/BroadcastService"
    }, 
    "BuddhistTemple": {
      "ancestors": [
        "Thing", 
        "Place", 
        "CivicStructure", 
        "PlaceOfWorship"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "BuddhistTemple", 
      "label": "Buddhist Temple", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "openingHours"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "PlaceOfWorship"
      ], 
      "url": "http://schema.org/BuddhistTemple"
    }, 
    "BusStation": {
      "ancestors": [
        "Thing", 
        "Place", 
        "CivicStructure"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "BusStation", 
      "label": "Bus Station", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "openingHours"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "CivicStructure"
      ], 
      "url": "http://schema.org/BusStation"
    }, 
    "BusStop": {
      "ancestors": [
        "Thing", 
        "Place", 
        "CivicStructure"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "BusStop", 
      "label": "Bus Stop", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "openingHours"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "CivicStructure"
      ], 
      "url": "http://schema.org/BusStop"
    }, 
    "BusinessAudience": {
      "ancestors": [
        "Thing", 
        "Intangible", 
        "Audience"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "BusinessAudience", 
      "label": "Business Audience", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "audienceType", 
        "geographicArea", 
        "numberofEmployees", 
        "yearlyRevenue", 
        "yearsInOperation"
      ], 
      "specific_properties": [
        "numberofEmployees", 
        "yearlyRevenue", 
        "yearsInOperation"
      ], 
      "subtypes": [], 
      "supertypes": [
        "Audience"
      ], 
      "url": "http://schema.org/BusinessAudience"
    }, 
    "BusinessEntityType": {
      "ancestors": [
        "Thing", 
        "Intangible", 
        "Enumeration"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "BusinessEntityType", 
      "label": "Business Entity Type", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "Enumeration"
      ], 
      "url": "http://schema.org/BusinessEntityType"
    }, 
    "BusinessEvent": {
      "ancestors": [
        "Thing", 
        "Event"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "BusinessEvent", 
      "label": "Business Event", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "attendee", 
        "attendees", 
        "doorTime", 
        "duration", 
        "endDate", 
        "eventStatus", 
        "location", 
        "offers", 
        "performer", 
        "performers", 
        "previousStartDate", 
        "startDate", 
        "subEvent", 
        "subEvents", 
        "superEvent", 
        "typicalAgeRange"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "Event"
      ], 
      "url": "http://schema.org/BusinessEvent"
    }, 
    "BusinessFunction": {
      "ancestors": [
        "Thing", 
        "Intangible", 
        "Enumeration"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "BusinessFunction", 
      "label": "Business Function", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "Enumeration"
      ], 
      "url": "http://schema.org/BusinessFunction"
    }, 
    "BuyAction": {
      "ancestors": [
        "Thing", 
        "Action", 
        "TradeAction"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "BuyAction", 
      "label": "Buy Action", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "agent", 
        "endTime", 
        "instrument", 
        "location", 
        "object", 
        "participant", 
        "result", 
        "startTime", 
        "price", 
        "vendor", 
        "warrantyPromise"
      ], 
      "specific_properties": [
        "vendor", 
        "warrantyPromise"
      ], 
      "subtypes": [], 
      "supertypes": [
        "TradeAction"
      ], 
      "url": "http://schema.org/BuyAction"
    }, 
    "CafeOrCoffeeShop": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "LocalBusiness", 
        "FoodEstablishment"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "CafeOrCoffeeShop", 
      "label": "Cafe or Coffee Shop", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "founder", 
        "founders", 
        "foundingDate", 
        "hasPOS", 
        "legalName", 
        "location", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "vatID", 
        "branchOf", 
        "currenciesAccepted", 
        "openingHours", 
        "paymentAccepted", 
        "priceRange", 
        "acceptsReservations", 
        "menu", 
        "servesCuisine"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "FoodEstablishment"
      ], 
      "url": "http://schema.org/CafeOrCoffeeShop"
    }, 
    "Campground": {
      "ancestors": [
        "Thing", 
        "Place", 
        "CivicStructure"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "Campground", 
      "label": "Campground", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "openingHours"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "CivicStructure"
      ], 
      "url": "http://schema.org/Campground"
    }, 
    "Canal": {
      "ancestors": [
        "Thing", 
        "Place", 
        "Landform", 
        "BodyOfWater"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "Canal", 
      "label": "Canal", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "BodyOfWater"
      ], 
      "url": "http://schema.org/Canal"
    }, 
    "CancelAction": {
      "ancestors": [
        "Thing", 
        "Action", 
        "OrganizeAction", 
        "PlanAction"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "CancelAction", 
      "label": "Cancel Action", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "agent", 
        "endTime", 
        "instrument", 
        "location", 
        "object", 
        "participant", 
        "result", 
        "startTime", 
        "scheduledTime"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "PlanAction"
      ], 
      "url": "http://schema.org/CancelAction"
    }, 
    "Casino": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "LocalBusiness", 
        "EntertainmentBusiness"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "Casino", 
      "label": "Casino", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "founder", 
        "founders", 
        "foundingDate", 
        "hasPOS", 
        "legalName", 
        "location", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "vatID", 
        "branchOf", 
        "currenciesAccepted", 
        "openingHours", 
        "paymentAccepted", 
        "priceRange"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "EntertainmentBusiness"
      ], 
      "url": "http://schema.org/Casino"
    }, 
    "CatholicChurch": {
      "ancestors": [
        "Thing", 
        "Place", 
        "CivicStructure", 
        "PlaceOfWorship"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "CatholicChurch", 
      "label": "Catholic Church", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "openingHours"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "PlaceOfWorship"
      ], 
      "url": "http://schema.org/CatholicChurch"
    }, 
    "Cemetery": {
      "ancestors": [
        "Thing", 
        "Place", 
        "CivicStructure"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "Cemetery", 
      "label": "Cemetery", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "openingHours"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "CivicStructure"
      ], 
      "url": "http://schema.org/Cemetery"
    }, 
    "CheckAction": {
      "ancestors": [
        "Thing", 
        "Action", 
        "FindAction"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "CheckAction", 
      "label": "Check Action", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "agent", 
        "endTime", 
        "instrument", 
        "location", 
        "object", 
        "participant", 
        "result", 
        "startTime"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "FindAction"
      ], 
      "url": "http://schema.org/CheckAction"
    }, 
    "CheckInAction": {
      "ancestors": [
        "Thing", 
        "Action", 
        "InteractAction", 
        "CommunicateAction"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "CheckInAction", 
      "label": "Check in Action", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "agent", 
        "endTime", 
        "instrument", 
        "location", 
        "object", 
        "participant", 
        "result", 
        "startTime", 
        "about", 
        "language", 
        "recipient"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "CommunicateAction"
      ], 
      "url": "http://schema.org/CheckInAction"
    }, 
    "CheckOutAction": {
      "ancestors": [
        "Thing", 
        "Action", 
        "InteractAction", 
        "CommunicateAction"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "CheckOutAction", 
      "label": "Check Out Action", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "agent", 
        "endTime", 
        "instrument", 
        "location", 
        "object", 
        "participant", 
        "result", 
        "startTime", 
        "about", 
        "language", 
        "recipient"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "CommunicateAction"
      ], 
      "url": "http://schema.org/CheckOutAction"
    }, 
    "CheckoutPage": {
      "ancestors": [
        "Thing", 
        "CreativeWork", 
        "WebPage"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "CheckoutPage", 
      "label": "Checkout Page", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "about", 
        "accessibilityAPI", 
        "accessibilityControl", 
        "accessibilityFeature", 
        "accessibilityHazard", 
        "accountablePerson", 
        "aggregateRating", 
        "alternativeHeadline", 
        "associatedMedia", 
        "audience", 
        "audio", 
        "author", 
        "award", 
        "awards", 
        "citation", 
        "comment", 
        "contentLocation", 
        "contentRating", 
        "contributor", 
        "copyrightHolder", 
        "copyrightYear", 
        "creator", 
        "dateCreated", 
        "dateModified", 
        "datePublished", 
        "discussionUrl", 
        "editor", 
        "educationalAlignment", 
        "educationalUse", 
        "encoding", 
        "encodings", 
        "genre", 
        "headline", 
        "inLanguage", 
        "interactionCount", 
        "interactivityType", 
        "isBasedOnUrl", 
        "isFamilyFriendly", 
        "keywords", 
        "learningResourceType", 
        "mentions", 
        "offers", 
        "provider", 
        "publisher", 
        "publishingPrinciples", 
        "review", 
        "reviews", 
        "sourceOrganization", 
        "text", 
        "thumbnailUrl", 
        "timeRequired", 
        "typicalAgeRange", 
        "version", 
        "video", 
        "breadcrumb", 
        "isPartOf", 
        "lastReviewed", 
        "mainContentOfPage", 
        "primaryImageOfPage", 
        "relatedLink", 
        "reviewedBy", 
        "significantLink", 
        "significantLinks", 
        "specialty"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "WebPage"
      ], 
      "url": "http://schema.org/CheckoutPage"
    }, 
    "ChildCare": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "LocalBusiness"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "ChildCare", 
      "label": "Child Care", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "founder", 
        "founders", 
        "foundingDate", 
        "hasPOS", 
        "legalName", 
        "location", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "vatID", 
        "branchOf", 
        "currenciesAccepted", 
        "openingHours", 
        "paymentAccepted", 
        "priceRange"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "LocalBusiness"
      ], 
      "url": "http://schema.org/ChildCare"
    }, 
    "ChildrensEvent": {
      "ancestors": [
        "Thing", 
        "Event"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "ChildrensEvent", 
      "label": "Childrens Event", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "attendee", 
        "attendees", 
        "doorTime", 
        "duration", 
        "endDate", 
        "eventStatus", 
        "location", 
        "offers", 
        "performer", 
        "performers", 
        "previousStartDate", 
        "startDate", 
        "subEvent", 
        "subEvents", 
        "superEvent", 
        "typicalAgeRange"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "Event"
      ], 
      "url": "http://schema.org/ChildrensEvent"
    }, 
    "ChooseAction": {
      "ancestors": [
        "Thing", 
        "Action", 
        "AssessAction"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "ChooseAction", 
      "label": "Choose Action", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "agent", 
        "endTime", 
        "instrument", 
        "location", 
        "object", 
        "participant", 
        "result", 
        "startTime", 
        "option"
      ], 
      "specific_properties": [
        "option"
      ], 
      "subtypes": [
        "VoteAction"
      ], 
      "supertypes": [
        "AssessAction"
      ], 
      "url": "http://schema.org/ChooseAction"
    }, 
    "Church": {
      "ancestors": [
        "Thing", 
        "Place", 
        "CivicStructure", 
        "PlaceOfWorship"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "Church", 
      "label": "Church", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "openingHours"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "PlaceOfWorship"
      ], 
      "url": "http://schema.org/Church"
    }, 
    "City": {
      "ancestors": [
        "Thing", 
        "Place", 
        "AdministrativeArea"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "City", 
      "label": "City", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "AdministrativeArea"
      ], 
      "url": "http://schema.org/City"
    }, 
    "CityHall": {
      "ancestors": [
        "Thing", 
        "Place", 
        "CivicStructure", 
        "GovernmentBuilding"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "CityHall", 
      "label": "City Hall", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "openingHours"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "GovernmentBuilding"
      ], 
      "url": "http://schema.org/CityHall"
    }, 
    "CivicStructure": {
      "ancestors": [
        "Thing", 
        "Place"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "CivicStructure", 
      "label": "Civic Structure", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "openingHours"
      ], 
      "specific_properties": [
        "openingHours"
      ], 
      "subtypes": [
        "Airport", 
        "Aquarium", 
        "Beach", 
        "BusStation", 
        "BusStop", 
        "Campground", 
        "Cemetery", 
        "Crematorium", 
        "EventVenue", 
        "FireStation", 
        "GovernmentBuilding", 
        "Hospital", 
        "MovieTheater", 
        "Museum", 
        "MusicVenue", 
        "Park", 
        "ParkingFacility", 
        "PerformingArtsTheater", 
        "PlaceOfWorship", 
        "Playground", 
        "PoliceStation", 
        "RVPark", 
        "StadiumOrArena", 
        "SubwayStation", 
        "TaxiStand", 
        "TrainStation", 
        "Zoo"
      ], 
      "supertypes": [
        "Place"
      ], 
      "url": "http://schema.org/CivicStructure"
    }, 
    "Class": {
      "ancestors": [
        "Thing"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "Class", 
      "label": "Class", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "Thing"
      ], 
      "url": "http://schema.org/Class"
    }, 
    "Clip": {
      "ancestors": [
        "Thing", 
        "CreativeWork"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "Clip", 
      "label": "Clip", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "about", 
        "accessibilityAPI", 
        "accessibilityControl", 
        "accessibilityFeature", 
        "accessibilityHazard", 
        "accountablePerson", 
        "aggregateRating", 
        "alternativeHeadline", 
        "associatedMedia", 
        "audience", 
        "audio", 
        "author", 
        "award", 
        "awards", 
        "citation", 
        "comment", 
        "contentLocation", 
        "contentRating", 
        "contributor", 
        "copyrightHolder", 
        "copyrightYear", 
        "creator", 
        "dateCreated", 
        "dateModified", 
        "datePublished", 
        "discussionUrl", 
        "editor", 
        "educationalAlignment", 
        "educationalUse", 
        "encoding", 
        "encodings", 
        "genre", 
        "headline", 
        "inLanguage", 
        "interactionCount", 
        "interactivityType", 
        "isBasedOnUrl", 
        "isFamilyFriendly", 
        "keywords", 
        "learningResourceType", 
        "mentions", 
        "offers", 
        "provider", 
        "publisher", 
        "publishingPrinciples", 
        "review", 
        "reviews", 
        "sourceOrganization", 
        "text", 
        "thumbnailUrl", 
        "timeRequired", 
        "typicalAgeRange", 
        "version", 
        "video", 
        "clipNumber", 
        "partOfEpisode", 
        "partOfSeason", 
        "partOfSeries", 
        "position", 
        "publication"
      ], 
      "specific_properties": [
        "clipNumber", 
        "partOfEpisode", 
        "partOfSeason", 
        "partOfSeries", 
        "position", 
        "publication"
      ], 
      "subtypes": [
        "RadioClip", 
        "TVClip"
      ], 
      "supertypes": [
        "CreativeWork"
      ], 
      "url": "http://schema.org/Clip"
    }, 
    "ClothingStore": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "LocalBusiness", 
        "Store"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "ClothingStore", 
      "label": "Clothing Store", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "founder", 
        "founders", 
        "foundingDate", 
        "hasPOS", 
        "legalName", 
        "location", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "vatID", 
        "branchOf", 
        "currenciesAccepted", 
        "openingHours", 
        "paymentAccepted", 
        "priceRange"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "Store"
      ], 
      "url": "http://schema.org/ClothingStore"
    }, 
    "Code": {
      "ancestors": [
        "Thing", 
        "CreativeWork"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "Code", 
      "label": "Code", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "about", 
        "accessibilityAPI", 
        "accessibilityControl", 
        "accessibilityFeature", 
        "accessibilityHazard", 
        "accountablePerson", 
        "aggregateRating", 
        "alternativeHeadline", 
        "associatedMedia", 
        "audience", 
        "audio", 
        "author", 
        "award", 
        "awards", 
        "citation", 
        "comment", 
        "contentLocation", 
        "contentRating", 
        "contributor", 
        "copyrightHolder", 
        "copyrightYear", 
        "creator", 
        "dateCreated", 
        "dateModified", 
        "datePublished", 
        "discussionUrl", 
        "editor", 
        "educationalAlignment", 
        "educationalUse", 
        "encoding", 
        "encodings", 
        "genre", 
        "headline", 
        "inLanguage", 
        "interactionCount", 
        "interactivityType", 
        "isBasedOnUrl", 
        "isFamilyFriendly", 
        "keywords", 
        "learningResourceType", 
        "mentions", 
        "offers", 
        "provider", 
        "publisher", 
        "publishingPrinciples", 
        "review", 
        "reviews", 
        "sourceOrganization", 
        "text", 
        "thumbnailUrl", 
        "timeRequired", 
        "typicalAgeRange", 
        "version", 
        "video", 
        "codeRepository", 
        "programmingLanguage", 
        "runtime", 
        "sampleType", 
        "targetProduct"
      ], 
      "specific_properties": [
        "codeRepository", 
        "programmingLanguage", 
        "runtime", 
        "sampleType", 
        "targetProduct"
      ], 
      "subtypes": [], 
      "supertypes": [
        "CreativeWork"
      ], 
      "url": "http://schema.org/Code"
    }, 
    "CollectionPage": {
      "ancestors": [
        "Thing", 
        "CreativeWork", 
        "WebPage"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "CollectionPage", 
      "label": "Collection Page", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "about", 
        "accessibilityAPI", 
        "accessibilityControl", 
        "accessibilityFeature", 
        "accessibilityHazard", 
        "accountablePerson", 
        "aggregateRating", 
        "alternativeHeadline", 
        "associatedMedia", 
        "audience", 
        "audio", 
        "author", 
        "award", 
        "awards", 
        "citation", 
        "comment", 
        "contentLocation", 
        "contentRating", 
        "contributor", 
        "copyrightHolder", 
        "copyrightYear", 
        "creator", 
        "dateCreated", 
        "dateModified", 
        "datePublished", 
        "discussionUrl", 
        "editor", 
        "educationalAlignment", 
        "educationalUse", 
        "encoding", 
        "encodings", 
        "genre", 
        "headline", 
        "inLanguage", 
        "interactionCount", 
        "interactivityType", 
        "isBasedOnUrl", 
        "isFamilyFriendly", 
        "keywords", 
        "learningResourceType", 
        "mentions", 
        "offers", 
        "provider", 
        "publisher", 
        "publishingPrinciples", 
        "review", 
        "reviews", 
        "sourceOrganization", 
        "text", 
        "thumbnailUrl", 
        "timeRequired", 
        "typicalAgeRange", 
        "version", 
        "video", 
        "breadcrumb", 
        "isPartOf", 
        "lastReviewed", 
        "mainContentOfPage", 
        "primaryImageOfPage", 
        "relatedLink", 
        "reviewedBy", 
        "significantLink", 
        "significantLinks", 
        "specialty"
      ], 
      "specific_properties": [], 
      "subtypes": [
        "ImageGallery", 
        "VideoGallery"
      ], 
      "supertypes": [
        "WebPage"
      ], 
      "url": "http://schema.org/CollectionPage"
    }, 
    "CollegeOrUniversity": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "EducationalOrganization"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "CollegeOrUniversity", 
      "label": "College or University", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "event", 
        "events", 
        "faxNumber", 
        "founder", 
        "founders", 
        "foundingDate", 
        "globalLocationNumber", 
        "hasPOS", 
        "interactionCount", 
        "isicV4", 
        "legalName", 
        "location", 
        "logo", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "review", 
        "reviews", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "telephone", 
        "vatID", 
        "alumni"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "EducationalOrganization"
      ], 
      "url": "http://schema.org/CollegeOrUniversity"
    }, 
    "ComedyClub": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "LocalBusiness", 
        "EntertainmentBusiness"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "ComedyClub", 
      "label": "Comedy Club", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "founder", 
        "founders", 
        "foundingDate", 
        "hasPOS", 
        "legalName", 
        "location", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "vatID", 
        "branchOf", 
        "currenciesAccepted", 
        "openingHours", 
        "paymentAccepted", 
        "priceRange"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "EntertainmentBusiness"
      ], 
      "url": "http://schema.org/ComedyClub"
    }, 
    "ComedyEvent": {
      "ancestors": [
        "Thing", 
        "Event"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "ComedyEvent", 
      "label": "Comedy Event", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "attendee", 
        "attendees", 
        "doorTime", 
        "duration", 
        "endDate", 
        "eventStatus", 
        "location", 
        "offers", 
        "performer", 
        "performers", 
        "previousStartDate", 
        "startDate", 
        "subEvent", 
        "subEvents", 
        "superEvent", 
        "typicalAgeRange"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "Event"
      ], 
      "url": "http://schema.org/ComedyEvent"
    }, 
    "Comment": {
      "ancestors": [
        "Thing", 
        "CreativeWork"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "Comment", 
      "label": "Comment", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "about", 
        "accessibilityAPI", 
        "accessibilityControl", 
        "accessibilityFeature", 
        "accessibilityHazard", 
        "accountablePerson", 
        "aggregateRating", 
        "alternativeHeadline", 
        "associatedMedia", 
        "audience", 
        "audio", 
        "author", 
        "award", 
        "awards", 
        "citation", 
        "comment", 
        "contentLocation", 
        "contentRating", 
        "contributor", 
        "copyrightHolder", 
        "copyrightYear", 
        "creator", 
        "dateCreated", 
        "dateModified", 
        "datePublished", 
        "discussionUrl", 
        "editor", 
        "educationalAlignment", 
        "educationalUse", 
        "encoding", 
        "encodings", 
        "genre", 
        "headline", 
        "inLanguage", 
        "interactionCount", 
        "interactivityType", 
        "isBasedOnUrl", 
        "isFamilyFriendly", 
        "keywords", 
        "learningResourceType", 
        "mentions", 
        "offers", 
        "provider", 
        "publisher", 
        "publishingPrinciples", 
        "review", 
        "reviews", 
        "sourceOrganization", 
        "text", 
        "thumbnailUrl", 
        "timeRequired", 
        "typicalAgeRange", 
        "version", 
        "video"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "CreativeWork"
      ], 
      "url": "http://schema.org/Comment"
    }, 
    "CommentAction": {
      "ancestors": [
        "Thing", 
        "Action", 
        "InteractAction", 
        "CommunicateAction"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "CommentAction", 
      "label": "Comment Action", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "agent", 
        "endTime", 
        "instrument", 
        "location", 
        "object", 
        "participant", 
        "result", 
        "startTime", 
        "about", 
        "language", 
        "recipient"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "CommunicateAction"
      ], 
      "url": "http://schema.org/CommentAction"
    }, 
    "CommunicateAction": {
      "ancestors": [
        "Thing", 
        "Action", 
        "InteractAction"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "CommunicateAction", 
      "label": "Communicate Action", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "agent", 
        "endTime", 
        "instrument", 
        "location", 
        "object", 
        "participant", 
        "result", 
        "startTime", 
        "about", 
        "language", 
        "recipient"
      ], 
      "specific_properties": [
        "about", 
        "language", 
        "recipient"
      ], 
      "subtypes": [
        "AskAction", 
        "CheckInAction", 
        "CheckOutAction", 
        "CommentAction", 
        "InformAction", 
        "InviteAction", 
        "ReplyAction", 
        "ShareAction"
      ], 
      "supertypes": [
        "InteractAction"
      ], 
      "url": "http://schema.org/CommunicateAction"
    }, 
    "ComputerStore": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "LocalBusiness", 
        "Store"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "ComputerStore", 
      "label": "Computer Store", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "founder", 
        "founders", 
        "foundingDate", 
        "hasPOS", 
        "legalName", 
        "location", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "vatID", 
        "branchOf", 
        "currenciesAccepted", 
        "openingHours", 
        "paymentAccepted", 
        "priceRange"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "Store"
      ], 
      "url": "http://schema.org/ComputerStore"
    }, 
    "ConfirmAction": {
      "ancestors": [
        "Thing", 
        "Action", 
        "InteractAction", 
        "CommunicateAction", 
        "InformAction"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "ConfirmAction", 
      "label": "Confirm Action", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "agent", 
        "endTime", 
        "instrument", 
        "location", 
        "object", 
        "participant", 
        "result", 
        "startTime", 
        "about", 
        "language", 
        "recipient", 
        "event"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "InformAction"
      ], 
      "url": "http://schema.org/ConfirmAction"
    }, 
    "ConsumeAction": {
      "ancestors": [
        "Thing", 
        "Action"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "ConsumeAction", 
      "label": "Consume Action", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "agent", 
        "endTime", 
        "instrument", 
        "location", 
        "object", 
        "participant", 
        "result", 
        "startTime"
      ], 
      "specific_properties": [], 
      "subtypes": [
        "DrinkAction", 
        "EatAction", 
        "InstallAction", 
        "ListenAction", 
        "ReadAction", 
        "UseAction", 
        "ViewAction", 
        "WatchAction"
      ], 
      "supertypes": [
        "Action"
      ], 
      "url": "http://schema.org/ConsumeAction"
    }, 
    "ContactPage": {
      "ancestors": [
        "Thing", 
        "CreativeWork", 
        "WebPage"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "ContactPage", 
      "label": "Contact Page", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "about", 
        "accessibilityAPI", 
        "accessibilityControl", 
        "accessibilityFeature", 
        "accessibilityHazard", 
        "accountablePerson", 
        "aggregateRating", 
        "alternativeHeadline", 
        "associatedMedia", 
        "audience", 
        "audio", 
        "author", 
        "award", 
        "awards", 
        "citation", 
        "comment", 
        "contentLocation", 
        "contentRating", 
        "contributor", 
        "copyrightHolder", 
        "copyrightYear", 
        "creator", 
        "dateCreated", 
        "dateModified", 
        "datePublished", 
        "discussionUrl", 
        "editor", 
        "educationalAlignment", 
        "educationalUse", 
        "encoding", 
        "encodings", 
        "genre", 
        "headline", 
        "inLanguage", 
        "interactionCount", 
        "interactivityType", 
        "isBasedOnUrl", 
        "isFamilyFriendly", 
        "keywords", 
        "learningResourceType", 
        "mentions", 
        "offers", 
        "provider", 
        "publisher", 
        "publishingPrinciples", 
        "review", 
        "reviews", 
        "sourceOrganization", 
        "text", 
        "thumbnailUrl", 
        "timeRequired", 
        "typicalAgeRange", 
        "version", 
        "video", 
        "breadcrumb", 
        "isPartOf", 
        "lastReviewed", 
        "mainContentOfPage", 
        "primaryImageOfPage", 
        "relatedLink", 
        "reviewedBy", 
        "significantLink", 
        "significantLinks", 
        "specialty"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "WebPage"
      ], 
      "url": "http://schema.org/ContactPage"
    }, 
    "ContactPoint": {
      "ancestors": [
        "Thing", 
        "Intangible", 
        "StructuredValue"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "ContactPoint", 
      "label": "Contact Point", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "areaServed", 
        "availableLanguage", 
        "contactOption", 
        "contactType", 
        "email", 
        "faxNumber", 
        "hoursAvailable", 
        "productSupported", 
        "telephone"
      ], 
      "specific_properties": [
        "areaServed", 
        "availableLanguage", 
        "contactOption", 
        "contactType", 
        "email", 
        "faxNumber", 
        "hoursAvailable", 
        "productSupported", 
        "telephone"
      ], 
      "subtypes": [
        "PostalAddress"
      ], 
      "supertypes": [
        "StructuredValue"
      ], 
      "url": "http://schema.org/ContactPoint"
    }, 
    "ContactPointOption": {
      "ancestors": [
        "Thing", 
        "Intangible", 
        "Enumeration"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "ContactPointOption", 
      "instances": [
        "HearingImpairedSupported", 
        "TollFree"
      ], 
      "label": "Contact Point Option", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "Enumeration"
      ], 
      "url": "http://schema.org/ContactPointOption"
    }, 
    "Continent": {
      "ancestors": [
        "Thing", 
        "Place", 
        "Landform"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "Continent", 
      "label": "Continent", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "Landform"
      ], 
      "url": "http://schema.org/Continent"
    }, 
    "ConvenienceStore": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "LocalBusiness", 
        "Store"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "ConvenienceStore", 
      "label": "Convenience Store", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "founder", 
        "founders", 
        "foundingDate", 
        "hasPOS", 
        "legalName", 
        "location", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "vatID", 
        "branchOf", 
        "currenciesAccepted", 
        "openingHours", 
        "paymentAccepted", 
        "priceRange"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "Store"
      ], 
      "url": "http://schema.org/ConvenienceStore"
    }, 
    "CookAction": {
      "ancestors": [
        "Thing", 
        "Action", 
        "CreateAction"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "CookAction", 
      "label": "Cook Action", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "agent", 
        "endTime", 
        "instrument", 
        "location", 
        "object", 
        "participant", 
        "result", 
        "startTime", 
        "foodEstablishment", 
        "foodEvent", 
        "recipe"
      ], 
      "specific_properties": [
        "foodEstablishment", 
        "foodEvent", 
        "recipe"
      ], 
      "subtypes": [], 
      "supertypes": [
        "CreateAction"
      ], 
      "url": "http://schema.org/CookAction"
    }, 
    "Corporation": {
      "ancestors": [
        "Thing", 
        "Organization"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "Corporation", 
      "label": "Corporation", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "event", 
        "events", 
        "faxNumber", 
        "founder", 
        "founders", 
        "foundingDate", 
        "globalLocationNumber", 
        "hasPOS", 
        "interactionCount", 
        "isicV4", 
        "legalName", 
        "location", 
        "logo", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "review", 
        "reviews", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "telephone", 
        "vatID", 
        "tickerSymbol"
      ], 
      "specific_properties": [
        "tickerSymbol"
      ], 
      "subtypes": [], 
      "supertypes": [
        "Organization"
      ], 
      "url": "http://schema.org/Corporation"
    }, 
    "Country": {
      "ancestors": [
        "Thing", 
        "Place", 
        "AdministrativeArea"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "Country", 
      "label": "Country", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "AdministrativeArea"
      ], 
      "url": "http://schema.org/Country"
    }, 
    "Courthouse": {
      "ancestors": [
        "Thing", 
        "Place", 
        "CivicStructure", 
        "GovernmentBuilding"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "Courthouse", 
      "label": "Courthouse", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "openingHours"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "GovernmentBuilding"
      ], 
      "url": "http://schema.org/Courthouse"
    }, 
    "CreateAction": {
      "ancestors": [
        "Thing", 
        "Action"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "CreateAction", 
      "label": "Create Action", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "agent", 
        "endTime", 
        "instrument", 
        "location", 
        "object", 
        "participant", 
        "result", 
        "startTime"
      ], 
      "specific_properties": [], 
      "subtypes": [
        "CookAction", 
        "DrawAction", 
        "FilmAction", 
        "PaintAction", 
        "PhotographAction", 
        "WriteAction"
      ], 
      "supertypes": [
        "Action"
      ], 
      "url": "http://schema.org/CreateAction"
    }, 
    "CreativeWork": {
      "ancestors": [
        "Thing"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "CreativeWork", 
      "label": "Creative Work", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "about", 
        "accessibilityAPI", 
        "accessibilityControl", 
        "accessibilityFeature", 
        "accessibilityHazard", 
        "accountablePerson", 
        "aggregateRating", 
        "alternativeHeadline", 
        "associatedMedia", 
        "audience", 
        "audio", 
        "author", 
        "award", 
        "awards", 
        "citation", 
        "comment", 
        "contentLocation", 
        "contentRating", 
        "contributor", 
        "copyrightHolder", 
        "copyrightYear", 
        "creator", 
        "dateCreated", 
        "dateModified", 
        "datePublished", 
        "discussionUrl", 
        "editor", 
        "educationalAlignment", 
        "educationalUse", 
        "encoding", 
        "encodings", 
        "genre", 
        "headline", 
        "inLanguage", 
        "interactionCount", 
        "interactivityType", 
        "isBasedOnUrl", 
        "isFamilyFriendly", 
        "keywords", 
        "learningResourceType", 
        "mentions", 
        "offers", 
        "provider", 
        "publisher", 
        "publishingPrinciples", 
        "review", 
        "reviews", 
        "sourceOrganization", 
        "text", 
        "thumbnailUrl", 
        "timeRequired", 
        "typicalAgeRange", 
        "version", 
        "video"
      ], 
      "specific_properties": [
        "about", 
        "accessibilityAPI", 
        "accessibilityControl", 
        "accessibilityFeature", 
        "accessibilityHazard", 
        "accountablePerson", 
        "aggregateRating", 
        "alternativeHeadline", 
        "associatedMedia", 
        "audience", 
        "audio", 
        "author", 
        "award", 
        "awards", 
        "citation", 
        "comment", 
        "contentLocation", 
        "contentRating", 
        "contributor", 
        "copyrightHolder", 
        "copyrightYear", 
        "creator", 
        "dateCreated", 
        "dateModified", 
        "datePublished", 
        "discussionUrl", 
        "editor", 
        "educationalAlignment", 
        "educationalUse", 
        "encoding", 
        "encodings", 
        "genre", 
        "headline", 
        "inLanguage", 
        "interactionCount", 
        "interactivityType", 
        "isBasedOnUrl", 
        "isFamilyFriendly", 
        "keywords", 
        "learningResourceType", 
        "mentions", 
        "offers", 
        "provider", 
        "publisher", 
        "publishingPrinciples", 
        "review", 
        "reviews", 
        "sourceOrganization", 
        "text", 
        "thumbnailUrl", 
        "timeRequired", 
        "typicalAgeRange", 
        "version", 
        "video"
      ], 
      "subtypes": [
        "Article", 
        "Blog", 
        "Book", 
        "Clip", 
        "Code", 
        "Comment", 
        "DataCatalog", 
        "Dataset", 
        "Diet", 
        "Episode", 
        "ExercisePlan", 
        "ItemList", 
        "Map", 
        "MediaObject", 
        "Movie", 
        "MusicPlaylist", 
        "MusicRecording", 
        "Painting", 
        "Photograph", 
        "Recipe", 
        "Review", 
        "Sculpture", 
        "Season", 
        "Series", 
        "SoftwareApplication", 
        "TVSeason", 
        "TVSeries", 
        "WebPage", 
        "WebPageElement"
      ], 
      "supertypes": [
        "Thing"
      ], 
      "url": "http://schema.org/CreativeWork"
    }, 
    "CreditCard": {
      "ancestors": [
        "Thing", 
        "Intangible", 
        "Enumeration", 
        "PaymentMethod"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "CreditCard", 
      "label": "Credit Card", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "PaymentMethod"
      ], 
      "url": "http://schema.org/CreditCard"
    }, 
    "Crematorium": {
      "ancestors": [
        "Thing", 
        "Place", 
        "CivicStructure"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "Crematorium", 
      "label": "Crematorium", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "openingHours"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "CivicStructure"
      ], 
      "url": "http://schema.org/Crematorium"
    }, 
    "DDxElement": {
      "ancestors": [
        "Thing", 
        "MedicalEntity", 
        "MedicalIntangible"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "DDxElement", 
      "label": "D Dx Element", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "code", 
        "guideline", 
        "medicineSystem", 
        "recognizingAuthority", 
        "relevantSpecialty", 
        "study", 
        "diagnosis", 
        "distinguishingSign"
      ], 
      "specific_properties": [
        "diagnosis", 
        "distinguishingSign"
      ], 
      "subtypes": [], 
      "supertypes": [
        "MedicalIntangible"
      ], 
      "url": "http://schema.org/DDxElement"
    }, 
    "DanceEvent": {
      "ancestors": [
        "Thing", 
        "Event"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "DanceEvent", 
      "label": "Dance Event", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "attendee", 
        "attendees", 
        "doorTime", 
        "duration", 
        "endDate", 
        "eventStatus", 
        "location", 
        "offers", 
        "performer", 
        "performers", 
        "previousStartDate", 
        "startDate", 
        "subEvent", 
        "subEvents", 
        "superEvent", 
        "typicalAgeRange"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "Event"
      ], 
      "url": "http://schema.org/DanceEvent"
    }, 
    "DanceGroup": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "PerformingGroup"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "DanceGroup", 
      "label": "Dance Group", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "event", 
        "events", 
        "faxNumber", 
        "founder", 
        "founders", 
        "foundingDate", 
        "globalLocationNumber", 
        "hasPOS", 
        "interactionCount", 
        "isicV4", 
        "legalName", 
        "location", 
        "logo", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "review", 
        "reviews", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "telephone", 
        "vatID"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "PerformingGroup"
      ], 
      "url": "http://schema.org/DanceGroup"
    }, 
    "DataCatalog": {
      "ancestors": [
        "Thing", 
        "CreativeWork"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "DataCatalog", 
      "label": "Data Catalog", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "about", 
        "accessibilityAPI", 
        "accessibilityControl", 
        "accessibilityFeature", 
        "accessibilityHazard", 
        "accountablePerson", 
        "aggregateRating", 
        "alternativeHeadline", 
        "associatedMedia", 
        "audience", 
        "audio", 
        "author", 
        "award", 
        "awards", 
        "citation", 
        "comment", 
        "contentLocation", 
        "contentRating", 
        "contributor", 
        "copyrightHolder", 
        "copyrightYear", 
        "creator", 
        "dateCreated", 
        "dateModified", 
        "datePublished", 
        "discussionUrl", 
        "editor", 
        "educationalAlignment", 
        "educationalUse", 
        "encoding", 
        "encodings", 
        "genre", 
        "headline", 
        "inLanguage", 
        "interactionCount", 
        "interactivityType", 
        "isBasedOnUrl", 
        "isFamilyFriendly", 
        "keywords", 
        "learningResourceType", 
        "mentions", 
        "offers", 
        "provider", 
        "publisher", 
        "publishingPrinciples", 
        "review", 
        "reviews", 
        "sourceOrganization", 
        "text", 
        "thumbnailUrl", 
        "timeRequired", 
        "typicalAgeRange", 
        "version", 
        "video", 
        "dataset"
      ], 
      "specific_properties": [
        "dataset"
      ], 
      "subtypes": [], 
      "supertypes": [
        "CreativeWork"
      ], 
      "url": "http://schema.org/DataCatalog"
    }, 
    "DataDownload": {
      "ancestors": [
        "Thing", 
        "CreativeWork", 
        "MediaObject"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "DataDownload", 
      "label": "Data Download", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "about", 
        "accessibilityAPI", 
        "accessibilityControl", 
        "accessibilityFeature", 
        "accessibilityHazard", 
        "accountablePerson", 
        "aggregateRating", 
        "alternativeHeadline", 
        "associatedMedia", 
        "audience", 
        "audio", 
        "author", 
        "award", 
        "awards", 
        "citation", 
        "comment", 
        "contentLocation", 
        "contentRating", 
        "contributor", 
        "copyrightHolder", 
        "copyrightYear", 
        "creator", 
        "dateCreated", 
        "dateModified", 
        "datePublished", 
        "discussionUrl", 
        "editor", 
        "educationalAlignment", 
        "educationalUse", 
        "encoding", 
        "encodings", 
        "genre", 
        "headline", 
        "inLanguage", 
        "interactionCount", 
        "interactivityType", 
        "isBasedOnUrl", 
        "isFamilyFriendly", 
        "keywords", 
        "learningResourceType", 
        "mentions", 
        "offers", 
        "provider", 
        "publisher", 
        "publishingPrinciples", 
        "review", 
        "reviews", 
        "sourceOrganization", 
        "text", 
        "thumbnailUrl", 
        "timeRequired", 
        "typicalAgeRange", 
        "version", 
        "video", 
        "associatedArticle", 
        "bitrate", 
        "contentSize", 
        "contentUrl", 
        "duration", 
        "embedUrl", 
        "encodesCreativeWork", 
        "encodingFormat", 
        "expires", 
        "height", 
        "playerType", 
        "productionCompany", 
        "publication", 
        "regionsAllowed", 
        "requiresSubscription", 
        "uploadDate", 
        "width"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "MediaObject"
      ], 
      "url": "http://schema.org/DataDownload"
    }, 
    "Dataset": {
      "ancestors": [
        "Thing", 
        "CreativeWork"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "Dataset", 
      "label": "Dataset", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "about", 
        "accessibilityAPI", 
        "accessibilityControl", 
        "accessibilityFeature", 
        "accessibilityHazard", 
        "accountablePerson", 
        "aggregateRating", 
        "alternativeHeadline", 
        "associatedMedia", 
        "audience", 
        "audio", 
        "author", 
        "award", 
        "awards", 
        "citation", 
        "comment", 
        "contentLocation", 
        "contentRating", 
        "contributor", 
        "copyrightHolder", 
        "copyrightYear", 
        "creator", 
        "dateCreated", 
        "dateModified", 
        "datePublished", 
        "discussionUrl", 
        "editor", 
        "educationalAlignment", 
        "educationalUse", 
        "encoding", 
        "encodings", 
        "genre", 
        "headline", 
        "inLanguage", 
        "interactionCount", 
        "interactivityType", 
        "isBasedOnUrl", 
        "isFamilyFriendly", 
        "keywords", 
        "learningResourceType", 
        "mentions", 
        "offers", 
        "provider", 
        "publisher", 
        "publishingPrinciples", 
        "review", 
        "reviews", 
        "sourceOrganization", 
        "text", 
        "thumbnailUrl", 
        "timeRequired", 
        "typicalAgeRange", 
        "version", 
        "video", 
        "catalog", 
        "distribution", 
        "spatial", 
        "temporal"
      ], 
      "specific_properties": [
        "catalog", 
        "distribution", 
        "spatial", 
        "temporal"
      ], 
      "subtypes": [], 
      "supertypes": [
        "CreativeWork"
      ], 
      "url": "http://schema.org/Dataset"
    }, 
    "DayOfWeek": {
      "ancestors": [
        "Thing", 
        "Intangible", 
        "Enumeration"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "DayOfWeek", 
      "label": "Day of Week", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "Enumeration"
      ], 
      "url": "http://schema.org/DayOfWeek"
    }, 
    "DaySpa": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "LocalBusiness", 
        "HealthAndBeautyBusiness"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "DaySpa", 
      "label": "Day Spa", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "founder", 
        "founders", 
        "foundingDate", 
        "hasPOS", 
        "legalName", 
        "location", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "vatID", 
        "branchOf", 
        "currenciesAccepted", 
        "openingHours", 
        "paymentAccepted", 
        "priceRange"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "HealthAndBeautyBusiness"
      ], 
      "url": "http://schema.org/DaySpa"
    }, 
    "DefenceEstablishment": {
      "ancestors": [
        "Thing", 
        "Place", 
        "CivicStructure", 
        "GovernmentBuilding"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "DefenceEstablishment", 
      "label": "Defence Establishment", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "openingHours"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "GovernmentBuilding"
      ], 
      "url": "http://schema.org/DefenceEstablishment"
    }, 
    "DeleteAction": {
      "ancestors": [
        "Thing", 
        "Action", 
        "UpdateAction"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "DeleteAction", 
      "label": "Delete Action", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "agent", 
        "endTime", 
        "instrument", 
        "location", 
        "object", 
        "participant", 
        "result", 
        "startTime", 
        "collection"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "UpdateAction"
      ], 
      "url": "http://schema.org/DeleteAction"
    }, 
    "DeliveryChargeSpecification": {
      "ancestors": [
        "Thing", 
        "Intangible", 
        "StructuredValue", 
        "PriceSpecification"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "DeliveryChargeSpecification", 
      "label": "Delivery Charge Specification", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "eligibleQuantity", 
        "eligibleTransactionVolume", 
        "maxPrice", 
        "minPrice", 
        "price", 
        "priceCurrency", 
        "validFrom", 
        "validThrough", 
        "valueAddedTaxIncluded", 
        "appliesToDeliveryMethod", 
        "eligibleRegion"
      ], 
      "specific_properties": [
        "appliesToDeliveryMethod", 
        "eligibleRegion"
      ], 
      "subtypes": [], 
      "supertypes": [
        "PriceSpecification"
      ], 
      "url": "http://schema.org/DeliveryChargeSpecification"
    }, 
    "DeliveryEvent": {
      "ancestors": [
        "Thing", 
        "Event"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "DeliveryEvent", 
      "label": "Delivery Event", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "attendee", 
        "attendees", 
        "doorTime", 
        "duration", 
        "endDate", 
        "eventStatus", 
        "location", 
        "offers", 
        "performer", 
        "performers", 
        "previousStartDate", 
        "startDate", 
        "subEvent", 
        "subEvents", 
        "superEvent", 
        "typicalAgeRange", 
        "accessCode", 
        "availableFrom", 
        "availableThrough", 
        "hasDeliveryMethod"
      ], 
      "specific_properties": [
        "accessCode", 
        "availableFrom", 
        "availableThrough", 
        "hasDeliveryMethod"
      ], 
      "subtypes": [], 
      "supertypes": [
        "Event"
      ], 
      "url": "http://schema.org/DeliveryEvent"
    }, 
    "DeliveryMethod": {
      "ancestors": [
        "Thing", 
        "Intangible", 
        "Enumeration"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "DeliveryMethod", 
      "label": "Delivery Method", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url"
      ], 
      "specific_properties": [], 
      "subtypes": [
        "LockerDelivery", 
        "OnSitePickup", 
        "ParcelService"
      ], 
      "supertypes": [
        "Enumeration"
      ], 
      "url": "http://schema.org/DeliveryMethod"
    }, 
    "Demand": {
      "ancestors": [
        "Thing", 
        "Intangible"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "Demand", 
      "label": "Demand", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "acceptedPaymentMethod", 
        "advanceBookingRequirement", 
        "availability", 
        "availabilityEnds", 
        "availabilityStarts", 
        "availableAtOrFrom", 
        "availableDeliveryMethod", 
        "businessFunction", 
        "deliveryLeadTime", 
        "eligibleCustomerType", 
        "eligibleDuration", 
        "eligibleQuantity", 
        "eligibleRegion", 
        "eligibleTransactionVolume", 
        "gtin13", 
        "gtin14", 
        "gtin8", 
        "includesObject", 
        "inventoryLevel", 
        "itemCondition", 
        "itemOffered", 
        "mpn", 
        "priceSpecification", 
        "seller", 
        "serialNumber", 
        "sku", 
        "validFrom", 
        "validThrough", 
        "warranty"
      ], 
      "specific_properties": [
        "acceptedPaymentMethod", 
        "advanceBookingRequirement", 
        "availability", 
        "availabilityEnds", 
        "availabilityStarts", 
        "availableAtOrFrom", 
        "availableDeliveryMethod", 
        "businessFunction", 
        "deliveryLeadTime", 
        "eligibleCustomerType", 
        "eligibleDuration", 
        "eligibleQuantity", 
        "eligibleRegion", 
        "eligibleTransactionVolume", 
        "gtin13", 
        "gtin14", 
        "gtin8", 
        "includesObject", 
        "inventoryLevel", 
        "itemCondition", 
        "itemOffered", 
        "mpn", 
        "priceSpecification", 
        "seller", 
        "serialNumber", 
        "sku", 
        "validFrom", 
        "validThrough", 
        "warranty"
      ], 
      "subtypes": [], 
      "supertypes": [
        "Intangible"
      ], 
      "url": "http://schema.org/Demand"
    }, 
    "Dentist": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "LocalBusiness", 
        "MedicalOrganization"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "Dentist", 
      "label": "Dentist", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "founder", 
        "founders", 
        "foundingDate", 
        "hasPOS", 
        "legalName", 
        "location", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "vatID", 
        "branchOf", 
        "currenciesAccepted", 
        "openingHours", 
        "paymentAccepted", 
        "priceRange"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "MedicalOrganization", 
        "ProfessionalService"
      ], 
      "url": "http://schema.org/Dentist"
    }, 
    "DepartAction": {
      "ancestors": [
        "Thing", 
        "Action", 
        "MoveAction"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "DepartAction", 
      "label": "Depart Action", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "agent", 
        "endTime", 
        "instrument", 
        "location", 
        "object", 
        "participant", 
        "result", 
        "startTime", 
        "fromLocation", 
        "toLocation"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "MoveAction"
      ], 
      "url": "http://schema.org/DepartAction"
    }, 
    "DepartmentStore": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "LocalBusiness", 
        "Store"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "DepartmentStore", 
      "label": "Department Store", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "founder", 
        "founders", 
        "foundingDate", 
        "hasPOS", 
        "legalName", 
        "location", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "vatID", 
        "branchOf", 
        "currenciesAccepted", 
        "openingHours", 
        "paymentAccepted", 
        "priceRange"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "Store"
      ], 
      "url": "http://schema.org/DepartmentStore"
    }, 
    "DiagnosticLab": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "LocalBusiness", 
        "MedicalOrganization"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "DiagnosticLab", 
      "label": "Diagnostic Lab", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "founder", 
        "founders", 
        "foundingDate", 
        "hasPOS", 
        "legalName", 
        "location", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "vatID", 
        "branchOf", 
        "currenciesAccepted", 
        "openingHours", 
        "paymentAccepted", 
        "priceRange", 
        "availableTest"
      ], 
      "specific_properties": [
        "availableTest"
      ], 
      "subtypes": [], 
      "supertypes": [
        "MedicalOrganization"
      ], 
      "url": "http://schema.org/DiagnosticLab"
    }, 
    "DiagnosticProcedure": {
      "ancestors": [
        "Thing", 
        "MedicalEntity", 
        "MedicalProcedure"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "DiagnosticProcedure", 
      "label": "Diagnostic Procedure", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "code", 
        "guideline", 
        "medicineSystem", 
        "recognizingAuthority", 
        "relevantSpecialty", 
        "study", 
        "affectedBy", 
        "normalRange", 
        "signDetected", 
        "usedToDiagnose", 
        "usesDevice", 
        "followup", 
        "howPerformed", 
        "preparation", 
        "procedureType"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "MedicalProcedure", 
        "MedicalTest"
      ], 
      "url": "http://schema.org/DiagnosticProcedure"
    }, 
    "Diet": {
      "ancestors": [
        "Thing", 
        "CreativeWork"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "Diet", 
      "label": "Diet", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "code", 
        "guideline", 
        "medicineSystem", 
        "recognizingAuthority", 
        "relevantSpecialty", 
        "study", 
        "adverseOutcome", 
        "contraindication", 
        "duplicateTherapy", 
        "indication", 
        "seriousAdverseOutcome", 
        "about", 
        "accessibilityAPI", 
        "accessibilityControl", 
        "accessibilityFeature", 
        "accessibilityHazard", 
        "accountablePerson", 
        "aggregateRating", 
        "alternativeHeadline", 
        "associatedMedia", 
        "audience", 
        "audio", 
        "author", 
        "award", 
        "awards", 
        "citation", 
        "comment", 
        "contentLocation", 
        "contentRating", 
        "contributor", 
        "copyrightHolder", 
        "copyrightYear", 
        "creator", 
        "dateCreated", 
        "dateModified", 
        "datePublished", 
        "discussionUrl", 
        "editor", 
        "educationalAlignment", 
        "educationalUse", 
        "encoding", 
        "encodings", 
        "genre", 
        "headline", 
        "inLanguage", 
        "interactionCount", 
        "interactivityType", 
        "isBasedOnUrl", 
        "isFamilyFriendly", 
        "keywords", 
        "learningResourceType", 
        "mentions", 
        "offers", 
        "provider", 
        "publisher", 
        "publishingPrinciples", 
        "review", 
        "reviews", 
        "sourceOrganization", 
        "text", 
        "thumbnailUrl", 
        "timeRequired", 
        "typicalAgeRange", 
        "version", 
        "video", 
        "dietFeatures", 
        "endorsers", 
        "expertConsiderations", 
        "overview", 
        "physiologicalBenefits", 
        "proprietaryName", 
        "risks"
      ], 
      "specific_properties": [
        "dietFeatures", 
        "endorsers", 
        "expertConsiderations", 
        "overview", 
        "physiologicalBenefits", 
        "proprietaryName", 
        "risks"
      ], 
      "subtypes": [], 
      "supertypes": [
        "CreativeWork", 
        "LifestyleModification"
      ], 
      "url": "http://schema.org/Diet"
    }, 
    "DietarySupplement": {
      "ancestors": [
        "Thing", 
        "MedicalEntity", 
        "MedicalTherapy"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "DietarySupplement", 
      "label": "Dietary Supplement", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "code", 
        "guideline", 
        "medicineSystem", 
        "recognizingAuthority", 
        "relevantSpecialty", 
        "study", 
        "adverseOutcome", 
        "contraindication", 
        "duplicateTherapy", 
        "indication", 
        "seriousAdverseOutcome", 
        "activeIngredient", 
        "background", 
        "dosageForm", 
        "isProprietary", 
        "legalStatus", 
        "manufacturer", 
        "maximumIntake", 
        "mechanismOfAction", 
        "nonProprietaryName", 
        "recommendedIntake", 
        "safetyConsideration", 
        "targetPopulation"
      ], 
      "specific_properties": [
        "activeIngredient", 
        "background", 
        "dosageForm", 
        "isProprietary", 
        "legalStatus", 
        "manufacturer", 
        "maximumIntake", 
        "mechanismOfAction", 
        "nonProprietaryName", 
        "recommendedIntake", 
        "safetyConsideration", 
        "targetPopulation"
      ], 
      "subtypes": [], 
      "supertypes": [
        "MedicalTherapy"
      ], 
      "url": "http://schema.org/DietarySupplement"
    }, 
    "DisagreeAction": {
      "ancestors": [
        "Thing", 
        "Action", 
        "AssessAction", 
        "ReactAction"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "DisagreeAction", 
      "label": "Disagree Action", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "agent", 
        "endTime", 
        "instrument", 
        "location", 
        "object", 
        "participant", 
        "result", 
        "startTime"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "ReactAction"
      ], 
      "url": "http://schema.org/DisagreeAction"
    }, 
    "DiscoverAction": {
      "ancestors": [
        "Thing", 
        "Action", 
        "FindAction"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "DiscoverAction", 
      "label": "Discover Action", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "agent", 
        "endTime", 
        "instrument", 
        "location", 
        "object", 
        "participant", 
        "result", 
        "startTime"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "FindAction"
      ], 
      "url": "http://schema.org/DiscoverAction"
    }, 
    "DislikeAction": {
      "ancestors": [
        "Thing", 
        "Action", 
        "AssessAction", 
        "ReactAction"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "DislikeAction", 
      "label": "Dislike Action", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "agent", 
        "endTime", 
        "instrument", 
        "location", 
        "object", 
        "participant", 
        "result", 
        "startTime"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "ReactAction"
      ], 
      "url": "http://schema.org/DislikeAction"
    }, 
    "Distance": {
      "ancestors": [
        "Thing", 
        "Intangible", 
        "Quantity"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "Distance", 
      "label": "Distance", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "Quantity"
      ], 
      "url": "http://schema.org/Distance"
    }, 
    "DonateAction": {
      "ancestors": [
        "Thing", 
        "Action", 
        "TradeAction"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "DonateAction", 
      "label": "Donate Action", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "agent", 
        "endTime", 
        "instrument", 
        "location", 
        "object", 
        "participant", 
        "result", 
        "startTime", 
        "price", 
        "recipient"
      ], 
      "specific_properties": [
        "recipient"
      ], 
      "subtypes": [], 
      "supertypes": [
        "TradeAction"
      ], 
      "url": "http://schema.org/DonateAction"
    }, 
    "DoseSchedule": {
      "ancestors": [
        "Thing", 
        "MedicalEntity", 
        "MedicalIntangible"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "DoseSchedule", 
      "label": "Dose Schedule", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "code", 
        "guideline", 
        "medicineSystem", 
        "recognizingAuthority", 
        "relevantSpecialty", 
        "study", 
        "doseUnit", 
        "doseValue", 
        "frequency", 
        "targetPopulation"
      ], 
      "specific_properties": [
        "doseUnit", 
        "doseValue", 
        "frequency", 
        "targetPopulation"
      ], 
      "subtypes": [
        "MaximumDoseSchedule", 
        "RecommendedDoseSchedule", 
        "ReportedDoseSchedule"
      ], 
      "supertypes": [
        "MedicalIntangible"
      ], 
      "url": "http://schema.org/DoseSchedule"
    }, 
    "DownloadAction": {
      "ancestors": [
        "Thing", 
        "Action", 
        "TransferAction"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "DownloadAction", 
      "label": "Download Action", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "agent", 
        "endTime", 
        "instrument", 
        "location", 
        "object", 
        "participant", 
        "result", 
        "startTime", 
        "fromLocation", 
        "toLocation"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "TransferAction"
      ], 
      "url": "http://schema.org/DownloadAction"
    }, 
    "DrawAction": {
      "ancestors": [
        "Thing", 
        "Action", 
        "CreateAction"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "DrawAction", 
      "label": "Draw Action", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "agent", 
        "endTime", 
        "instrument", 
        "location", 
        "object", 
        "participant", 
        "result", 
        "startTime"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "CreateAction"
      ], 
      "url": "http://schema.org/DrawAction"
    }, 
    "DrinkAction": {
      "ancestors": [
        "Thing", 
        "Action", 
        "ConsumeAction"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "DrinkAction", 
      "label": "Drink Action", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "agent", 
        "endTime", 
        "instrument", 
        "location", 
        "object", 
        "participant", 
        "result", 
        "startTime"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "ConsumeAction"
      ], 
      "url": "http://schema.org/DrinkAction"
    }, 
    "Drug": {
      "ancestors": [
        "Thing", 
        "MedicalEntity", 
        "MedicalTherapy"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "Drug", 
      "label": "Drug", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "code", 
        "guideline", 
        "medicineSystem", 
        "recognizingAuthority", 
        "relevantSpecialty", 
        "study", 
        "adverseOutcome", 
        "contraindication", 
        "duplicateTherapy", 
        "indication", 
        "seriousAdverseOutcome", 
        "activeIngredient", 
        "administrationRoute", 
        "alcoholWarning", 
        "availableStrength", 
        "breastfeedingWarning", 
        "clincalPharmacology", 
        "cost", 
        "dosageForm", 
        "doseSchedule", 
        "drugClass", 
        "foodWarning", 
        "interactingDrug", 
        "isAvailableGenerically", 
        "isProprietary", 
        "labelDetails", 
        "legalStatus", 
        "manufacturer", 
        "mechanismOfAction", 
        "nonProprietaryName", 
        "overdosage", 
        "pregnancyCategory", 
        "pregnancyWarning", 
        "prescribingInfo", 
        "prescriptionStatus", 
        "relatedDrug", 
        "warning"
      ], 
      "specific_properties": [
        "activeIngredient", 
        "administrationRoute", 
        "alcoholWarning", 
        "availableStrength", 
        "breastfeedingWarning", 
        "clincalPharmacology", 
        "cost", 
        "dosageForm", 
        "doseSchedule", 
        "drugClass", 
        "foodWarning", 
        "interactingDrug", 
        "isAvailableGenerically", 
        "isProprietary", 
        "labelDetails", 
        "legalStatus", 
        "manufacturer", 
        "mechanismOfAction", 
        "nonProprietaryName", 
        "overdosage", 
        "pregnancyCategory", 
        "pregnancyWarning", 
        "prescribingInfo", 
        "prescriptionStatus", 
        "relatedDrug", 
        "warning"
      ], 
      "subtypes": [], 
      "supertypes": [
        "MedicalTherapy"
      ], 
      "url": "http://schema.org/Drug"
    }, 
    "DrugClass": {
      "ancestors": [
        "Thing", 
        "MedicalEntity", 
        "MedicalTherapy"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "DrugClass", 
      "label": "Drug Class", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "code", 
        "guideline", 
        "medicineSystem", 
        "recognizingAuthority", 
        "relevantSpecialty", 
        "study", 
        "adverseOutcome", 
        "contraindication", 
        "duplicateTherapy", 
        "indication", 
        "seriousAdverseOutcome", 
        "drug"
      ], 
      "specific_properties": [
        "drug"
      ], 
      "subtypes": [], 
      "supertypes": [
        "MedicalTherapy"
      ], 
      "url": "http://schema.org/DrugClass"
    }, 
    "DrugCost": {
      "ancestors": [
        "Thing", 
        "MedicalEntity", 
        "MedicalIntangible"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "DrugCost", 
      "label": "Drug Cost", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "code", 
        "guideline", 
        "medicineSystem", 
        "recognizingAuthority", 
        "relevantSpecialty", 
        "study", 
        "applicableLocation", 
        "costCategory", 
        "costCurrency", 
        "costOrigin", 
        "costPerUnit", 
        "drugUnit"
      ], 
      "specific_properties": [
        "applicableLocation", 
        "costCategory", 
        "costCurrency", 
        "costOrigin", 
        "costPerUnit", 
        "drugUnit"
      ], 
      "subtypes": [], 
      "supertypes": [
        "MedicalIntangible"
      ], 
      "url": "http://schema.org/DrugCost"
    }, 
    "DrugCostCategory": {
      "ancestors": [
        "Thing", 
        "MedicalEntity", 
        "MedicalIntangible", 
        "MedicalEnumeration"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "DrugCostCategory", 
      "instances": [
        "ReimbursementCap", 
        "Retail", 
        "Wholesale"
      ], 
      "label": "Drug Cost Category", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "code", 
        "guideline", 
        "medicineSystem", 
        "recognizingAuthority", 
        "relevantSpecialty", 
        "study"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "MedicalEnumeration"
      ], 
      "url": "http://schema.org/DrugCostCategory"
    }, 
    "DrugLegalStatus": {
      "ancestors": [
        "Thing", 
        "MedicalEntity", 
        "MedicalIntangible"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "DrugLegalStatus", 
      "label": "Drug Legal Status", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "code", 
        "guideline", 
        "medicineSystem", 
        "recognizingAuthority", 
        "relevantSpecialty", 
        "study", 
        "applicableLocation"
      ], 
      "specific_properties": [
        "applicableLocation"
      ], 
      "subtypes": [], 
      "supertypes": [
        "MedicalIntangible"
      ], 
      "url": "http://schema.org/DrugLegalStatus"
    }, 
    "DrugPregnancyCategory": {
      "ancestors": [
        "Thing", 
        "MedicalEntity", 
        "MedicalIntangible", 
        "MedicalEnumeration"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "DrugPregnancyCategory", 
      "instances": [
        "FDAcategoryA", 
        "FDAcategoryB", 
        "FDAcategoryC", 
        "FDAcategoryD", 
        "FDAcategoryX", 
        "FDAnotEvaluated"
      ], 
      "label": "Drug Pregnancy Category", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "code", 
        "guideline", 
        "medicineSystem", 
        "recognizingAuthority", 
        "relevantSpecialty", 
        "study"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "MedicalEnumeration"
      ], 
      "url": "http://schema.org/DrugPregnancyCategory"
    }, 
    "DrugPrescriptionStatus": {
      "ancestors": [
        "Thing", 
        "MedicalEntity", 
        "MedicalIntangible", 
        "MedicalEnumeration"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "DrugPrescriptionStatus", 
      "instances": [
        "OTC", 
        "PrescriptionOnly"
      ], 
      "label": "Drug Prescription Status", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "code", 
        "guideline", 
        "medicineSystem", 
        "recognizingAuthority", 
        "relevantSpecialty", 
        "study"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "MedicalEnumeration"
      ], 
      "url": "http://schema.org/DrugPrescriptionStatus"
    }, 
    "DrugStrength": {
      "ancestors": [
        "Thing", 
        "MedicalEntity", 
        "MedicalIntangible"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "DrugStrength", 
      "label": "Drug Strength", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "code", 
        "guideline", 
        "medicineSystem", 
        "recognizingAuthority", 
        "relevantSpecialty", 
        "study", 
        "activeIngredient", 
        "availableIn", 
        "strengthUnit", 
        "strengthValue"
      ], 
      "specific_properties": [
        "activeIngredient", 
        "availableIn", 
        "strengthUnit", 
        "strengthValue"
      ], 
      "subtypes": [], 
      "supertypes": [
        "MedicalIntangible"
      ], 
      "url": "http://schema.org/DrugStrength"
    }, 
    "DryCleaningOrLaundry": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "LocalBusiness"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "DryCleaningOrLaundry", 
      "label": "Dry Cleaning or Laundry", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "founder", 
        "founders", 
        "foundingDate", 
        "hasPOS", 
        "legalName", 
        "location", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "vatID", 
        "branchOf", 
        "currenciesAccepted", 
        "openingHours", 
        "paymentAccepted", 
        "priceRange"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "LocalBusiness"
      ], 
      "url": "http://schema.org/DryCleaningOrLaundry"
    }, 
    "Duration": {
      "ancestors": [
        "Thing", 
        "Intangible", 
        "Quantity"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "Duration", 
      "label": "Duration", 
      "properties": [], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "Quantity"
      ], 
      "url": "http://schema.org/Duration"
    }, 
    "EatAction": {
      "ancestors": [
        "Thing", 
        "Action", 
        "ConsumeAction"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "EatAction", 
      "label": "Eat Action", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "agent", 
        "endTime", 
        "instrument", 
        "location", 
        "object", 
        "participant", 
        "result", 
        "startTime"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "ConsumeAction"
      ], 
      "url": "http://schema.org/EatAction"
    }, 
    "EducationEvent": {
      "ancestors": [
        "Thing", 
        "Event"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "EducationEvent", 
      "label": "Education Event", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "attendee", 
        "attendees", 
        "doorTime", 
        "duration", 
        "endDate", 
        "eventStatus", 
        "location", 
        "offers", 
        "performer", 
        "performers", 
        "previousStartDate", 
        "startDate", 
        "subEvent", 
        "subEvents", 
        "superEvent", 
        "typicalAgeRange"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "Event"
      ], 
      "url": "http://schema.org/EducationEvent"
    }, 
    "EducationalAudience": {
      "ancestors": [
        "Thing", 
        "Intangible", 
        "Audience"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "EducationalAudience", 
      "label": "Educational Audience", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "audienceType", 
        "geographicArea", 
        "educationalRole"
      ], 
      "specific_properties": [
        "educationalRole"
      ], 
      "subtypes": [], 
      "supertypes": [
        "Audience"
      ], 
      "url": "http://schema.org/EducationalAudience"
    }, 
    "EducationalOrganization": {
      "ancestors": [
        "Thing", 
        "Organization"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "EducationalOrganization", 
      "label": "Educational Organization", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "event", 
        "events", 
        "faxNumber", 
        "founder", 
        "founders", 
        "foundingDate", 
        "globalLocationNumber", 
        "hasPOS", 
        "interactionCount", 
        "isicV4", 
        "legalName", 
        "location", 
        "logo", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "review", 
        "reviews", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "telephone", 
        "vatID", 
        "alumni"
      ], 
      "specific_properties": [
        "alumni"
      ], 
      "subtypes": [
        "CollegeOrUniversity", 
        "ElementarySchool", 
        "HighSchool", 
        "MiddleSchool", 
        "Preschool", 
        "School"
      ], 
      "supertypes": [
        "Organization"
      ], 
      "url": "http://schema.org/EducationalOrganization"
    }, 
    "Electrician": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "LocalBusiness", 
        "HomeAndConstructionBusiness"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "Electrician", 
      "label": "Electrician", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "founder", 
        "founders", 
        "foundingDate", 
        "hasPOS", 
        "legalName", 
        "location", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "vatID", 
        "branchOf", 
        "currenciesAccepted", 
        "openingHours", 
        "paymentAccepted", 
        "priceRange"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "ProfessionalService", 
        "HomeAndConstructionBusiness"
      ], 
      "url": "http://schema.org/Electrician"
    }, 
    "ElectronicsStore": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "LocalBusiness", 
        "Store"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "ElectronicsStore", 
      "label": "Electronics Store", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "founder", 
        "founders", 
        "foundingDate", 
        "hasPOS", 
        "legalName", 
        "location", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "vatID", 
        "branchOf", 
        "currenciesAccepted", 
        "openingHours", 
        "paymentAccepted", 
        "priceRange"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "Store"
      ], 
      "url": "http://schema.org/ElectronicsStore"
    }, 
    "ElementarySchool": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "EducationalOrganization"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "ElementarySchool", 
      "label": "Elementary School", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "event", 
        "events", 
        "faxNumber", 
        "founder", 
        "founders", 
        "foundingDate", 
        "globalLocationNumber", 
        "hasPOS", 
        "interactionCount", 
        "isicV4", 
        "legalName", 
        "location", 
        "logo", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "review", 
        "reviews", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "telephone", 
        "vatID", 
        "alumni"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "EducationalOrganization"
      ], 
      "url": "http://schema.org/ElementarySchool"
    }, 
    "Embassy": {
      "ancestors": [
        "Thing", 
        "Place", 
        "CivicStructure", 
        "GovernmentBuilding"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "Embassy", 
      "label": "Embassy", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "openingHours"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "GovernmentBuilding"
      ], 
      "url": "http://schema.org/Embassy"
    }, 
    "EmergencyService": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "LocalBusiness"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "EmergencyService", 
      "label": "Emergency Service", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "founder", 
        "founders", 
        "foundingDate", 
        "hasPOS", 
        "legalName", 
        "location", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "vatID", 
        "branchOf", 
        "currenciesAccepted", 
        "openingHours", 
        "paymentAccepted", 
        "priceRange"
      ], 
      "specific_properties": [], 
      "subtypes": [
        "FireStation", 
        "Hospital", 
        "PoliceStation"
      ], 
      "supertypes": [
        "LocalBusiness"
      ], 
      "url": "http://schema.org/EmergencyService"
    }, 
    "EmploymentAgency": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "LocalBusiness"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "EmploymentAgency", 
      "label": "Employment Agency", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "founder", 
        "founders", 
        "foundingDate", 
        "hasPOS", 
        "legalName", 
        "location", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "vatID", 
        "branchOf", 
        "currenciesAccepted", 
        "openingHours", 
        "paymentAccepted", 
        "priceRange"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "LocalBusiness"
      ], 
      "url": "http://schema.org/EmploymentAgency"
    }, 
    "EndorseAction": {
      "ancestors": [
        "Thing", 
        "Action", 
        "AssessAction", 
        "ReactAction"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "EndorseAction", 
      "label": "Endorse Action", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "agent", 
        "endTime", 
        "instrument", 
        "location", 
        "object", 
        "participant", 
        "result", 
        "startTime", 
        "endorsee"
      ], 
      "specific_properties": [
        "endorsee"
      ], 
      "subtypes": [], 
      "supertypes": [
        "ReactAction"
      ], 
      "url": "http://schema.org/EndorseAction"
    }, 
    "Energy": {
      "ancestors": [
        "Thing", 
        "Intangible", 
        "Quantity"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "Energy", 
      "label": "Energy", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "Quantity"
      ], 
      "url": "http://schema.org/Energy"
    }, 
    "EntertainmentBusiness": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "LocalBusiness"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "EntertainmentBusiness", 
      "label": "Entertainment Business", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "founder", 
        "founders", 
        "foundingDate", 
        "hasPOS", 
        "legalName", 
        "location", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "vatID", 
        "branchOf", 
        "currenciesAccepted", 
        "openingHours", 
        "paymentAccepted", 
        "priceRange"
      ], 
      "specific_properties": [], 
      "subtypes": [
        "AdultEntertainment", 
        "AmusementPark", 
        "ArtGallery", 
        "Casino", 
        "ComedyClub", 
        "MovieTheater", 
        "NightClub"
      ], 
      "supertypes": [
        "LocalBusiness"
      ], 
      "url": "http://schema.org/EntertainmentBusiness"
    }, 
    "Enumeration": {
      "ancestors": [
        "Thing", 
        "Intangible"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "Enumeration", 
      "label": "Enumeration", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url"
      ], 
      "specific_properties": [], 
      "subtypes": [
        "BookFormatType", 
        "BusinessEntityType", 
        "BusinessFunction", 
        "ContactPointOption", 
        "DayOfWeek", 
        "DeliveryMethod", 
        "EventStatusType", 
        "ItemAvailability", 
        "OfferItemCondition", 
        "OrderStatus", 
        "PaymentMethod", 
        "QualitativeValue", 
        "Specialty", 
        "WarrantyScope"
      ], 
      "supertypes": [
        "Intangible"
      ], 
      "url": "http://schema.org/Enumeration"
    }, 
    "Episode": {
      "ancestors": [
        "Thing", 
        "CreativeWork"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "Episode", 
      "label": "Episode", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "about", 
        "accessibilityAPI", 
        "accessibilityControl", 
        "accessibilityFeature", 
        "accessibilityHazard", 
        "accountablePerson", 
        "aggregateRating", 
        "alternativeHeadline", 
        "associatedMedia", 
        "audience", 
        "audio", 
        "author", 
        "award", 
        "awards", 
        "citation", 
        "comment", 
        "contentLocation", 
        "contentRating", 
        "contributor", 
        "copyrightHolder", 
        "copyrightYear", 
        "creator", 
        "dateCreated", 
        "dateModified", 
        "datePublished", 
        "discussionUrl", 
        "editor", 
        "educationalAlignment", 
        "educationalUse", 
        "encoding", 
        "encodings", 
        "genre", 
        "headline", 
        "inLanguage", 
        "interactionCount", 
        "interactivityType", 
        "isBasedOnUrl", 
        "isFamilyFriendly", 
        "keywords", 
        "learningResourceType", 
        "mentions", 
        "offers", 
        "provider", 
        "publisher", 
        "publishingPrinciples", 
        "review", 
        "reviews", 
        "sourceOrganization", 
        "text", 
        "thumbnailUrl", 
        "timeRequired", 
        "typicalAgeRange", 
        "version", 
        "video", 
        "actor", 
        "actors", 
        "director", 
        "directors", 
        "episodeNumber", 
        "musicBy", 
        "partOfSeason", 
        "partOfSeries", 
        "position", 
        "producer", 
        "productionCompany", 
        "publication", 
        "trailer"
      ], 
      "specific_properties": [
        "actor", 
        "actors", 
        "director", 
        "directors", 
        "episodeNumber", 
        "musicBy", 
        "partOfSeason", 
        "partOfSeries", 
        "position", 
        "producer", 
        "productionCompany", 
        "publication", 
        "trailer"
      ], 
      "subtypes": [
        "RadioEpisode", 
        "TVEpisode"
      ], 
      "supertypes": [
        "CreativeWork"
      ], 
      "url": "http://schema.org/Episode"
    }, 
    "Event": {
      "ancestors": [
        "Thing"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "Event", 
      "label": "Event", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "attendee", 
        "attendees", 
        "doorTime", 
        "duration", 
        "endDate", 
        "eventStatus", 
        "location", 
        "offers", 
        "performer", 
        "performers", 
        "previousStartDate", 
        "startDate", 
        "subEvent", 
        "subEvents", 
        "superEvent", 
        "typicalAgeRange"
      ], 
      "specific_properties": [
        "attendee", 
        "attendees", 
        "doorTime", 
        "duration", 
        "endDate", 
        "eventStatus", 
        "location", 
        "offers", 
        "performer", 
        "performers", 
        "previousStartDate", 
        "startDate", 
        "subEvent", 
        "subEvents", 
        "superEvent", 
        "typicalAgeRange"
      ], 
      "subtypes": [
        "BusinessEvent", 
        "ChildrensEvent", 
        "ComedyEvent", 
        "DanceEvent", 
        "DeliveryEvent", 
        "EducationEvent", 
        "Festival", 
        "FoodEvent", 
        "LiteraryEvent", 
        "MusicEvent", 
        "PublicationEvent", 
        "SaleEvent", 
        "SocialEvent", 
        "SportsEvent", 
        "TheaterEvent", 
        "UserInteraction", 
        "VisualArtsEvent"
      ], 
      "supertypes": [
        "Thing"
      ], 
      "url": "http://schema.org/Event"
    }, 
    "EventStatusType": {
      "ancestors": [
        "Thing", 
        "Intangible", 
        "Enumeration"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "EventStatusType", 
      "instances": [
        "EventCancelled", 
        "EventPostponed", 
        "EventRescheduled", 
        "EventScheduled"
      ], 
      "label": "Event Status Type", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "Enumeration"
      ], 
      "url": "http://schema.org/EventStatusType"
    }, 
    "EventVenue": {
      "ancestors": [
        "Thing", 
        "Place", 
        "CivicStructure"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "EventVenue", 
      "label": "Event Venue", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "openingHours"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "CivicStructure"
      ], 
      "url": "http://schema.org/EventVenue"
    }, 
    "ExerciseAction": {
      "ancestors": [
        "Thing", 
        "Action", 
        "PlayAction"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "ExerciseAction", 
      "label": "Exercise Action", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "agent", 
        "endTime", 
        "instrument", 
        "location", 
        "object", 
        "participant", 
        "result", 
        "startTime", 
        "audience", 
        "event", 
        "course", 
        "diet", 
        "distance", 
        "exercisePlan", 
        "exerciseType", 
        "fromLocation", 
        "oponent", 
        "sportsActivityLocation", 
        "sportsEvent", 
        "sportsTeam", 
        "toLocation"
      ], 
      "specific_properties": [
        "course", 
        "diet", 
        "distance", 
        "exercisePlan", 
        "exerciseType", 
        "fromLocation", 
        "oponent", 
        "sportsActivityLocation", 
        "sportsEvent", 
        "sportsTeam", 
        "toLocation"
      ], 
      "subtypes": [], 
      "supertypes": [
        "PlayAction"
      ], 
      "url": "http://schema.org/ExerciseAction"
    }, 
    "ExerciseGym": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "LocalBusiness", 
        "SportsActivityLocation"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "ExerciseGym", 
      "label": "Exercise Gym", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "founder", 
        "founders", 
        "foundingDate", 
        "hasPOS", 
        "legalName", 
        "location", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "vatID", 
        "branchOf", 
        "currenciesAccepted", 
        "openingHours", 
        "paymentAccepted", 
        "priceRange"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "SportsActivityLocation"
      ], 
      "url": "http://schema.org/ExerciseGym"
    }, 
    "ExercisePlan": {
      "ancestors": [
        "Thing", 
        "CreativeWork"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "ExercisePlan", 
      "label": "Exercise Plan", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "code", 
        "guideline", 
        "medicineSystem", 
        "recognizingAuthority", 
        "relevantSpecialty", 
        "study", 
        "adverseOutcome", 
        "contraindication", 
        "duplicateTherapy", 
        "indication", 
        "seriousAdverseOutcome", 
        "associatedAnatomy", 
        "category", 
        "epidemiology", 
        "pathophysiology", 
        "about", 
        "accessibilityAPI", 
        "accessibilityControl", 
        "accessibilityFeature", 
        "accessibilityHazard", 
        "accountablePerson", 
        "aggregateRating", 
        "alternativeHeadline", 
        "associatedMedia", 
        "audience", 
        "audio", 
        "author", 
        "award", 
        "awards", 
        "citation", 
        "comment", 
        "contentLocation", 
        "contentRating", 
        "contributor", 
        "copyrightHolder", 
        "copyrightYear", 
        "creator", 
        "dateCreated", 
        "dateModified", 
        "datePublished", 
        "discussionUrl", 
        "editor", 
        "educationalAlignment", 
        "educationalUse", 
        "encoding", 
        "encodings", 
        "genre", 
        "headline", 
        "inLanguage", 
        "interactionCount", 
        "interactivityType", 
        "isBasedOnUrl", 
        "isFamilyFriendly", 
        "keywords", 
        "learningResourceType", 
        "mentions", 
        "offers", 
        "provider", 
        "publisher", 
        "publishingPrinciples", 
        "review", 
        "reviews", 
        "sourceOrganization", 
        "text", 
        "thumbnailUrl", 
        "timeRequired", 
        "typicalAgeRange", 
        "version", 
        "video", 
        "activityDuration", 
        "activityFrequency", 
        "additionalVariable", 
        "exerciseType", 
        "intensity", 
        "repetitions", 
        "restPeriods", 
        "workload"
      ], 
      "specific_properties": [
        "activityDuration", 
        "activityFrequency", 
        "additionalVariable", 
        "exerciseType", 
        "intensity", 
        "repetitions", 
        "restPeriods", 
        "workload"
      ], 
      "subtypes": [], 
      "supertypes": [
        "CreativeWork", 
        "PhysicalActivity"
      ], 
      "url": "http://schema.org/ExercisePlan"
    }, 
    "FastFoodRestaurant": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "LocalBusiness", 
        "FoodEstablishment"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "FastFoodRestaurant", 
      "label": "Fast Food Restaurant", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "founder", 
        "founders", 
        "foundingDate", 
        "hasPOS", 
        "legalName", 
        "location", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "vatID", 
        "branchOf", 
        "currenciesAccepted", 
        "openingHours", 
        "paymentAccepted", 
        "priceRange", 
        "acceptsReservations", 
        "menu", 
        "servesCuisine"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "FoodEstablishment"
      ], 
      "url": "http://schema.org/FastFoodRestaurant"
    }, 
    "Festival": {
      "ancestors": [
        "Thing", 
        "Event"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "Festival", 
      "label": "Festival", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "attendee", 
        "attendees", 
        "doorTime", 
        "duration", 
        "endDate", 
        "eventStatus", 
        "location", 
        "offers", 
        "performer", 
        "performers", 
        "previousStartDate", 
        "startDate", 
        "subEvent", 
        "subEvents", 
        "superEvent", 
        "typicalAgeRange"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "Event"
      ], 
      "url": "http://schema.org/Festival"
    }, 
    "FilmAction": {
      "ancestors": [
        "Thing", 
        "Action", 
        "CreateAction"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "FilmAction", 
      "label": "Film Action", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "agent", 
        "endTime", 
        "instrument", 
        "location", 
        "object", 
        "participant", 
        "result", 
        "startTime"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "CreateAction"
      ], 
      "url": "http://schema.org/FilmAction"
    }, 
    "FinancialService": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "LocalBusiness"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "FinancialService", 
      "label": "Financial Service", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "founder", 
        "founders", 
        "foundingDate", 
        "hasPOS", 
        "legalName", 
        "location", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "vatID", 
        "branchOf", 
        "currenciesAccepted", 
        "openingHours", 
        "paymentAccepted", 
        "priceRange"
      ], 
      "specific_properties": [], 
      "subtypes": [
        "AccountingService", 
        "AutomatedTeller", 
        "BankOrCreditUnion", 
        "InsuranceAgency"
      ], 
      "supertypes": [
        "LocalBusiness"
      ], 
      "url": "http://schema.org/FinancialService"
    }, 
    "FindAction": {
      "ancestors": [
        "Thing", 
        "Action"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "FindAction", 
      "label": "Find Action", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "agent", 
        "endTime", 
        "instrument", 
        "location", 
        "object", 
        "participant", 
        "result", 
        "startTime"
      ], 
      "specific_properties": [], 
      "subtypes": [
        "CheckAction", 
        "DiscoverAction", 
        "TrackAction"
      ], 
      "supertypes": [
        "Action"
      ], 
      "url": "http://schema.org/FindAction"
    }, 
    "FireStation": {
      "ancestors": [
        "Thing", 
        "Place", 
        "CivicStructure"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "FireStation", 
      "label": "Fire Station", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "founder", 
        "founders", 
        "foundingDate", 
        "hasPOS", 
        "legalName", 
        "location", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "vatID", 
        "branchOf", 
        "currenciesAccepted", 
        "openingHours", 
        "paymentAccepted", 
        "priceRange"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "CivicStructure", 
        "EmergencyService"
      ], 
      "url": "http://schema.org/FireStation"
    }, 
    "Florist": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "LocalBusiness", 
        "Store"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "Florist", 
      "label": "Florist", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "founder", 
        "founders", 
        "foundingDate", 
        "hasPOS", 
        "legalName", 
        "location", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "vatID", 
        "branchOf", 
        "currenciesAccepted", 
        "openingHours", 
        "paymentAccepted", 
        "priceRange"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "Store"
      ], 
      "url": "http://schema.org/Florist"
    }, 
    "FollowAction": {
      "ancestors": [
        "Thing", 
        "Action", 
        "InteractAction"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "FollowAction", 
      "label": "Follow Action", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "agent", 
        "endTime", 
        "instrument", 
        "location", 
        "object", 
        "participant", 
        "result", 
        "startTime", 
        "followee"
      ], 
      "specific_properties": [
        "followee"
      ], 
      "subtypes": [], 
      "supertypes": [
        "InteractAction"
      ], 
      "url": "http://schema.org/FollowAction"
    }, 
    "FoodEstablishment": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "LocalBusiness"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "FoodEstablishment", 
      "label": "Food Establishment", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "founder", 
        "founders", 
        "foundingDate", 
        "hasPOS", 
        "legalName", 
        "location", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "vatID", 
        "branchOf", 
        "currenciesAccepted", 
        "openingHours", 
        "paymentAccepted", 
        "priceRange", 
        "acceptsReservations", 
        "menu", 
        "servesCuisine"
      ], 
      "specific_properties": [
        "acceptsReservations", 
        "menu", 
        "servesCuisine"
      ], 
      "subtypes": [
        "Bakery", 
        "BarOrPub", 
        "Brewery", 
        "CafeOrCoffeeShop", 
        "FastFoodRestaurant", 
        "IceCreamShop", 
        "Restaurant", 
        "Winery"
      ], 
      "supertypes": [
        "LocalBusiness"
      ], 
      "url": "http://schema.org/FoodEstablishment"
    }, 
    "FoodEvent": {
      "ancestors": [
        "Thing", 
        "Event"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "FoodEvent", 
      "label": "Food Event", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "attendee", 
        "attendees", 
        "doorTime", 
        "duration", 
        "endDate", 
        "eventStatus", 
        "location", 
        "offers", 
        "performer", 
        "performers", 
        "previousStartDate", 
        "startDate", 
        "subEvent", 
        "subEvents", 
        "superEvent", 
        "typicalAgeRange"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "Event"
      ], 
      "url": "http://schema.org/FoodEvent"
    }, 
    "FurnitureStore": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "LocalBusiness", 
        "Store"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "FurnitureStore", 
      "label": "Furniture Store", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "founder", 
        "founders", 
        "foundingDate", 
        "hasPOS", 
        "legalName", 
        "location", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "vatID", 
        "branchOf", 
        "currenciesAccepted", 
        "openingHours", 
        "paymentAccepted", 
        "priceRange"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "Store"
      ], 
      "url": "http://schema.org/FurnitureStore"
    }, 
    "GardenStore": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "LocalBusiness", 
        "Store"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "GardenStore", 
      "label": "Garden Store", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "founder", 
        "founders", 
        "foundingDate", 
        "hasPOS", 
        "legalName", 
        "location", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "vatID", 
        "branchOf", 
        "currenciesAccepted", 
        "openingHours", 
        "paymentAccepted", 
        "priceRange"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "Store"
      ], 
      "url": "http://schema.org/GardenStore"
    }, 
    "GasStation": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "LocalBusiness", 
        "AutomotiveBusiness"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "GasStation", 
      "label": "Gas Station", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "founder", 
        "founders", 
        "foundingDate", 
        "hasPOS", 
        "legalName", 
        "location", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "vatID", 
        "branchOf", 
        "currenciesAccepted", 
        "openingHours", 
        "paymentAccepted", 
        "priceRange"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "AutomotiveBusiness"
      ], 
      "url": "http://schema.org/GasStation"
    }, 
    "GatedResidenceCommunity": {
      "ancestors": [
        "Thing", 
        "Place", 
        "Residence"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "GatedResidenceCommunity", 
      "label": "Gated Residence Community", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "Residence"
      ], 
      "url": "http://schema.org/GatedResidenceCommunity"
    }, 
    "GeneralContractor": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "LocalBusiness", 
        "HomeAndConstructionBusiness"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "GeneralContractor", 
      "label": "General Contractor", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "founder", 
        "founders", 
        "foundingDate", 
        "hasPOS", 
        "legalName", 
        "location", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "vatID", 
        "branchOf", 
        "currenciesAccepted", 
        "openingHours", 
        "paymentAccepted", 
        "priceRange"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "ProfessionalService", 
        "HomeAndConstructionBusiness"
      ], 
      "url": "http://schema.org/GeneralContractor"
    }, 
    "GeoCoordinates": {
      "ancestors": [
        "Thing", 
        "Intangible", 
        "StructuredValue"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "GeoCoordinates", 
      "label": "Geo Coordinates", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "elevation", 
        "latitude", 
        "longitude"
      ], 
      "specific_properties": [
        "elevation", 
        "latitude", 
        "longitude"
      ], 
      "subtypes": [], 
      "supertypes": [
        "StructuredValue"
      ], 
      "url": "http://schema.org/GeoCoordinates"
    }, 
    "GeoShape": {
      "ancestors": [
        "Thing", 
        "Intangible", 
        "StructuredValue"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "GeoShape", 
      "label": "Geo Shape", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "box", 
        "circle", 
        "elevation", 
        "line", 
        "polygon"
      ], 
      "specific_properties": [
        "box", 
        "circle", 
        "elevation", 
        "line", 
        "polygon"
      ], 
      "subtypes": [], 
      "supertypes": [
        "StructuredValue"
      ], 
      "url": "http://schema.org/GeoShape"
    }, 
    "GiveAction": {
      "ancestors": [
        "Thing", 
        "Action", 
        "TransferAction"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "GiveAction", 
      "label": "Give Action", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "agent", 
        "endTime", 
        "instrument", 
        "location", 
        "object", 
        "participant", 
        "result", 
        "startTime", 
        "fromLocation", 
        "toLocation", 
        "recipient"
      ], 
      "specific_properties": [
        "recipient"
      ], 
      "subtypes": [], 
      "supertypes": [
        "TransferAction"
      ], 
      "url": "http://schema.org/GiveAction"
    }, 
    "GolfCourse": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "LocalBusiness", 
        "SportsActivityLocation"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "GolfCourse", 
      "label": "Golf Course", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "founder", 
        "founders", 
        "foundingDate", 
        "hasPOS", 
        "legalName", 
        "location", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "vatID", 
        "branchOf", 
        "currenciesAccepted", 
        "openingHours", 
        "paymentAccepted", 
        "priceRange"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "SportsActivityLocation"
      ], 
      "url": "http://schema.org/GolfCourse"
    }, 
    "GovernmentBuilding": {
      "ancestors": [
        "Thing", 
        "Place", 
        "CivicStructure"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "GovernmentBuilding", 
      "label": "Government Building", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "openingHours"
      ], 
      "specific_properties": [], 
      "subtypes": [
        "CityHall", 
        "Courthouse", 
        "DefenceEstablishment", 
        "Embassy", 
        "LegislativeBuilding"
      ], 
      "supertypes": [
        "CivicStructure"
      ], 
      "url": "http://schema.org/GovernmentBuilding"
    }, 
    "GovernmentOffice": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "LocalBusiness"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "GovernmentOffice", 
      "label": "Government Office", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "founder", 
        "founders", 
        "foundingDate", 
        "hasPOS", 
        "legalName", 
        "location", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "vatID", 
        "branchOf", 
        "currenciesAccepted", 
        "openingHours", 
        "paymentAccepted", 
        "priceRange"
      ], 
      "specific_properties": [], 
      "subtypes": [
        "PostOffice"
      ], 
      "supertypes": [
        "LocalBusiness"
      ], 
      "url": "http://schema.org/GovernmentOffice"
    }, 
    "GovernmentOrganization": {
      "ancestors": [
        "Thing", 
        "Organization"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "GovernmentOrganization", 
      "label": "Government Organization", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "event", 
        "events", 
        "faxNumber", 
        "founder", 
        "founders", 
        "foundingDate", 
        "globalLocationNumber", 
        "hasPOS", 
        "interactionCount", 
        "isicV4", 
        "legalName", 
        "location", 
        "logo", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "review", 
        "reviews", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "telephone", 
        "vatID"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "Organization"
      ], 
      "url": "http://schema.org/GovernmentOrganization"
    }, 
    "GovernmentPermit": {
      "ancestors": [
        "Thing", 
        "Intangible", 
        "Permit"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "GovernmentPermit", 
      "label": "Government Permit", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "issuedBy", 
        "issuedThrough", 
        "permitAudience", 
        "validFor", 
        "validFrom", 
        "validIn", 
        "validUntil"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "Permit"
      ], 
      "url": "http://schema.org/GovernmentPermit"
    }, 
    "GovernmentService": {
      "ancestors": [
        "Thing", 
        "Intangible", 
        "Service"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "GovernmentService", 
      "label": "Government Service", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "availableChannel", 
        "produces", 
        "provider", 
        "serviceArea", 
        "serviceAudience", 
        "serviceType", 
        "serviceOperator"
      ], 
      "specific_properties": [
        "serviceOperator"
      ], 
      "subtypes": [], 
      "supertypes": [
        "Service"
      ], 
      "url": "http://schema.org/GovernmentService"
    }, 
    "GroceryStore": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "LocalBusiness", 
        "Store"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "GroceryStore", 
      "label": "Grocery Store", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "founder", 
        "founders", 
        "foundingDate", 
        "hasPOS", 
        "legalName", 
        "location", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "vatID", 
        "branchOf", 
        "currenciesAccepted", 
        "openingHours", 
        "paymentAccepted", 
        "priceRange"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "Store"
      ], 
      "url": "http://schema.org/GroceryStore"
    }, 
    "HVACBusiness": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "LocalBusiness", 
        "HomeAndConstructionBusiness"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "HVACBusiness", 
      "label": "HVAC Business", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "founder", 
        "founders", 
        "foundingDate", 
        "hasPOS", 
        "legalName", 
        "location", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "vatID", 
        "branchOf", 
        "currenciesAccepted", 
        "openingHours", 
        "paymentAccepted", 
        "priceRange"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "HomeAndConstructionBusiness"
      ], 
      "url": "http://schema.org/HVACBusiness"
    }, 
    "HairSalon": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "LocalBusiness", 
        "HealthAndBeautyBusiness"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "HairSalon", 
      "label": "Hair Salon", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "founder", 
        "founders", 
        "foundingDate", 
        "hasPOS", 
        "legalName", 
        "location", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "vatID", 
        "branchOf", 
        "currenciesAccepted", 
        "openingHours", 
        "paymentAccepted", 
        "priceRange"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "HealthAndBeautyBusiness"
      ], 
      "url": "http://schema.org/HairSalon"
    }, 
    "HardwareStore": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "LocalBusiness", 
        "Store"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "HardwareStore", 
      "label": "Hardware Store", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "founder", 
        "founders", 
        "foundingDate", 
        "hasPOS", 
        "legalName", 
        "location", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "vatID", 
        "branchOf", 
        "currenciesAccepted", 
        "openingHours", 
        "paymentAccepted", 
        "priceRange"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "Store"
      ], 
      "url": "http://schema.org/HardwareStore"
    }, 
    "HealthAndBeautyBusiness": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "LocalBusiness"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "HealthAndBeautyBusiness", 
      "label": "Health And Beauty Business", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "founder", 
        "founders", 
        "foundingDate", 
        "hasPOS", 
        "legalName", 
        "location", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "vatID", 
        "branchOf", 
        "currenciesAccepted", 
        "openingHours", 
        "paymentAccepted", 
        "priceRange"
      ], 
      "specific_properties": [], 
      "subtypes": [
        "BeautySalon", 
        "DaySpa", 
        "HairSalon", 
        "HealthClub", 
        "NailSalon", 
        "TattooParlor"
      ], 
      "supertypes": [
        "LocalBusiness"
      ], 
      "url": "http://schema.org/HealthAndBeautyBusiness"
    }, 
    "HealthClub": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "LocalBusiness", 
        "HealthAndBeautyBusiness"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "HealthClub", 
      "label": "Health Club", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "founder", 
        "founders", 
        "foundingDate", 
        "hasPOS", 
        "legalName", 
        "location", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "vatID", 
        "branchOf", 
        "currenciesAccepted", 
        "openingHours", 
        "paymentAccepted", 
        "priceRange"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "HealthAndBeautyBusiness", 
        "SportsActivityLocation"
      ], 
      "url": "http://schema.org/HealthClub"
    }, 
    "HighSchool": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "EducationalOrganization"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "HighSchool", 
      "label": "High School", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "event", 
        "events", 
        "faxNumber", 
        "founder", 
        "founders", 
        "foundingDate", 
        "globalLocationNumber", 
        "hasPOS", 
        "interactionCount", 
        "isicV4", 
        "legalName", 
        "location", 
        "logo", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "review", 
        "reviews", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "telephone", 
        "vatID", 
        "alumni"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "EducationalOrganization"
      ], 
      "url": "http://schema.org/HighSchool"
    }, 
    "HinduTemple": {
      "ancestors": [
        "Thing", 
        "Place", 
        "CivicStructure", 
        "PlaceOfWorship"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "HinduTemple", 
      "label": "Hindu Temple", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "openingHours"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "PlaceOfWorship"
      ], 
      "url": "http://schema.org/HinduTemple"
    }, 
    "HobbyShop": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "LocalBusiness", 
        "Store"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "HobbyShop", 
      "label": "Hobby Shop", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "founder", 
        "founders", 
        "foundingDate", 
        "hasPOS", 
        "legalName", 
        "location", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "vatID", 
        "branchOf", 
        "currenciesAccepted", 
        "openingHours", 
        "paymentAccepted", 
        "priceRange"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "Store"
      ], 
      "url": "http://schema.org/HobbyShop"
    }, 
    "HomeAndConstructionBusiness": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "LocalBusiness"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "HomeAndConstructionBusiness", 
      "label": "Home And Construction Business", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "founder", 
        "founders", 
        "foundingDate", 
        "hasPOS", 
        "legalName", 
        "location", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "vatID", 
        "branchOf", 
        "currenciesAccepted", 
        "openingHours", 
        "paymentAccepted", 
        "priceRange"
      ], 
      "specific_properties": [], 
      "subtypes": [
        "Electrician", 
        "GeneralContractor", 
        "HVACBusiness", 
        "HousePainter", 
        "Locksmith", 
        "MovingCompany", 
        "Plumber", 
        "RoofingContractor"
      ], 
      "supertypes": [
        "LocalBusiness"
      ], 
      "url": "http://schema.org/HomeAndConstructionBusiness"
    }, 
    "HomeGoodsStore": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "LocalBusiness", 
        "Store"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "HomeGoodsStore", 
      "label": "Home Goods Store", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "founder", 
        "founders", 
        "foundingDate", 
        "hasPOS", 
        "legalName", 
        "location", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "vatID", 
        "branchOf", 
        "currenciesAccepted", 
        "openingHours", 
        "paymentAccepted", 
        "priceRange"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "Store"
      ], 
      "url": "http://schema.org/HomeGoodsStore"
    }, 
    "Hospital": {
      "ancestors": [
        "Thing", 
        "Place", 
        "CivicStructure"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "Hospital", 
      "label": "Hospital", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "founder", 
        "founders", 
        "foundingDate", 
        "hasPOS", 
        "legalName", 
        "location", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "vatID", 
        "branchOf", 
        "currenciesAccepted", 
        "openingHours", 
        "paymentAccepted", 
        "priceRange", 
        "availableService", 
        "medicalSpecialty"
      ], 
      "specific_properties": [
        "availableService", 
        "medicalSpecialty"
      ], 
      "subtypes": [], 
      "supertypes": [
        "CivicStructure", 
        "MedicalOrganization", 
        "EmergencyService"
      ], 
      "url": "http://schema.org/Hospital"
    }, 
    "Hostel": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "LocalBusiness", 
        "LodgingBusiness"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "Hostel", 
      "label": "Hostel", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "founder", 
        "founders", 
        "foundingDate", 
        "hasPOS", 
        "legalName", 
        "location", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "vatID", 
        "branchOf", 
        "currenciesAccepted", 
        "openingHours", 
        "paymentAccepted", 
        "priceRange"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "LodgingBusiness"
      ], 
      "url": "http://schema.org/Hostel"
    }, 
    "Hotel": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "LocalBusiness", 
        "LodgingBusiness"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "Hotel", 
      "label": "Hotel", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "founder", 
        "founders", 
        "foundingDate", 
        "hasPOS", 
        "legalName", 
        "location", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "vatID", 
        "branchOf", 
        "currenciesAccepted", 
        "openingHours", 
        "paymentAccepted", 
        "priceRange"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "LodgingBusiness"
      ], 
      "url": "http://schema.org/Hotel"
    }, 
    "HousePainter": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "LocalBusiness", 
        "HomeAndConstructionBusiness"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "HousePainter", 
      "label": "House Painter", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "founder", 
        "founders", 
        "foundingDate", 
        "hasPOS", 
        "legalName", 
        "location", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "vatID", 
        "branchOf", 
        "currenciesAccepted", 
        "openingHours", 
        "paymentAccepted", 
        "priceRange"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "ProfessionalService", 
        "HomeAndConstructionBusiness"
      ], 
      "url": "http://schema.org/HousePainter"
    }, 
    "IceCreamShop": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "LocalBusiness", 
        "FoodEstablishment"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "IceCreamShop", 
      "label": "Ice Cream Shop", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "founder", 
        "founders", 
        "foundingDate", 
        "hasPOS", 
        "legalName", 
        "location", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "vatID", 
        "branchOf", 
        "currenciesAccepted", 
        "openingHours", 
        "paymentAccepted", 
        "priceRange", 
        "acceptsReservations", 
        "menu", 
        "servesCuisine"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "FoodEstablishment"
      ], 
      "url": "http://schema.org/IceCreamShop"
    }, 
    "IgnoreAction": {
      "ancestors": [
        "Thing", 
        "Action", 
        "AssessAction"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "IgnoreAction", 
      "label": "Ignore Action", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "agent", 
        "endTime", 
        "instrument", 
        "location", 
        "object", 
        "participant", 
        "result", 
        "startTime"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "AssessAction"
      ], 
      "url": "http://schema.org/IgnoreAction"
    }, 
    "ImageGallery": {
      "ancestors": [
        "Thing", 
        "CreativeWork", 
        "WebPage", 
        "CollectionPage"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "ImageGallery", 
      "label": "Image Gallery", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "about", 
        "accessibilityAPI", 
        "accessibilityControl", 
        "accessibilityFeature", 
        "accessibilityHazard", 
        "accountablePerson", 
        "aggregateRating", 
        "alternativeHeadline", 
        "associatedMedia", 
        "audience", 
        "audio", 
        "author", 
        "award", 
        "awards", 
        "citation", 
        "comment", 
        "contentLocation", 
        "contentRating", 
        "contributor", 
        "copyrightHolder", 
        "copyrightYear", 
        "creator", 
        "dateCreated", 
        "dateModified", 
        "datePublished", 
        "discussionUrl", 
        "editor", 
        "educationalAlignment", 
        "educationalUse", 
        "encoding", 
        "encodings", 
        "genre", 
        "headline", 
        "inLanguage", 
        "interactionCount", 
        "interactivityType", 
        "isBasedOnUrl", 
        "isFamilyFriendly", 
        "keywords", 
        "learningResourceType", 
        "mentions", 
        "offers", 
        "provider", 
        "publisher", 
        "publishingPrinciples", 
        "review", 
        "reviews", 
        "sourceOrganization", 
        "text", 
        "thumbnailUrl", 
        "timeRequired", 
        "typicalAgeRange", 
        "version", 
        "video", 
        "breadcrumb", 
        "isPartOf", 
        "lastReviewed", 
        "mainContentOfPage", 
        "primaryImageOfPage", 
        "relatedLink", 
        "reviewedBy", 
        "significantLink", 
        "significantLinks", 
        "specialty"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "CollectionPage"
      ], 
      "url": "http://schema.org/ImageGallery"
    }, 
    "ImageObject": {
      "ancestors": [
        "Thing", 
        "CreativeWork", 
        "MediaObject"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "ImageObject", 
      "label": "Image Object", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "about", 
        "accessibilityAPI", 
        "accessibilityControl", 
        "accessibilityFeature", 
        "accessibilityHazard", 
        "accountablePerson", 
        "aggregateRating", 
        "alternativeHeadline", 
        "associatedMedia", 
        "audience", 
        "audio", 
        "author", 
        "award", 
        "awards", 
        "citation", 
        "comment", 
        "contentLocation", 
        "contentRating", 
        "contributor", 
        "copyrightHolder", 
        "copyrightYear", 
        "creator", 
        "dateCreated", 
        "dateModified", 
        "datePublished", 
        "discussionUrl", 
        "editor", 
        "educationalAlignment", 
        "educationalUse", 
        "encoding", 
        "encodings", 
        "genre", 
        "headline", 
        "inLanguage", 
        "interactionCount", 
        "interactivityType", 
        "isBasedOnUrl", 
        "isFamilyFriendly", 
        "keywords", 
        "learningResourceType", 
        "mentions", 
        "offers", 
        "provider", 
        "publisher", 
        "publishingPrinciples", 
        "review", 
        "reviews", 
        "sourceOrganization", 
        "text", 
        "thumbnailUrl", 
        "timeRequired", 
        "typicalAgeRange", 
        "version", 
        "video", 
        "associatedArticle", 
        "bitrate", 
        "contentSize", 
        "contentUrl", 
        "duration", 
        "embedUrl", 
        "encodesCreativeWork", 
        "encodingFormat", 
        "expires", 
        "height", 
        "playerType", 
        "productionCompany", 
        "publication", 
        "regionsAllowed", 
        "requiresSubscription", 
        "uploadDate", 
        "width", 
        "caption", 
        "exifData", 
        "representativeOfPage", 
        "thumbnail"
      ], 
      "specific_properties": [
        "caption", 
        "exifData", 
        "representativeOfPage", 
        "thumbnail"
      ], 
      "subtypes": [], 
      "supertypes": [
        "MediaObject"
      ], 
      "url": "http://schema.org/ImageObject"
    }, 
    "ImagingTest": {
      "ancestors": [
        "Thing", 
        "MedicalEntity", 
        "MedicalTest"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "ImagingTest", 
      "label": "Imaging Test", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "code", 
        "guideline", 
        "medicineSystem", 
        "recognizingAuthority", 
        "relevantSpecialty", 
        "study", 
        "affectedBy", 
        "normalRange", 
        "signDetected", 
        "usedToDiagnose", 
        "usesDevice", 
        "imagingTechnique"
      ], 
      "specific_properties": [
        "imagingTechnique"
      ], 
      "subtypes": [], 
      "supertypes": [
        "MedicalTest"
      ], 
      "url": "http://schema.org/ImagingTest"
    }, 
    "IndividualProduct": {
      "ancestors": [
        "Thing", 
        "Product"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "IndividualProduct", 
      "label": "Individual Product", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "aggregateRating", 
        "audience", 
        "brand", 
        "color", 
        "depth", 
        "gtin13", 
        "gtin14", 
        "gtin8", 
        "height", 
        "isAccessoryOrSparePartFor", 
        "isConsumableFor", 
        "isRelatedTo", 
        "isSimilarTo", 
        "itemCondition", 
        "logo", 
        "manufacturer", 
        "model", 
        "mpn", 
        "offers", 
        "productID", 
        "releaseDate", 
        "review", 
        "reviews", 
        "sku", 
        "weight", 
        "width", 
        "serialNumber"
      ], 
      "specific_properties": [
        "serialNumber"
      ], 
      "subtypes": [], 
      "supertypes": [
        "Product"
      ], 
      "url": "http://schema.org/IndividualProduct"
    }, 
    "InfectiousAgentClass": {
      "ancestors": [
        "Thing", 
        "MedicalEntity", 
        "MedicalIntangible", 
        "MedicalEnumeration"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "InfectiousAgentClass", 
      "instances": [
        "Bacteria", 
        "Fungus", 
        "MulticellularParasite", 
        "Prion", 
        "Protozoa", 
        "Virus"
      ], 
      "label": "Infectious Agent Class", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "code", 
        "guideline", 
        "medicineSystem", 
        "recognizingAuthority", 
        "relevantSpecialty", 
        "study"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "MedicalEnumeration"
      ], 
      "url": "http://schema.org/InfectiousAgentClass"
    }, 
    "InfectiousDisease": {
      "ancestors": [
        "Thing", 
        "MedicalEntity", 
        "MedicalCondition"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "InfectiousDisease", 
      "label": "Infectious Disease", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "code", 
        "guideline", 
        "medicineSystem", 
        "recognizingAuthority", 
        "relevantSpecialty", 
        "study", 
        "associatedAnatomy", 
        "cause", 
        "differentialDiagnosis", 
        "epidemiology", 
        "expectedPrognosis", 
        "naturalProgression", 
        "pathophysiology", 
        "possibleComplication", 
        "possibleTreatment", 
        "primaryPrevention", 
        "riskFactor", 
        "secondaryPrevention", 
        "signOrSymptom", 
        "stage", 
        "subtype", 
        "typicalTest", 
        "infectiousAgent", 
        "infectiousAgentClass", 
        "transmissionMethod"
      ], 
      "specific_properties": [
        "infectiousAgent", 
        "infectiousAgentClass", 
        "transmissionMethod"
      ], 
      "subtypes": [], 
      "supertypes": [
        "MedicalCondition"
      ], 
      "url": "http://schema.org/InfectiousDisease"
    }, 
    "InformAction": {
      "ancestors": [
        "Thing", 
        "Action", 
        "InteractAction", 
        "CommunicateAction"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "InformAction", 
      "label": "Inform Action", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "agent", 
        "endTime", 
        "instrument", 
        "location", 
        "object", 
        "participant", 
        "result", 
        "startTime", 
        "about", 
        "language", 
        "recipient", 
        "event"
      ], 
      "specific_properties": [
        "event"
      ], 
      "subtypes": [
        "ConfirmAction", 
        "RsvpAction"
      ], 
      "supertypes": [
        "CommunicateAction"
      ], 
      "url": "http://schema.org/InformAction"
    }, 
    "InsertAction": {
      "ancestors": [
        "Thing", 
        "Action", 
        "UpdateAction", 
        "AddAction"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "InsertAction", 
      "label": "Insert Action", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "agent", 
        "endTime", 
        "instrument", 
        "location", 
        "object", 
        "participant", 
        "result", 
        "startTime", 
        "collection", 
        "toLocation"
      ], 
      "specific_properties": [
        "toLocation"
      ], 
      "subtypes": [
        "AppendAction", 
        "PrependAction"
      ], 
      "supertypes": [
        "AddAction"
      ], 
      "url": "http://schema.org/InsertAction"
    }, 
    "InstallAction": {
      "ancestors": [
        "Thing", 
        "Action", 
        "ConsumeAction"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "InstallAction", 
      "label": "Install Action", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "agent", 
        "endTime", 
        "instrument", 
        "location", 
        "object", 
        "participant", 
        "result", 
        "startTime"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "ConsumeAction"
      ], 
      "url": "http://schema.org/InstallAction"
    }, 
    "InsuranceAgency": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "LocalBusiness", 
        "FinancialService"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "InsuranceAgency", 
      "label": "Insurance Agency", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "founder", 
        "founders", 
        "foundingDate", 
        "hasPOS", 
        "legalName", 
        "location", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "vatID", 
        "branchOf", 
        "currenciesAccepted", 
        "openingHours", 
        "paymentAccepted", 
        "priceRange"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "FinancialService"
      ], 
      "url": "http://schema.org/InsuranceAgency"
    }, 
    "Intangible": {
      "ancestors": [
        "Thing"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "Intangible", 
      "label": "Intangible", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url"
      ], 
      "specific_properties": [], 
      "subtypes": [
        "AlignmentObject", 
        "Audience", 
        "Brand", 
        "Demand", 
        "Enumeration", 
        "JobPosting", 
        "Language", 
        "Offer", 
        "Order", 
        "ParcelDelivery", 
        "Permit", 
        "Quantity", 
        "Rating", 
        "Service", 
        "ServiceChannel", 
        "StructuredValue"
      ], 
      "supertypes": [
        "Thing"
      ], 
      "url": "http://schema.org/Intangible"
    }, 
    "InteractAction": {
      "ancestors": [
        "Thing", 
        "Action"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "InteractAction", 
      "label": "Interact Action", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "agent", 
        "endTime", 
        "instrument", 
        "location", 
        "object", 
        "participant", 
        "result", 
        "startTime"
      ], 
      "specific_properties": [], 
      "subtypes": [
        "BefriendAction", 
        "CommunicateAction", 
        "FollowAction", 
        "JoinAction", 
        "LeaveAction", 
        "MarryAction", 
        "RegisterAction", 
        "SubscribeAction", 
        "UnRegisterAction"
      ], 
      "supertypes": [
        "Action"
      ], 
      "url": "http://schema.org/InteractAction"
    }, 
    "InternetCafe": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "LocalBusiness"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "InternetCafe", 
      "label": "Internet Cafe", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "founder", 
        "founders", 
        "foundingDate", 
        "hasPOS", 
        "legalName", 
        "location", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "vatID", 
        "branchOf", 
        "currenciesAccepted", 
        "openingHours", 
        "paymentAccepted", 
        "priceRange"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "LocalBusiness"
      ], 
      "url": "http://schema.org/InternetCafe"
    }, 
    "InviteAction": {
      "ancestors": [
        "Thing", 
        "Action", 
        "InteractAction", 
        "CommunicateAction"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "InviteAction", 
      "label": "Invite Action", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "agent", 
        "endTime", 
        "instrument", 
        "location", 
        "object", 
        "participant", 
        "result", 
        "startTime", 
        "about", 
        "language", 
        "recipient", 
        "event"
      ], 
      "specific_properties": [
        "event"
      ], 
      "subtypes": [], 
      "supertypes": [
        "CommunicateAction"
      ], 
      "url": "http://schema.org/InviteAction"
    }, 
    "ItemAvailability": {
      "ancestors": [
        "Thing", 
        "Intangible", 
        "Enumeration"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "ItemAvailability", 
      "instances": [
        "Discontinued", 
        "InStock", 
        "InStoreOnly", 
        "LimitedAvailability", 
        "OnlineOnly", 
        "OutOfStock", 
        "PreOrder", 
        "SoldOut"
      ], 
      "label": "Item Availability", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "Enumeration"
      ], 
      "url": "http://schema.org/ItemAvailability"
    }, 
    "ItemList": {
      "ancestors": [
        "Thing", 
        "CreativeWork"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "ItemList", 
      "label": "Item List", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "about", 
        "accessibilityAPI", 
        "accessibilityControl", 
        "accessibilityFeature", 
        "accessibilityHazard", 
        "accountablePerson", 
        "aggregateRating", 
        "alternativeHeadline", 
        "associatedMedia", 
        "audience", 
        "audio", 
        "author", 
        "award", 
        "awards", 
        "citation", 
        "comment", 
        "contentLocation", 
        "contentRating", 
        "contributor", 
        "copyrightHolder", 
        "copyrightYear", 
        "creator", 
        "dateCreated", 
        "dateModified", 
        "datePublished", 
        "discussionUrl", 
        "editor", 
        "educationalAlignment", 
        "educationalUse", 
        "encoding", 
        "encodings", 
        "genre", 
        "headline", 
        "inLanguage", 
        "interactionCount", 
        "interactivityType", 
        "isBasedOnUrl", 
        "isFamilyFriendly", 
        "keywords", 
        "learningResourceType", 
        "mentions", 
        "offers", 
        "provider", 
        "publisher", 
        "publishingPrinciples", 
        "review", 
        "reviews", 
        "sourceOrganization", 
        "text", 
        "thumbnailUrl", 
        "timeRequired", 
        "typicalAgeRange", 
        "version", 
        "video", 
        "itemListElement", 
        "itemListOrder"
      ], 
      "specific_properties": [
        "itemListElement", 
        "itemListOrder"
      ], 
      "subtypes": [], 
      "supertypes": [
        "CreativeWork"
      ], 
      "url": "http://schema.org/ItemList"
    }, 
    "ItemPage": {
      "ancestors": [
        "Thing", 
        "CreativeWork", 
        "WebPage"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "ItemPage", 
      "label": "Item Page", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "about", 
        "accessibilityAPI", 
        "accessibilityControl", 
        "accessibilityFeature", 
        "accessibilityHazard", 
        "accountablePerson", 
        "aggregateRating", 
        "alternativeHeadline", 
        "associatedMedia", 
        "audience", 
        "audio", 
        "author", 
        "award", 
        "awards", 
        "citation", 
        "comment", 
        "contentLocation", 
        "contentRating", 
        "contributor", 
        "copyrightHolder", 
        "copyrightYear", 
        "creator", 
        "dateCreated", 
        "dateModified", 
        "datePublished", 
        "discussionUrl", 
        "editor", 
        "educationalAlignment", 
        "educationalUse", 
        "encoding", 
        "encodings", 
        "genre", 
        "headline", 
        "inLanguage", 
        "interactionCount", 
        "interactivityType", 
        "isBasedOnUrl", 
        "isFamilyFriendly", 
        "keywords", 
        "learningResourceType", 
        "mentions", 
        "offers", 
        "provider", 
        "publisher", 
        "publishingPrinciples", 
        "review", 
        "reviews", 
        "sourceOrganization", 
        "text", 
        "thumbnailUrl", 
        "timeRequired", 
        "typicalAgeRange", 
        "version", 
        "video", 
        "breadcrumb", 
        "isPartOf", 
        "lastReviewed", 
        "mainContentOfPage", 
        "primaryImageOfPage", 
        "relatedLink", 
        "reviewedBy", 
        "significantLink", 
        "significantLinks", 
        "specialty"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "WebPage"
      ], 
      "url": "http://schema.org/ItemPage"
    }, 
    "JewelryStore": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "LocalBusiness", 
        "Store"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "JewelryStore", 
      "label": "Jewelry Store", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "founder", 
        "founders", 
        "foundingDate", 
        "hasPOS", 
        "legalName", 
        "location", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "vatID", 
        "branchOf", 
        "currenciesAccepted", 
        "openingHours", 
        "paymentAccepted", 
        "priceRange"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "Store"
      ], 
      "url": "http://schema.org/JewelryStore"
    }, 
    "JobPosting": {
      "ancestors": [
        "Thing", 
        "Intangible"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "JobPosting", 
      "label": "Job Posting", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "baseSalary", 
        "benefits", 
        "datePosted", 
        "educationRequirements", 
        "employmentType", 
        "experienceRequirements", 
        "hiringOrganization", 
        "incentives", 
        "industry", 
        "jobLocation", 
        "occupationalCategory", 
        "qualifications", 
        "responsibilities", 
        "salaryCurrency", 
        "skills", 
        "specialCommitments", 
        "title", 
        "workHours"
      ], 
      "specific_properties": [
        "baseSalary", 
        "benefits", 
        "datePosted", 
        "educationRequirements", 
        "employmentType", 
        "experienceRequirements", 
        "hiringOrganization", 
        "incentives", 
        "industry", 
        "jobLocation", 
        "occupationalCategory", 
        "qualifications", 
        "responsibilities", 
        "salaryCurrency", 
        "skills", 
        "specialCommitments", 
        "title", 
        "workHours"
      ], 
      "subtypes": [], 
      "supertypes": [
        "Intangible"
      ], 
      "url": "http://schema.org/JobPosting"
    }, 
    "JoinAction": {
      "ancestors": [
        "Thing", 
        "Action", 
        "InteractAction"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "JoinAction", 
      "label": "Join Action", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "agent", 
        "endTime", 
        "instrument", 
        "location", 
        "object", 
        "participant", 
        "result", 
        "startTime", 
        "event"
      ], 
      "specific_properties": [
        "event"
      ], 
      "subtypes": [], 
      "supertypes": [
        "InteractAction"
      ], 
      "url": "http://schema.org/JoinAction"
    }, 
    "Joint": {
      "ancestors": [
        "Thing", 
        "MedicalEntity", 
        "AnatomicalStructure"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "Joint", 
      "label": "Joint", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "code", 
        "guideline", 
        "medicineSystem", 
        "recognizingAuthority", 
        "relevantSpecialty", 
        "study", 
        "associatedPathophysiology", 
        "bodyLocation", 
        "connectedTo", 
        "diagram", 
        "function", 
        "partOfSystem", 
        "relatedCondition", 
        "relatedTherapy", 
        "subStructure", 
        "biomechnicalClass", 
        "functionalClass", 
        "structuralClass"
      ], 
      "specific_properties": [
        "biomechnicalClass", 
        "functionalClass", 
        "structuralClass"
      ], 
      "subtypes": [], 
      "supertypes": [
        "AnatomicalStructure"
      ], 
      "url": "http://schema.org/Joint"
    }, 
    "LakeBodyOfWater": {
      "ancestors": [
        "Thing", 
        "Place", 
        "Landform", 
        "BodyOfWater"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "LakeBodyOfWater", 
      "label": "Lake Body of Water", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "BodyOfWater"
      ], 
      "url": "http://schema.org/LakeBodyOfWater"
    }, 
    "Landform": {
      "ancestors": [
        "Thing", 
        "Place"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "Landform", 
      "label": "Landform", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone"
      ], 
      "specific_properties": [], 
      "subtypes": [
        "BodyOfWater", 
        "Continent", 
        "Mountain", 
        "Volcano"
      ], 
      "supertypes": [
        "Place"
      ], 
      "url": "http://schema.org/Landform"
    }, 
    "LandmarksOrHistoricalBuildings": {
      "ancestors": [
        "Thing", 
        "Place"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "LandmarksOrHistoricalBuildings", 
      "label": "Landmarks or Historical Buildings", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "Place"
      ], 
      "url": "http://schema.org/LandmarksOrHistoricalBuildings"
    }, 
    "Language": {
      "ancestors": [
        "Thing", 
        "Intangible"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "Language", 
      "label": "Language", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "Intangible"
      ], 
      "url": "http://schema.org/Language"
    }, 
    "LeaveAction": {
      "ancestors": [
        "Thing", 
        "Action", 
        "InteractAction"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "LeaveAction", 
      "label": "Leave Action", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "agent", 
        "endTime", 
        "instrument", 
        "location", 
        "object", 
        "participant", 
        "result", 
        "startTime", 
        "event"
      ], 
      "specific_properties": [
        "event"
      ], 
      "subtypes": [], 
      "supertypes": [
        "InteractAction"
      ], 
      "url": "http://schema.org/LeaveAction"
    }, 
    "LegislativeBuilding": {
      "ancestors": [
        "Thing", 
        "Place", 
        "CivicStructure", 
        "GovernmentBuilding"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "LegislativeBuilding", 
      "label": "Legislative Building", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "openingHours"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "GovernmentBuilding"
      ], 
      "url": "http://schema.org/LegislativeBuilding"
    }, 
    "LendAction": {
      "ancestors": [
        "Thing", 
        "Action", 
        "TransferAction"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "LendAction", 
      "label": "Lend Action", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "agent", 
        "endTime", 
        "instrument", 
        "location", 
        "object", 
        "participant", 
        "result", 
        "startTime", 
        "fromLocation", 
        "toLocation", 
        "borrower"
      ], 
      "specific_properties": [
        "borrower"
      ], 
      "subtypes": [], 
      "supertypes": [
        "TransferAction"
      ], 
      "url": "http://schema.org/LendAction"
    }, 
    "Library": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "LocalBusiness"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "Library", 
      "label": "Library", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "founder", 
        "founders", 
        "foundingDate", 
        "hasPOS", 
        "legalName", 
        "location", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "vatID", 
        "branchOf", 
        "currenciesAccepted", 
        "openingHours", 
        "paymentAccepted", 
        "priceRange"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "LocalBusiness"
      ], 
      "url": "http://schema.org/Library"
    }, 
    "LifestyleModification": {
      "ancestors": [
        "Thing", 
        "MedicalEntity", 
        "MedicalTherapy"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "LifestyleModification", 
      "label": "Lifestyle Modification", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "code", 
        "guideline", 
        "medicineSystem", 
        "recognizingAuthority", 
        "relevantSpecialty", 
        "study", 
        "adverseOutcome", 
        "contraindication", 
        "duplicateTherapy", 
        "indication", 
        "seriousAdverseOutcome"
      ], 
      "specific_properties": [], 
      "subtypes": [
        "Diet", 
        "PhysicalActivity"
      ], 
      "supertypes": [
        "MedicalTherapy"
      ], 
      "url": "http://schema.org/LifestyleModification"
    }, 
    "Ligament": {
      "ancestors": [
        "Thing", 
        "MedicalEntity", 
        "AnatomicalStructure"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "Ligament", 
      "label": "Ligament", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "code", 
        "guideline", 
        "medicineSystem", 
        "recognizingAuthority", 
        "relevantSpecialty", 
        "study", 
        "associatedPathophysiology", 
        "bodyLocation", 
        "connectedTo", 
        "diagram", 
        "function", 
        "partOfSystem", 
        "relatedCondition", 
        "relatedTherapy", 
        "subStructure"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "AnatomicalStructure"
      ], 
      "url": "http://schema.org/Ligament"
    }, 
    "LikeAction": {
      "ancestors": [
        "Thing", 
        "Action", 
        "AssessAction", 
        "ReactAction"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "LikeAction", 
      "label": "Like Action", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "agent", 
        "endTime", 
        "instrument", 
        "location", 
        "object", 
        "participant", 
        "result", 
        "startTime"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "ReactAction"
      ], 
      "url": "http://schema.org/LikeAction"
    }, 
    "LiquorStore": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "LocalBusiness", 
        "Store"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "LiquorStore", 
      "label": "Liquor Store", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "founder", 
        "founders", 
        "foundingDate", 
        "hasPOS", 
        "legalName", 
        "location", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "vatID", 
        "branchOf", 
        "currenciesAccepted", 
        "openingHours", 
        "paymentAccepted", 
        "priceRange"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "Store"
      ], 
      "url": "http://schema.org/LiquorStore"
    }, 
    "ListenAction": {
      "ancestors": [
        "Thing", 
        "Action", 
        "ConsumeAction"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "ListenAction", 
      "label": "Listen Action", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "agent", 
        "endTime", 
        "instrument", 
        "location", 
        "object", 
        "participant", 
        "result", 
        "startTime"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "ConsumeAction"
      ], 
      "url": "http://schema.org/ListenAction"
    }, 
    "LiteraryEvent": {
      "ancestors": [
        "Thing", 
        "Event"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "LiteraryEvent", 
      "label": "Literary Event", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "attendee", 
        "attendees", 
        "doorTime", 
        "duration", 
        "endDate", 
        "eventStatus", 
        "location", 
        "offers", 
        "performer", 
        "performers", 
        "previousStartDate", 
        "startDate", 
        "subEvent", 
        "subEvents", 
        "superEvent", 
        "typicalAgeRange"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "Event"
      ], 
      "url": "http://schema.org/LiteraryEvent"
    }, 
    "LocalBusiness": {
      "ancestors": [
        "Thing", 
        "Organization"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "LocalBusiness", 
      "label": "Local Business", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "founder", 
        "founders", 
        "foundingDate", 
        "hasPOS", 
        "legalName", 
        "location", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "vatID", 
        "branchOf", 
        "currenciesAccepted", 
        "openingHours", 
        "paymentAccepted", 
        "priceRange"
      ], 
      "specific_properties": [
        "branchOf", 
        "currenciesAccepted", 
        "openingHours", 
        "paymentAccepted", 
        "priceRange"
      ], 
      "subtypes": [
        "AnimalShelter", 
        "AutomotiveBusiness", 
        "ChildCare", 
        "DryCleaningOrLaundry", 
        "EmergencyService", 
        "EmploymentAgency", 
        "EntertainmentBusiness", 
        "FinancialService", 
        "FoodEstablishment", 
        "GovernmentOffice", 
        "HealthAndBeautyBusiness", 
        "HomeAndConstructionBusiness", 
        "InternetCafe", 
        "Library", 
        "LodgingBusiness", 
        "MedicalOrganization", 
        "ProfessionalService", 
        "RadioStation", 
        "RealEstateAgent", 
        "RecyclingCenter", 
        "SelfStorage", 
        "ShoppingCenter", 
        "SportsActivityLocation", 
        "Store", 
        "TelevisionStation", 
        "TouristInformationCenter", 
        "TravelAgency"
      ], 
      "supertypes": [
        "Organization", 
        "Place"
      ], 
      "url": "http://schema.org/LocalBusiness"
    }, 
    "LockerDelivery": {
      "ancestors": [
        "Thing", 
        "Intangible", 
        "Enumeration", 
        "DeliveryMethod"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "LockerDelivery", 
      "label": "Locker Delivery", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "DeliveryMethod"
      ], 
      "url": "http://schema.org/LockerDelivery"
    }, 
    "Locksmith": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "LocalBusiness", 
        "HomeAndConstructionBusiness"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "Locksmith", 
      "label": "Locksmith", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "founder", 
        "founders", 
        "foundingDate", 
        "hasPOS", 
        "legalName", 
        "location", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "vatID", 
        "branchOf", 
        "currenciesAccepted", 
        "openingHours", 
        "paymentAccepted", 
        "priceRange"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "ProfessionalService", 
        "HomeAndConstructionBusiness"
      ], 
      "url": "http://schema.org/Locksmith"
    }, 
    "LodgingBusiness": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "LocalBusiness"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "LodgingBusiness", 
      "label": "Lodging Business", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "founder", 
        "founders", 
        "foundingDate", 
        "hasPOS", 
        "legalName", 
        "location", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "vatID", 
        "branchOf", 
        "currenciesAccepted", 
        "openingHours", 
        "paymentAccepted", 
        "priceRange"
      ], 
      "specific_properties": [], 
      "subtypes": [
        "BedAndBreakfast", 
        "Hostel", 
        "Hotel", 
        "Motel"
      ], 
      "supertypes": [
        "LocalBusiness"
      ], 
      "url": "http://schema.org/LodgingBusiness"
    }, 
    "LoseAction": {
      "ancestors": [
        "Thing", 
        "Action", 
        "AchieveAction"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "LoseAction", 
      "label": "Lose Action", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "agent", 
        "endTime", 
        "instrument", 
        "location", 
        "object", 
        "participant", 
        "result", 
        "startTime", 
        "winner"
      ], 
      "specific_properties": [
        "winner"
      ], 
      "subtypes": [], 
      "supertypes": [
        "AchieveAction"
      ], 
      "url": "http://schema.org/LoseAction"
    }, 
    "LymphaticVessel": {
      "ancestors": [
        "Thing", 
        "MedicalEntity", 
        "AnatomicalStructure", 
        "Vessel"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "LymphaticVessel", 
      "label": "Lymphatic Vessel", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "code", 
        "guideline", 
        "medicineSystem", 
        "recognizingAuthority", 
        "relevantSpecialty", 
        "study", 
        "associatedPathophysiology", 
        "bodyLocation", 
        "connectedTo", 
        "diagram", 
        "function", 
        "partOfSystem", 
        "relatedCondition", 
        "relatedTherapy", 
        "subStructure", 
        "originatesFrom", 
        "regionDrained", 
        "runsTo"
      ], 
      "specific_properties": [
        "originatesFrom", 
        "regionDrained", 
        "runsTo"
      ], 
      "subtypes": [], 
      "supertypes": [
        "Vessel"
      ], 
      "url": "http://schema.org/LymphaticVessel"
    }, 
    "Map": {
      "ancestors": [
        "Thing", 
        "CreativeWork"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "Map", 
      "label": "Map", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "about", 
        "accessibilityAPI", 
        "accessibilityControl", 
        "accessibilityFeature", 
        "accessibilityHazard", 
        "accountablePerson", 
        "aggregateRating", 
        "alternativeHeadline", 
        "associatedMedia", 
        "audience", 
        "audio", 
        "author", 
        "award", 
        "awards", 
        "citation", 
        "comment", 
        "contentLocation", 
        "contentRating", 
        "contributor", 
        "copyrightHolder", 
        "copyrightYear", 
        "creator", 
        "dateCreated", 
        "dateModified", 
        "datePublished", 
        "discussionUrl", 
        "editor", 
        "educationalAlignment", 
        "educationalUse", 
        "encoding", 
        "encodings", 
        "genre", 
        "headline", 
        "inLanguage", 
        "interactionCount", 
        "interactivityType", 
        "isBasedOnUrl", 
        "isFamilyFriendly", 
        "keywords", 
        "learningResourceType", 
        "mentions", 
        "offers", 
        "provider", 
        "publisher", 
        "publishingPrinciples", 
        "review", 
        "reviews", 
        "sourceOrganization", 
        "text", 
        "thumbnailUrl", 
        "timeRequired", 
        "typicalAgeRange", 
        "version", 
        "video"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "CreativeWork"
      ], 
      "url": "http://schema.org/Map"
    }, 
    "MarryAction": {
      "ancestors": [
        "Thing", 
        "Action", 
        "InteractAction"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "MarryAction", 
      "label": "Marry Action", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "agent", 
        "endTime", 
        "instrument", 
        "location", 
        "object", 
        "participant", 
        "result", 
        "startTime"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "InteractAction"
      ], 
      "url": "http://schema.org/MarryAction"
    }, 
    "Mass": {
      "ancestors": [
        "Thing", 
        "Intangible", 
        "Quantity"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "Mass", 
      "label": "Mass", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "Quantity"
      ], 
      "url": "http://schema.org/Mass"
    }, 
    "MaximumDoseSchedule": {
      "ancestors": [
        "Thing", 
        "MedicalEntity", 
        "MedicalIntangible", 
        "DoseSchedule"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "MaximumDoseSchedule", 
      "label": "Maximum Dose Schedule", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "code", 
        "guideline", 
        "medicineSystem", 
        "recognizingAuthority", 
        "relevantSpecialty", 
        "study", 
        "doseUnit", 
        "doseValue", 
        "frequency", 
        "targetPopulation"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "DoseSchedule"
      ], 
      "url": "http://schema.org/MaximumDoseSchedule"
    }, 
    "MediaObject": {
      "ancestors": [
        "Thing", 
        "CreativeWork"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "MediaObject", 
      "label": "Media Object", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "about", 
        "accessibilityAPI", 
        "accessibilityControl", 
        "accessibilityFeature", 
        "accessibilityHazard", 
        "accountablePerson", 
        "aggregateRating", 
        "alternativeHeadline", 
        "associatedMedia", 
        "audience", 
        "audio", 
        "author", 
        "award", 
        "awards", 
        "citation", 
        "comment", 
        "contentLocation", 
        "contentRating", 
        "contributor", 
        "copyrightHolder", 
        "copyrightYear", 
        "creator", 
        "dateCreated", 
        "dateModified", 
        "datePublished", 
        "discussionUrl", 
        "editor", 
        "educationalAlignment", 
        "educationalUse", 
        "encoding", 
        "encodings", 
        "genre", 
        "headline", 
        "inLanguage", 
        "interactionCount", 
        "interactivityType", 
        "isBasedOnUrl", 
        "isFamilyFriendly", 
        "keywords", 
        "learningResourceType", 
        "mentions", 
        "offers", 
        "provider", 
        "publisher", 
        "publishingPrinciples", 
        "review", 
        "reviews", 
        "sourceOrganization", 
        "text", 
        "thumbnailUrl", 
        "timeRequired", 
        "typicalAgeRange", 
        "version", 
        "video", 
        "associatedArticle", 
        "bitrate", 
        "contentSize", 
        "contentUrl", 
        "duration", 
        "embedUrl", 
        "encodesCreativeWork", 
        "encodingFormat", 
        "expires", 
        "height", 
        "playerType", 
        "productionCompany", 
        "publication", 
        "regionsAllowed", 
        "requiresSubscription", 
        "uploadDate", 
        "width"
      ], 
      "specific_properties": [
        "associatedArticle", 
        "bitrate", 
        "contentSize", 
        "contentUrl", 
        "duration", 
        "embedUrl", 
        "encodesCreativeWork", 
        "encodingFormat", 
        "expires", 
        "height", 
        "playerType", 
        "productionCompany", 
        "publication", 
        "regionsAllowed", 
        "requiresSubscription", 
        "uploadDate", 
        "width"
      ], 
      "subtypes": [
        "AudioObject", 
        "DataDownload", 
        "ImageObject", 
        "MusicVideoObject", 
        "VideoObject"
      ], 
      "supertypes": [
        "CreativeWork"
      ], 
      "url": "http://schema.org/MediaObject"
    }, 
    "MedicalAudience": {
      "ancestors": [
        "Thing", 
        "Intangible", 
        "Audience"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "MedicalAudience", 
      "instances": [
        "Clinician", 
        "MedicalResearcher", 
        "Patient"
      ], 
      "label": "Medical Audience", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "audienceType", 
        "geographicArea", 
        "healthCondition", 
        "requiredGender", 
        "requiredMaxAge", 
        "requiredMinAge", 
        "suggestedGender", 
        "suggestedMaxAge", 
        "suggestedMinAge", 
        "code", 
        "guideline", 
        "medicineSystem", 
        "recognizingAuthority", 
        "relevantSpecialty", 
        "study"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "PeopleAudience", 
        "Audience", 
        "MedicalEnumeration"
      ], 
      "url": "http://schema.org/MedicalAudience"
    }, 
    "MedicalCause": {
      "ancestors": [
        "Thing", 
        "MedicalEntity"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "MedicalCause", 
      "label": "Medical Cause", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "code", 
        "guideline", 
        "medicineSystem", 
        "recognizingAuthority", 
        "relevantSpecialty", 
        "study", 
        "causeOf"
      ], 
      "specific_properties": [
        "causeOf"
      ], 
      "subtypes": [], 
      "supertypes": [
        "MedicalEntity"
      ], 
      "url": "http://schema.org/MedicalCause"
    }, 
    "MedicalClinic": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "LocalBusiness", 
        "MedicalOrganization"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "MedicalClinic", 
      "label": "Medical Clinic", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "founder", 
        "founders", 
        "foundingDate", 
        "hasPOS", 
        "legalName", 
        "location", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "vatID", 
        "branchOf", 
        "currenciesAccepted", 
        "openingHours", 
        "paymentAccepted", 
        "priceRange", 
        "availableService", 
        "medicalSpecialty"
      ], 
      "specific_properties": [
        "availableService", 
        "medicalSpecialty"
      ], 
      "subtypes": [], 
      "supertypes": [
        "MedicalOrganization"
      ], 
      "url": "http://schema.org/MedicalClinic"
    }, 
    "MedicalCode": {
      "ancestors": [
        "Thing", 
        "MedicalEntity", 
        "MedicalIntangible"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "MedicalCode", 
      "label": "Medical Code", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "code", 
        "guideline", 
        "medicineSystem", 
        "recognizingAuthority", 
        "relevantSpecialty", 
        "study", 
        "codeValue", 
        "codingSystem"
      ], 
      "specific_properties": [
        "codeValue", 
        "codingSystem"
      ], 
      "subtypes": [], 
      "supertypes": [
        "MedicalIntangible"
      ], 
      "url": "http://schema.org/MedicalCode"
    }, 
    "MedicalCondition": {
      "ancestors": [
        "Thing", 
        "MedicalEntity"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "MedicalCondition", 
      "label": "Medical Condition", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "code", 
        "guideline", 
        "medicineSystem", 
        "recognizingAuthority", 
        "relevantSpecialty", 
        "study", 
        "associatedAnatomy", 
        "cause", 
        "differentialDiagnosis", 
        "epidemiology", 
        "expectedPrognosis", 
        "naturalProgression", 
        "pathophysiology", 
        "possibleComplication", 
        "possibleTreatment", 
        "primaryPrevention", 
        "riskFactor", 
        "secondaryPrevention", 
        "signOrSymptom", 
        "stage", 
        "subtype", 
        "typicalTest"
      ], 
      "specific_properties": [
        "associatedAnatomy", 
        "cause", 
        "differentialDiagnosis", 
        "epidemiology", 
        "expectedPrognosis", 
        "naturalProgression", 
        "pathophysiology", 
        "possibleComplication", 
        "possibleTreatment", 
        "primaryPrevention", 
        "riskFactor", 
        "secondaryPrevention", 
        "signOrSymptom", 
        "stage", 
        "subtype", 
        "typicalTest"
      ], 
      "subtypes": [
        "InfectiousDisease"
      ], 
      "supertypes": [
        "MedicalEntity"
      ], 
      "url": "http://schema.org/MedicalCondition"
    }, 
    "MedicalConditionStage": {
      "ancestors": [
        "Thing", 
        "MedicalEntity", 
        "MedicalIntangible"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "MedicalConditionStage", 
      "label": "Medical Condition Stage", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "code", 
        "guideline", 
        "medicineSystem", 
        "recognizingAuthority", 
        "relevantSpecialty", 
        "study", 
        "stageAsNumber", 
        "subStageSuffix"
      ], 
      "specific_properties": [
        "stageAsNumber", 
        "subStageSuffix"
      ], 
      "subtypes": [], 
      "supertypes": [
        "MedicalIntangible"
      ], 
      "url": "http://schema.org/MedicalConditionStage"
    }, 
    "MedicalContraindication": {
      "ancestors": [
        "Thing", 
        "MedicalEntity"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "MedicalContraindication", 
      "label": "Medical Contraindication", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "code", 
        "guideline", 
        "medicineSystem", 
        "recognizingAuthority", 
        "relevantSpecialty", 
        "study"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "MedicalEntity"
      ], 
      "url": "http://schema.org/MedicalContraindication"
    }, 
    "MedicalDevice": {
      "ancestors": [
        "Thing", 
        "MedicalEntity"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "MedicalDevice", 
      "label": "Medical Device", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "code", 
        "guideline", 
        "medicineSystem", 
        "recognizingAuthority", 
        "relevantSpecialty", 
        "study", 
        "adverseOutcome", 
        "contraindication", 
        "indication", 
        "postOp", 
        "preOp", 
        "procedure", 
        "purpose", 
        "seriousAdverseOutcome"
      ], 
      "specific_properties": [
        "adverseOutcome", 
        "contraindication", 
        "indication", 
        "postOp", 
        "preOp", 
        "procedure", 
        "purpose", 
        "seriousAdverseOutcome"
      ], 
      "subtypes": [], 
      "supertypes": [
        "MedicalEntity"
      ], 
      "url": "http://schema.org/MedicalDevice"
    }, 
    "MedicalDevicePurpose": {
      "ancestors": [
        "Thing", 
        "MedicalEntity", 
        "MedicalIntangible", 
        "MedicalEnumeration"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "MedicalDevicePurpose", 
      "instances": [
        "Diagnostic", 
        "Therapeutic"
      ], 
      "label": "Medical Device Purpose", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "code", 
        "guideline", 
        "medicineSystem", 
        "recognizingAuthority", 
        "relevantSpecialty", 
        "study"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "MedicalEnumeration"
      ], 
      "url": "http://schema.org/MedicalDevicePurpose"
    }, 
    "MedicalEntity": {
      "ancestors": [
        "Thing"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "MedicalEntity", 
      "label": "Medical Entity", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "code", 
        "guideline", 
        "medicineSystem", 
        "recognizingAuthority", 
        "relevantSpecialty", 
        "study"
      ], 
      "specific_properties": [
        "code", 
        "guideline", 
        "medicineSystem", 
        "recognizingAuthority", 
        "relevantSpecialty", 
        "study"
      ], 
      "subtypes": [
        "AnatomicalStructure", 
        "AnatomicalSystem", 
        "MedicalCause", 
        "MedicalCondition", 
        "MedicalContraindication", 
        "MedicalDevice", 
        "MedicalGuideline", 
        "MedicalIndication", 
        "MedicalIntangible", 
        "MedicalProcedure", 
        "MedicalRiskEstimator", 
        "MedicalRiskFactor", 
        "MedicalSignOrSymptom", 
        "MedicalStudy", 
        "MedicalTest", 
        "MedicalTherapy", 
        "SuperficialAnatomy"
      ], 
      "supertypes": [
        "Thing"
      ], 
      "url": "http://schema.org/MedicalEntity"
    }, 
    "MedicalEnumeration": {
      "ancestors": [
        "Thing", 
        "MedicalEntity", 
        "MedicalIntangible"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "MedicalEnumeration", 
      "label": "Medical Enumeration", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "code", 
        "guideline", 
        "medicineSystem", 
        "recognizingAuthority", 
        "relevantSpecialty", 
        "study"
      ], 
      "specific_properties": [], 
      "subtypes": [
        "DrugCostCategory", 
        "DrugPregnancyCategory", 
        "DrugPrescriptionStatus", 
        "InfectiousAgentClass", 
        "MedicalAudience", 
        "MedicalDevicePurpose", 
        "MedicalEvidenceLevel", 
        "MedicalImagingTechnique", 
        "MedicalObservationalStudyDesign", 
        "MedicalProcedureType", 
        "MedicalSpecialty", 
        "MedicalStudyStatus", 
        "MedicalTrialDesign", 
        "MedicineSystem", 
        "PhysicalActivityCategory", 
        "PhysicalExam"
      ], 
      "supertypes": [
        "MedicalIntangible"
      ], 
      "url": "http://schema.org/MedicalEnumeration"
    }, 
    "MedicalEvidenceLevel": {
      "ancestors": [
        "Thing", 
        "MedicalEntity", 
        "MedicalIntangible", 
        "MedicalEnumeration"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "MedicalEvidenceLevel", 
      "instances": [
        "EvidenceLevelA", 
        "EvidenceLevelB", 
        "EvidenceLevelC"
      ], 
      "label": "Medical Evidence Level", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "code", 
        "guideline", 
        "medicineSystem", 
        "recognizingAuthority", 
        "relevantSpecialty", 
        "study"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "MedicalEnumeration"
      ], 
      "url": "http://schema.org/MedicalEvidenceLevel"
    }, 
    "MedicalGuideline": {
      "ancestors": [
        "Thing", 
        "MedicalEntity"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "MedicalGuideline", 
      "label": "Medical Guideline", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "code", 
        "guideline", 
        "medicineSystem", 
        "recognizingAuthority", 
        "relevantSpecialty", 
        "study", 
        "evidenceLevel", 
        "evidenceOrigin", 
        "guidelineDate", 
        "guidelineSubject"
      ], 
      "specific_properties": [
        "evidenceLevel", 
        "evidenceOrigin", 
        "guidelineDate", 
        "guidelineSubject"
      ], 
      "subtypes": [
        "MedicalGuidelineContraindication", 
        "MedicalGuidelineRecommendation"
      ], 
      "supertypes": [
        "MedicalEntity"
      ], 
      "url": "http://schema.org/MedicalGuideline"
    }, 
    "MedicalGuidelineContraindication": {
      "ancestors": [
        "Thing", 
        "MedicalEntity", 
        "MedicalGuideline"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "MedicalGuidelineContraindication", 
      "label": "Medical Guideline Contraindication", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "code", 
        "guideline", 
        "medicineSystem", 
        "recognizingAuthority", 
        "relevantSpecialty", 
        "study", 
        "evidenceLevel", 
        "evidenceOrigin", 
        "guidelineDate", 
        "guidelineSubject"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "MedicalGuideline"
      ], 
      "url": "http://schema.org/MedicalGuidelineContraindication"
    }, 
    "MedicalGuidelineRecommendation": {
      "ancestors": [
        "Thing", 
        "MedicalEntity", 
        "MedicalGuideline"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "MedicalGuidelineRecommendation", 
      "label": "Medical Guideline Recommendation", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "code", 
        "guideline", 
        "medicineSystem", 
        "recognizingAuthority", 
        "relevantSpecialty", 
        "study", 
        "evidenceLevel", 
        "evidenceOrigin", 
        "guidelineDate", 
        "guidelineSubject", 
        "recommendationStrength"
      ], 
      "specific_properties": [
        "recommendationStrength"
      ], 
      "subtypes": [], 
      "supertypes": [
        "MedicalGuideline"
      ], 
      "url": "http://schema.org/MedicalGuidelineRecommendation"
    }, 
    "MedicalImagingTechnique": {
      "ancestors": [
        "Thing", 
        "MedicalEntity", 
        "MedicalIntangible", 
        "MedicalEnumeration"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "MedicalImagingTechnique", 
      "instances": [
        "CT", 
        "MRI", 
        "PET", 
        "Ultrasound", 
        "XRay"
      ], 
      "label": "Medical Imaging Technique", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "code", 
        "guideline", 
        "medicineSystem", 
        "recognizingAuthority", 
        "relevantSpecialty", 
        "study"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "MedicalEnumeration"
      ], 
      "url": "http://schema.org/MedicalImagingTechnique"
    }, 
    "MedicalIndication": {
      "ancestors": [
        "Thing", 
        "MedicalEntity"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "MedicalIndication", 
      "label": "Medical Indication", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "code", 
        "guideline", 
        "medicineSystem", 
        "recognizingAuthority", 
        "relevantSpecialty", 
        "study"
      ], 
      "specific_properties": [], 
      "subtypes": [
        "ApprovedIndication", 
        "PreventionIndication", 
        "TreatmentIndication"
      ], 
      "supertypes": [
        "MedicalEntity"
      ], 
      "url": "http://schema.org/MedicalIndication"
    }, 
    "MedicalIntangible": {
      "ancestors": [
        "Thing", 
        "MedicalEntity"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "MedicalIntangible", 
      "label": "Medical Intangible", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "code", 
        "guideline", 
        "medicineSystem", 
        "recognizingAuthority", 
        "relevantSpecialty", 
        "study"
      ], 
      "specific_properties": [], 
      "subtypes": [
        "DDxElement", 
        "DoseSchedule", 
        "DrugCost", 
        "DrugLegalStatus", 
        "DrugStrength", 
        "MedicalCode", 
        "MedicalConditionStage", 
        "MedicalEnumeration"
      ], 
      "supertypes": [
        "MedicalEntity"
      ], 
      "url": "http://schema.org/MedicalIntangible"
    }, 
    "MedicalObservationalStudy": {
      "ancestors": [
        "Thing", 
        "MedicalEntity", 
        "MedicalStudy"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "MedicalObservationalStudy", 
      "label": "Medical Observational Study", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "code", 
        "guideline", 
        "medicineSystem", 
        "recognizingAuthority", 
        "relevantSpecialty", 
        "study", 
        "outcome", 
        "population", 
        "sponsor", 
        "status", 
        "studyLocation", 
        "studySubject", 
        "studyDesign"
      ], 
      "specific_properties": [
        "studyDesign"
      ], 
      "subtypes": [], 
      "supertypes": [
        "MedicalStudy"
      ], 
      "url": "http://schema.org/MedicalObservationalStudy"
    }, 
    "MedicalObservationalStudyDesign": {
      "ancestors": [
        "Thing", 
        "MedicalEntity", 
        "MedicalIntangible", 
        "MedicalEnumeration"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "MedicalObservationalStudyDesign", 
      "instances": [
        "CaseSeries", 
        "CohortStudy", 
        "CrossSectional", 
        "Longitudinal", 
        "Observational", 
        "Registry"
      ], 
      "label": "Medical Observational Study Design", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "code", 
        "guideline", 
        "medicineSystem", 
        "recognizingAuthority", 
        "relevantSpecialty", 
        "study"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "MedicalEnumeration"
      ], 
      "url": "http://schema.org/MedicalObservationalStudyDesign"
    }, 
    "MedicalOrganization": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "LocalBusiness"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "MedicalOrganization", 
      "label": "Medical Organization", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "founder", 
        "founders", 
        "foundingDate", 
        "hasPOS", 
        "legalName", 
        "location", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "vatID", 
        "branchOf", 
        "currenciesAccepted", 
        "openingHours", 
        "paymentAccepted", 
        "priceRange"
      ], 
      "specific_properties": [], 
      "subtypes": [
        "Dentist", 
        "DiagnosticLab", 
        "Hospital", 
        "MedicalClinic", 
        "Optician", 
        "Pharmacy", 
        "Physician", 
        "VeterinaryCare"
      ], 
      "supertypes": [
        "LocalBusiness"
      ], 
      "url": "http://schema.org/MedicalOrganization"
    }, 
    "MedicalProcedure": {
      "ancestors": [
        "Thing", 
        "MedicalEntity"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "MedicalProcedure", 
      "label": "Medical Procedure", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "code", 
        "guideline", 
        "medicineSystem", 
        "recognizingAuthority", 
        "relevantSpecialty", 
        "study", 
        "followup", 
        "howPerformed", 
        "preparation", 
        "procedureType"
      ], 
      "specific_properties": [
        "followup", 
        "howPerformed", 
        "preparation", 
        "procedureType"
      ], 
      "subtypes": [
        "DiagnosticProcedure", 
        "PalliativeProcedure", 
        "TherapeuticProcedure"
      ], 
      "supertypes": [
        "MedicalEntity"
      ], 
      "url": "http://schema.org/MedicalProcedure"
    }, 
    "MedicalProcedureType": {
      "ancestors": [
        "Thing", 
        "MedicalEntity", 
        "MedicalIntangible", 
        "MedicalEnumeration"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "MedicalProcedureType", 
      "instances": [
        "NoninvasiveProcedure", 
        "PercutaneousProcedure", 
        "SurgicalProcedure"
      ], 
      "label": "Medical Procedure Type", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "code", 
        "guideline", 
        "medicineSystem", 
        "recognizingAuthority", 
        "relevantSpecialty", 
        "study"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "MedicalEnumeration"
      ], 
      "url": "http://schema.org/MedicalProcedureType"
    }, 
    "MedicalRiskCalculator": {
      "ancestors": [
        "Thing", 
        "MedicalEntity", 
        "MedicalRiskEstimator"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "MedicalRiskCalculator", 
      "label": "Medical Risk Calculator", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "code", 
        "guideline", 
        "medicineSystem", 
        "recognizingAuthority", 
        "relevantSpecialty", 
        "study", 
        "estimatesRiskOf", 
        "includedRiskFactor"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "MedicalRiskEstimator"
      ], 
      "url": "http://schema.org/MedicalRiskCalculator"
    }, 
    "MedicalRiskEstimator": {
      "ancestors": [
        "Thing", 
        "MedicalEntity"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "MedicalRiskEstimator", 
      "label": "Medical Risk Estimator", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "code", 
        "guideline", 
        "medicineSystem", 
        "recognizingAuthority", 
        "relevantSpecialty", 
        "study", 
        "estimatesRiskOf", 
        "includedRiskFactor"
      ], 
      "specific_properties": [
        "estimatesRiskOf", 
        "includedRiskFactor"
      ], 
      "subtypes": [
        "MedicalRiskCalculator", 
        "MedicalRiskScore"
      ], 
      "supertypes": [
        "MedicalEntity"
      ], 
      "url": "http://schema.org/MedicalRiskEstimator"
    }, 
    "MedicalRiskFactor": {
      "ancestors": [
        "Thing", 
        "MedicalEntity"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "MedicalRiskFactor", 
      "label": "Medical Risk Factor", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "code", 
        "guideline", 
        "medicineSystem", 
        "recognizingAuthority", 
        "relevantSpecialty", 
        "study", 
        "increasesRiskOf"
      ], 
      "specific_properties": [
        "increasesRiskOf"
      ], 
      "subtypes": [], 
      "supertypes": [
        "MedicalEntity"
      ], 
      "url": "http://schema.org/MedicalRiskFactor"
    }, 
    "MedicalRiskScore": {
      "ancestors": [
        "Thing", 
        "MedicalEntity", 
        "MedicalRiskEstimator"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "MedicalRiskScore", 
      "label": "Medical Risk Score", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "code", 
        "guideline", 
        "medicineSystem", 
        "recognizingAuthority", 
        "relevantSpecialty", 
        "study", 
        "estimatesRiskOf", 
        "includedRiskFactor", 
        "algorithm"
      ], 
      "specific_properties": [
        "algorithm"
      ], 
      "subtypes": [], 
      "supertypes": [
        "MedicalRiskEstimator"
      ], 
      "url": "http://schema.org/MedicalRiskScore"
    }, 
    "MedicalScholarlyArticle": {
      "ancestors": [
        "Thing", 
        "CreativeWork", 
        "Article", 
        "ScholarlyArticle"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "MedicalScholarlyArticle", 
      "label": "Medical Scholarly Article", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "about", 
        "accessibilityAPI", 
        "accessibilityControl", 
        "accessibilityFeature", 
        "accessibilityHazard", 
        "accountablePerson", 
        "aggregateRating", 
        "alternativeHeadline", 
        "associatedMedia", 
        "audience", 
        "audio", 
        "author", 
        "award", 
        "awards", 
        "citation", 
        "comment", 
        "contentLocation", 
        "contentRating", 
        "contributor", 
        "copyrightHolder", 
        "copyrightYear", 
        "creator", 
        "dateCreated", 
        "dateModified", 
        "datePublished", 
        "discussionUrl", 
        "editor", 
        "educationalAlignment", 
        "educationalUse", 
        "encoding", 
        "encodings", 
        "genre", 
        "headline", 
        "inLanguage", 
        "interactionCount", 
        "interactivityType", 
        "isBasedOnUrl", 
        "isFamilyFriendly", 
        "keywords", 
        "learningResourceType", 
        "mentions", 
        "offers", 
        "provider", 
        "publisher", 
        "publishingPrinciples", 
        "review", 
        "reviews", 
        "sourceOrganization", 
        "text", 
        "thumbnailUrl", 
        "timeRequired", 
        "typicalAgeRange", 
        "version", 
        "video", 
        "articleBody", 
        "articleSection", 
        "wordCount", 
        "publicationType"
      ], 
      "specific_properties": [
        "publicationType"
      ], 
      "subtypes": [], 
      "supertypes": [
        "ScholarlyArticle"
      ], 
      "url": "http://schema.org/MedicalScholarlyArticle"
    }, 
    "MedicalSign": {
      "ancestors": [
        "Thing", 
        "MedicalEntity", 
        "MedicalSignOrSymptom"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "MedicalSign", 
      "label": "Medical Sign", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "code", 
        "guideline", 
        "medicineSystem", 
        "recognizingAuthority", 
        "relevantSpecialty", 
        "study", 
        "cause", 
        "possibleTreatment", 
        "identifyingExam", 
        "identifyingTest"
      ], 
      "specific_properties": [
        "identifyingExam", 
        "identifyingTest"
      ], 
      "subtypes": [], 
      "supertypes": [
        "MedicalSignOrSymptom"
      ], 
      "url": "http://schema.org/MedicalSign"
    }, 
    "MedicalSignOrSymptom": {
      "ancestors": [
        "Thing", 
        "MedicalEntity"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "MedicalSignOrSymptom", 
      "label": "Medical Sign or Symptom", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "code", 
        "guideline", 
        "medicineSystem", 
        "recognizingAuthority", 
        "relevantSpecialty", 
        "study", 
        "cause", 
        "possibleTreatment"
      ], 
      "specific_properties": [
        "cause", 
        "possibleTreatment"
      ], 
      "subtypes": [
        "MedicalSign", 
        "MedicalSymptom"
      ], 
      "supertypes": [
        "MedicalEntity"
      ], 
      "url": "http://schema.org/MedicalSignOrSymptom"
    }, 
    "MedicalSpecialty": {
      "ancestors": [
        "Thing", 
        "MedicalEntity", 
        "MedicalIntangible", 
        "MedicalEnumeration"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "MedicalSpecialty", 
      "instances": [
        "Anesthesia", 
        "Cardiovascular", 
        "CommunityHealth", 
        "Dentistry", 
        "Dermatologic", 
        "DietNutrition", 
        "Emergency", 
        "Endocrine", 
        "Gastroenterologic", 
        "Genetic", 
        "Geriatric", 
        "Gynecologic", 
        "Hematologic", 
        "Infectious", 
        "LaboratoryScience", 
        "Midwifery", 
        "Musculoskeletal", 
        "Neurologic", 
        "Nursing", 
        "Obstetric", 
        "OccupationalTherapy", 
        "Oncologic", 
        "Optometic", 
        "Otolaryngologic", 
        "Pathology", 
        "Pediatric", 
        "PharmacySpecialty", 
        "Physiotherapy", 
        "PlasticSurgery", 
        "Podiatric", 
        "PrimaryCare", 
        "Psychiatric", 
        "PublicHealth", 
        "Pulmonary", 
        "Radiograpy", 
        "Renal", 
        "RespiratoryTherapy", 
        "Rheumatologic", 
        "SpeechPathology", 
        "Surgical", 
        "Toxicologic", 
        "Urologic"
      ], 
      "label": "Medical Specialty", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "code", 
        "guideline", 
        "medicineSystem", 
        "recognizingAuthority", 
        "relevantSpecialty", 
        "study"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "MedicalEnumeration", 
        "Specialty"
      ], 
      "url": "http://schema.org/MedicalSpecialty"
    }, 
    "MedicalStudy": {
      "ancestors": [
        "Thing", 
        "MedicalEntity"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "MedicalStudy", 
      "label": "Medical Study", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "code", 
        "guideline", 
        "medicineSystem", 
        "recognizingAuthority", 
        "relevantSpecialty", 
        "study", 
        "outcome", 
        "population", 
        "sponsor", 
        "status", 
        "studyLocation", 
        "studySubject"
      ], 
      "specific_properties": [
        "outcome", 
        "population", 
        "sponsor", 
        "status", 
        "studyLocation", 
        "studySubject"
      ], 
      "subtypes": [
        "MedicalObservationalStudy", 
        "MedicalTrial"
      ], 
      "supertypes": [
        "MedicalEntity"
      ], 
      "url": "http://schema.org/MedicalStudy"
    }, 
    "MedicalStudyStatus": {
      "ancestors": [
        "Thing", 
        "MedicalEntity", 
        "MedicalIntangible", 
        "MedicalEnumeration"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "MedicalStudyStatus", 
      "instances": [
        "ActiveNotRecruiting", 
        "Completed", 
        "EnrollingByInvitation", 
        "NotYetRecruiting", 
        "Recruiting", 
        "ResultsAvailable", 
        "ResultsNotAvailable", 
        "Suspended", 
        "Terminated", 
        "Withdrawn"
      ], 
      "label": "Medical Study Status", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "code", 
        "guideline", 
        "medicineSystem", 
        "recognizingAuthority", 
        "relevantSpecialty", 
        "study"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "MedicalEnumeration"
      ], 
      "url": "http://schema.org/MedicalStudyStatus"
    }, 
    "MedicalSymptom": {
      "ancestors": [
        "Thing", 
        "MedicalEntity", 
        "MedicalSignOrSymptom"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "MedicalSymptom", 
      "label": "Medical Symptom", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "code", 
        "guideline", 
        "medicineSystem", 
        "recognizingAuthority", 
        "relevantSpecialty", 
        "study", 
        "cause", 
        "possibleTreatment"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "MedicalSignOrSymptom"
      ], 
      "url": "http://schema.org/MedicalSymptom"
    }, 
    "MedicalTest": {
      "ancestors": [
        "Thing", 
        "MedicalEntity"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "MedicalTest", 
      "label": "Medical Test", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "code", 
        "guideline", 
        "medicineSystem", 
        "recognizingAuthority", 
        "relevantSpecialty", 
        "study", 
        "affectedBy", 
        "normalRange", 
        "signDetected", 
        "usedToDiagnose", 
        "usesDevice"
      ], 
      "specific_properties": [
        "affectedBy", 
        "normalRange", 
        "signDetected", 
        "usedToDiagnose", 
        "usesDevice"
      ], 
      "subtypes": [
        "BloodTest", 
        "DiagnosticProcedure", 
        "ImagingTest", 
        "MedicalTestPanel", 
        "PathologyTest"
      ], 
      "supertypes": [
        "MedicalEntity"
      ], 
      "url": "http://schema.org/MedicalTest"
    }, 
    "MedicalTestPanel": {
      "ancestors": [
        "Thing", 
        "MedicalEntity", 
        "MedicalTest"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "MedicalTestPanel", 
      "label": "Medical Test Panel", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "code", 
        "guideline", 
        "medicineSystem", 
        "recognizingAuthority", 
        "relevantSpecialty", 
        "study", 
        "affectedBy", 
        "normalRange", 
        "signDetected", 
        "usedToDiagnose", 
        "usesDevice", 
        "subTest"
      ], 
      "specific_properties": [
        "subTest"
      ], 
      "subtypes": [], 
      "supertypes": [
        "MedicalTest"
      ], 
      "url": "http://schema.org/MedicalTestPanel"
    }, 
    "MedicalTherapy": {
      "ancestors": [
        "Thing", 
        "MedicalEntity"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "MedicalTherapy", 
      "label": "Medical Therapy", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "code", 
        "guideline", 
        "medicineSystem", 
        "recognizingAuthority", 
        "relevantSpecialty", 
        "study", 
        "adverseOutcome", 
        "contraindication", 
        "duplicateTherapy", 
        "indication", 
        "seriousAdverseOutcome"
      ], 
      "specific_properties": [
        "adverseOutcome", 
        "contraindication", 
        "duplicateTherapy", 
        "indication", 
        "seriousAdverseOutcome"
      ], 
      "subtypes": [
        "DietarySupplement", 
        "Drug", 
        "DrugClass", 
        "LifestyleModification", 
        "PalliativeProcedure", 
        "PhysicalTherapy", 
        "PsychologicalTreatment", 
        "RadiationTherapy", 
        "TherapeuticProcedure"
      ], 
      "supertypes": [
        "MedicalEntity"
      ], 
      "url": "http://schema.org/MedicalTherapy"
    }, 
    "MedicalTrial": {
      "ancestors": [
        "Thing", 
        "MedicalEntity", 
        "MedicalStudy"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "MedicalTrial", 
      "label": "Medical Trial", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "code", 
        "guideline", 
        "medicineSystem", 
        "recognizingAuthority", 
        "relevantSpecialty", 
        "study", 
        "outcome", 
        "population", 
        "sponsor", 
        "status", 
        "studyLocation", 
        "studySubject", 
        "phase", 
        "trialDesign"
      ], 
      "specific_properties": [
        "phase", 
        "trialDesign"
      ], 
      "subtypes": [], 
      "supertypes": [
        "MedicalStudy"
      ], 
      "url": "http://schema.org/MedicalTrial"
    }, 
    "MedicalTrialDesign": {
      "ancestors": [
        "Thing", 
        "MedicalEntity", 
        "MedicalIntangible", 
        "MedicalEnumeration"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "MedicalTrialDesign", 
      "instances": [
        "DoubleBlindedTrial", 
        "InternationalTrial", 
        "MultiCenterTrial", 
        "OpenTrial", 
        "PlaceboControlledTrial", 
        "RandomizedTrial", 
        "SingleBlindedTrial", 
        "SingleCenterTrial", 
        "TripleBlindedTrial"
      ], 
      "label": "Medical Trial Design", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "code", 
        "guideline", 
        "medicineSystem", 
        "recognizingAuthority", 
        "relevantSpecialty", 
        "study"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "MedicalEnumeration"
      ], 
      "url": "http://schema.org/MedicalTrialDesign"
    }, 
    "MedicalWebPage": {
      "ancestors": [
        "Thing", 
        "CreativeWork", 
        "WebPage"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "MedicalWebPage", 
      "label": "Medical Web Page", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "about", 
        "accessibilityAPI", 
        "accessibilityControl", 
        "accessibilityFeature", 
        "accessibilityHazard", 
        "accountablePerson", 
        "aggregateRating", 
        "alternativeHeadline", 
        "associatedMedia", 
        "audience", 
        "audio", 
        "author", 
        "award", 
        "awards", 
        "citation", 
        "comment", 
        "contentLocation", 
        "contentRating", 
        "contributor", 
        "copyrightHolder", 
        "copyrightYear", 
        "creator", 
        "dateCreated", 
        "dateModified", 
        "datePublished", 
        "discussionUrl", 
        "editor", 
        "educationalAlignment", 
        "educationalUse", 
        "encoding", 
        "encodings", 
        "genre", 
        "headline", 
        "inLanguage", 
        "interactionCount", 
        "interactivityType", 
        "isBasedOnUrl", 
        "isFamilyFriendly", 
        "keywords", 
        "learningResourceType", 
        "mentions", 
        "offers", 
        "provider", 
        "publisher", 
        "publishingPrinciples", 
        "review", 
        "reviews", 
        "sourceOrganization", 
        "text", 
        "thumbnailUrl", 
        "timeRequired", 
        "typicalAgeRange", 
        "version", 
        "video", 
        "breadcrumb", 
        "isPartOf", 
        "lastReviewed", 
        "mainContentOfPage", 
        "primaryImageOfPage", 
        "relatedLink", 
        "reviewedBy", 
        "significantLink", 
        "significantLinks", 
        "specialty", 
        "aspect"
      ], 
      "specific_properties": [
        "aspect"
      ], 
      "subtypes": [], 
      "supertypes": [
        "WebPage"
      ], 
      "url": "http://schema.org/MedicalWebPage"
    }, 
    "MedicineSystem": {
      "ancestors": [
        "Thing", 
        "MedicalEntity", 
        "MedicalIntangible", 
        "MedicalEnumeration"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "MedicineSystem", 
      "instances": [
        "Ayurvedic", 
        "Chiropractic", 
        "Homeopathic", 
        "Osteopathic", 
        "TraditionalChinese", 
        "WesternConventional"
      ], 
      "label": "Medicine System", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "code", 
        "guideline", 
        "medicineSystem", 
        "recognizingAuthority", 
        "relevantSpecialty", 
        "study"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "MedicalEnumeration"
      ], 
      "url": "http://schema.org/MedicineSystem"
    }, 
    "MensClothingStore": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "LocalBusiness", 
        "Store"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "MensClothingStore", 
      "label": "Mens Clothing Store", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "founder", 
        "founders", 
        "foundingDate", 
        "hasPOS", 
        "legalName", 
        "location", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "vatID", 
        "branchOf", 
        "currenciesAccepted", 
        "openingHours", 
        "paymentAccepted", 
        "priceRange"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "Store"
      ], 
      "url": "http://schema.org/MensClothingStore"
    }, 
    "MiddleSchool": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "EducationalOrganization"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "MiddleSchool", 
      "label": "Middle School", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "event", 
        "events", 
        "faxNumber", 
        "founder", 
        "founders", 
        "foundingDate", 
        "globalLocationNumber", 
        "hasPOS", 
        "interactionCount", 
        "isicV4", 
        "legalName", 
        "location", 
        "logo", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "review", 
        "reviews", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "telephone", 
        "vatID", 
        "alumni"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "EducationalOrganization"
      ], 
      "url": "http://schema.org/MiddleSchool"
    }, 
    "MobileApplication": {
      "ancestors": [
        "Thing", 
        "CreativeWork", 
        "SoftwareApplication"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "MobileApplication", 
      "label": "Mobile Application", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "about", 
        "accessibilityAPI", 
        "accessibilityControl", 
        "accessibilityFeature", 
        "accessibilityHazard", 
        "accountablePerson", 
        "aggregateRating", 
        "alternativeHeadline", 
        "associatedMedia", 
        "audience", 
        "audio", 
        "author", 
        "award", 
        "awards", 
        "citation", 
        "comment", 
        "contentLocation", 
        "contentRating", 
        "contributor", 
        "copyrightHolder", 
        "copyrightYear", 
        "creator", 
        "dateCreated", 
        "dateModified", 
        "datePublished", 
        "discussionUrl", 
        "editor", 
        "educationalAlignment", 
        "educationalUse", 
        "encoding", 
        "encodings", 
        "genre", 
        "headline", 
        "inLanguage", 
        "interactionCount", 
        "interactivityType", 
        "isBasedOnUrl", 
        "isFamilyFriendly", 
        "keywords", 
        "learningResourceType", 
        "mentions", 
        "offers", 
        "provider", 
        "publisher", 
        "publishingPrinciples", 
        "review", 
        "reviews", 
        "sourceOrganization", 
        "text", 
        "thumbnailUrl", 
        "timeRequired", 
        "typicalAgeRange", 
        "version", 
        "video", 
        "applicationCategory", 
        "applicationSubCategory", 
        "applicationSuite", 
        "countriesNotSupported", 
        "countriesSupported", 
        "device", 
        "downloadUrl", 
        "featureList", 
        "fileFormat", 
        "fileSize", 
        "installUrl", 
        "memoryRequirements", 
        "operatingSystem", 
        "permissions", 
        "processorRequirements", 
        "releaseNotes", 
        "requirements", 
        "screenshot", 
        "softwareVersion", 
        "storageRequirements", 
        "carrierRequirements"
      ], 
      "specific_properties": [
        "carrierRequirements"
      ], 
      "subtypes": [], 
      "supertypes": [
        "SoftwareApplication"
      ], 
      "url": "http://schema.org/MobileApplication"
    }, 
    "MobilePhoneStore": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "LocalBusiness", 
        "Store"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "MobilePhoneStore", 
      "label": "Mobile Phone Store", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "founder", 
        "founders", 
        "foundingDate", 
        "hasPOS", 
        "legalName", 
        "location", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "vatID", 
        "branchOf", 
        "currenciesAccepted", 
        "openingHours", 
        "paymentAccepted", 
        "priceRange"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "Store"
      ], 
      "url": "http://schema.org/MobilePhoneStore"
    }, 
    "Mosque": {
      "ancestors": [
        "Thing", 
        "Place", 
        "CivicStructure", 
        "PlaceOfWorship"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "Mosque", 
      "label": "Mosque", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "openingHours"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "PlaceOfWorship"
      ], 
      "url": "http://schema.org/Mosque"
    }, 
    "Motel": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "LocalBusiness", 
        "LodgingBusiness"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "Motel", 
      "label": "Motel", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "founder", 
        "founders", 
        "foundingDate", 
        "hasPOS", 
        "legalName", 
        "location", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "vatID", 
        "branchOf", 
        "currenciesAccepted", 
        "openingHours", 
        "paymentAccepted", 
        "priceRange"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "LodgingBusiness"
      ], 
      "url": "http://schema.org/Motel"
    }, 
    "MotorcycleDealer": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "LocalBusiness", 
        "AutomotiveBusiness"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "MotorcycleDealer", 
      "label": "Motorcycle Dealer", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "founder", 
        "founders", 
        "foundingDate", 
        "hasPOS", 
        "legalName", 
        "location", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "vatID", 
        "branchOf", 
        "currenciesAccepted", 
        "openingHours", 
        "paymentAccepted", 
        "priceRange"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "AutomotiveBusiness"
      ], 
      "url": "http://schema.org/MotorcycleDealer"
    }, 
    "MotorcycleRepair": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "LocalBusiness", 
        "AutomotiveBusiness"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "MotorcycleRepair", 
      "label": "Motorcycle Repair", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "founder", 
        "founders", 
        "foundingDate", 
        "hasPOS", 
        "legalName", 
        "location", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "vatID", 
        "branchOf", 
        "currenciesAccepted", 
        "openingHours", 
        "paymentAccepted", 
        "priceRange"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "AutomotiveBusiness"
      ], 
      "url": "http://schema.org/MotorcycleRepair"
    }, 
    "Mountain": {
      "ancestors": [
        "Thing", 
        "Place", 
        "Landform"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "Mountain", 
      "label": "Mountain", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "Landform"
      ], 
      "url": "http://schema.org/Mountain"
    }, 
    "MoveAction": {
      "ancestors": [
        "Thing", 
        "Action"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "MoveAction", 
      "label": "Move Action", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "agent", 
        "endTime", 
        "instrument", 
        "location", 
        "object", 
        "participant", 
        "result", 
        "startTime", 
        "fromLocation", 
        "toLocation"
      ], 
      "specific_properties": [
        "fromLocation", 
        "toLocation"
      ], 
      "subtypes": [
        "ArriveAction", 
        "DepartAction", 
        "TravelAction"
      ], 
      "supertypes": [
        "Action"
      ], 
      "url": "http://schema.org/MoveAction"
    }, 
    "Movie": {
      "ancestors": [
        "Thing", 
        "CreativeWork"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "Movie", 
      "label": "Movie", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "about", 
        "accessibilityAPI", 
        "accessibilityControl", 
        "accessibilityFeature", 
        "accessibilityHazard", 
        "accountablePerson", 
        "aggregateRating", 
        "alternativeHeadline", 
        "associatedMedia", 
        "audience", 
        "audio", 
        "author", 
        "award", 
        "awards", 
        "citation", 
        "comment", 
        "contentLocation", 
        "contentRating", 
        "contributor", 
        "copyrightHolder", 
        "copyrightYear", 
        "creator", 
        "dateCreated", 
        "dateModified", 
        "datePublished", 
        "discussionUrl", 
        "editor", 
        "educationalAlignment", 
        "educationalUse", 
        "encoding", 
        "encodings", 
        "genre", 
        "headline", 
        "inLanguage", 
        "interactionCount", 
        "interactivityType", 
        "isBasedOnUrl", 
        "isFamilyFriendly", 
        "keywords", 
        "learningResourceType", 
        "mentions", 
        "offers", 
        "provider", 
        "publisher", 
        "publishingPrinciples", 
        "review", 
        "reviews", 
        "sourceOrganization", 
        "text", 
        "thumbnailUrl", 
        "timeRequired", 
        "typicalAgeRange", 
        "version", 
        "video", 
        "actor", 
        "actors", 
        "director", 
        "directors", 
        "duration", 
        "musicBy", 
        "producer", 
        "productionCompany", 
        "trailer"
      ], 
      "specific_properties": [
        "actor", 
        "actors", 
        "director", 
        "directors", 
        "duration", 
        "musicBy", 
        "producer", 
        "productionCompany", 
        "trailer"
      ], 
      "subtypes": [], 
      "supertypes": [
        "CreativeWork"
      ], 
      "url": "http://schema.org/Movie"
    }, 
    "MovieRentalStore": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "LocalBusiness", 
        "Store"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "MovieRentalStore", 
      "label": "Movie Rental Store", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "founder", 
        "founders", 
        "foundingDate", 
        "hasPOS", 
        "legalName", 
        "location", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "vatID", 
        "branchOf", 
        "currenciesAccepted", 
        "openingHours", 
        "paymentAccepted", 
        "priceRange"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "Store"
      ], 
      "url": "http://schema.org/MovieRentalStore"
    }, 
    "MovieTheater": {
      "ancestors": [
        "Thing", 
        "Place", 
        "CivicStructure"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "MovieTheater", 
      "label": "Movie Theater", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "founder", 
        "founders", 
        "foundingDate", 
        "hasPOS", 
        "legalName", 
        "location", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "vatID", 
        "branchOf", 
        "currenciesAccepted", 
        "openingHours", 
        "paymentAccepted", 
        "priceRange"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "CivicStructure", 
        "EntertainmentBusiness"
      ], 
      "url": "http://schema.org/MovieTheater"
    }, 
    "MovingCompany": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "LocalBusiness", 
        "HomeAndConstructionBusiness"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "MovingCompany", 
      "label": "Moving Company", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "founder", 
        "founders", 
        "foundingDate", 
        "hasPOS", 
        "legalName", 
        "location", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "vatID", 
        "branchOf", 
        "currenciesAccepted", 
        "openingHours", 
        "paymentAccepted", 
        "priceRange"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "HomeAndConstructionBusiness"
      ], 
      "url": "http://schema.org/MovingCompany"
    }, 
    "Muscle": {
      "ancestors": [
        "Thing", 
        "MedicalEntity", 
        "AnatomicalStructure"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "Muscle", 
      "label": "Muscle", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "code", 
        "guideline", 
        "medicineSystem", 
        "recognizingAuthority", 
        "relevantSpecialty", 
        "study", 
        "associatedPathophysiology", 
        "bodyLocation", 
        "connectedTo", 
        "diagram", 
        "function", 
        "partOfSystem", 
        "relatedCondition", 
        "relatedTherapy", 
        "subStructure", 
        "action", 
        "antagonist", 
        "bloodSupply", 
        "insertion", 
        "nerve", 
        "origin"
      ], 
      "specific_properties": [
        "action", 
        "antagonist", 
        "bloodSupply", 
        "insertion", 
        "nerve", 
        "origin"
      ], 
      "subtypes": [], 
      "supertypes": [
        "AnatomicalStructure"
      ], 
      "url": "http://schema.org/Muscle"
    }, 
    "Museum": {
      "ancestors": [
        "Thing", 
        "Place", 
        "CivicStructure"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "Museum", 
      "label": "Museum", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "openingHours"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "CivicStructure"
      ], 
      "url": "http://schema.org/Museum"
    }, 
    "MusicAlbum": {
      "ancestors": [
        "Thing", 
        "CreativeWork", 
        "MusicPlaylist"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "MusicAlbum", 
      "label": "Music Album", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "about", 
        "accessibilityAPI", 
        "accessibilityControl", 
        "accessibilityFeature", 
        "accessibilityHazard", 
        "accountablePerson", 
        "aggregateRating", 
        "alternativeHeadline", 
        "associatedMedia", 
        "audience", 
        "audio", 
        "author", 
        "award", 
        "awards", 
        "citation", 
        "comment", 
        "contentLocation", 
        "contentRating", 
        "contributor", 
        "copyrightHolder", 
        "copyrightYear", 
        "creator", 
        "dateCreated", 
        "dateModified", 
        "datePublished", 
        "discussionUrl", 
        "editor", 
        "educationalAlignment", 
        "educationalUse", 
        "encoding", 
        "encodings", 
        "genre", 
        "headline", 
        "inLanguage", 
        "interactionCount", 
        "interactivityType", 
        "isBasedOnUrl", 
        "isFamilyFriendly", 
        "keywords", 
        "learningResourceType", 
        "mentions", 
        "offers", 
        "provider", 
        "publisher", 
        "publishingPrinciples", 
        "review", 
        "reviews", 
        "sourceOrganization", 
        "text", 
        "thumbnailUrl", 
        "timeRequired", 
        "typicalAgeRange", 
        "version", 
        "video", 
        "numTracks", 
        "track", 
        "tracks", 
        "byArtist"
      ], 
      "specific_properties": [
        "byArtist"
      ], 
      "subtypes": [], 
      "supertypes": [
        "MusicPlaylist"
      ], 
      "url": "http://schema.org/MusicAlbum"
    }, 
    "MusicEvent": {
      "ancestors": [
        "Thing", 
        "Event"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "MusicEvent", 
      "label": "Music Event", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "attendee", 
        "attendees", 
        "doorTime", 
        "duration", 
        "endDate", 
        "eventStatus", 
        "location", 
        "offers", 
        "performer", 
        "performers", 
        "previousStartDate", 
        "startDate", 
        "subEvent", 
        "subEvents", 
        "superEvent", 
        "typicalAgeRange"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "Event"
      ], 
      "url": "http://schema.org/MusicEvent"
    }, 
    "MusicGroup": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "PerformingGroup"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "MusicGroup", 
      "label": "Music Group", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "event", 
        "events", 
        "faxNumber", 
        "founder", 
        "founders", 
        "foundingDate", 
        "globalLocationNumber", 
        "hasPOS", 
        "interactionCount", 
        "isicV4", 
        "legalName", 
        "location", 
        "logo", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "review", 
        "reviews", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "telephone", 
        "vatID", 
        "album", 
        "albums", 
        "musicGroupMember", 
        "track", 
        "tracks"
      ], 
      "specific_properties": [
        "album", 
        "albums", 
        "musicGroupMember", 
        "track", 
        "tracks"
      ], 
      "subtypes": [], 
      "supertypes": [
        "PerformingGroup"
      ], 
      "url": "http://schema.org/MusicGroup"
    }, 
    "MusicPlaylist": {
      "ancestors": [
        "Thing", 
        "CreativeWork"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "MusicPlaylist", 
      "label": "Music Playlist", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "about", 
        "accessibilityAPI", 
        "accessibilityControl", 
        "accessibilityFeature", 
        "accessibilityHazard", 
        "accountablePerson", 
        "aggregateRating", 
        "alternativeHeadline", 
        "associatedMedia", 
        "audience", 
        "audio", 
        "author", 
        "award", 
        "awards", 
        "citation", 
        "comment", 
        "contentLocation", 
        "contentRating", 
        "contributor", 
        "copyrightHolder", 
        "copyrightYear", 
        "creator", 
        "dateCreated", 
        "dateModified", 
        "datePublished", 
        "discussionUrl", 
        "editor", 
        "educationalAlignment", 
        "educationalUse", 
        "encoding", 
        "encodings", 
        "genre", 
        "headline", 
        "inLanguage", 
        "interactionCount", 
        "interactivityType", 
        "isBasedOnUrl", 
        "isFamilyFriendly", 
        "keywords", 
        "learningResourceType", 
        "mentions", 
        "offers", 
        "provider", 
        "publisher", 
        "publishingPrinciples", 
        "review", 
        "reviews", 
        "sourceOrganization", 
        "text", 
        "thumbnailUrl", 
        "timeRequired", 
        "typicalAgeRange", 
        "version", 
        "video", 
        "numTracks", 
        "track", 
        "tracks"
      ], 
      "specific_properties": [
        "numTracks", 
        "track", 
        "tracks"
      ], 
      "subtypes": [
        "MusicAlbum"
      ], 
      "supertypes": [
        "CreativeWork"
      ], 
      "url": "http://schema.org/MusicPlaylist"
    }, 
    "MusicRecording": {
      "ancestors": [
        "Thing", 
        "CreativeWork"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "MusicRecording", 
      "label": "Music Recording", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "about", 
        "accessibilityAPI", 
        "accessibilityControl", 
        "accessibilityFeature", 
        "accessibilityHazard", 
        "accountablePerson", 
        "aggregateRating", 
        "alternativeHeadline", 
        "associatedMedia", 
        "audience", 
        "audio", 
        "author", 
        "award", 
        "awards", 
        "citation", 
        "comment", 
        "contentLocation", 
        "contentRating", 
        "contributor", 
        "copyrightHolder", 
        "copyrightYear", 
        "creator", 
        "dateCreated", 
        "dateModified", 
        "datePublished", 
        "discussionUrl", 
        "editor", 
        "educationalAlignment", 
        "educationalUse", 
        "encoding", 
        "encodings", 
        "genre", 
        "headline", 
        "inLanguage", 
        "interactionCount", 
        "interactivityType", 
        "isBasedOnUrl", 
        "isFamilyFriendly", 
        "keywords", 
        "learningResourceType", 
        "mentions", 
        "offers", 
        "provider", 
        "publisher", 
        "publishingPrinciples", 
        "review", 
        "reviews", 
        "sourceOrganization", 
        "text", 
        "thumbnailUrl", 
        "timeRequired", 
        "typicalAgeRange", 
        "version", 
        "video", 
        "byArtist", 
        "duration", 
        "inAlbum", 
        "inPlaylist"
      ], 
      "specific_properties": [
        "byArtist", 
        "duration", 
        "inAlbum", 
        "inPlaylist"
      ], 
      "subtypes": [], 
      "supertypes": [
        "CreativeWork"
      ], 
      "url": "http://schema.org/MusicRecording"
    }, 
    "MusicStore": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "LocalBusiness", 
        "Store"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "MusicStore", 
      "label": "Music Store", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "founder", 
        "founders", 
        "foundingDate", 
        "hasPOS", 
        "legalName", 
        "location", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "vatID", 
        "branchOf", 
        "currenciesAccepted", 
        "openingHours", 
        "paymentAccepted", 
        "priceRange"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "Store"
      ], 
      "url": "http://schema.org/MusicStore"
    }, 
    "MusicVenue": {
      "ancestors": [
        "Thing", 
        "Place", 
        "CivicStructure"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "MusicVenue", 
      "label": "Music Venue", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "openingHours"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "CivicStructure"
      ], 
      "url": "http://schema.org/MusicVenue"
    }, 
    "MusicVideoObject": {
      "ancestors": [
        "Thing", 
        "CreativeWork", 
        "MediaObject"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "MusicVideoObject", 
      "label": "Music Video Object", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "about", 
        "accessibilityAPI", 
        "accessibilityControl", 
        "accessibilityFeature", 
        "accessibilityHazard", 
        "accountablePerson", 
        "aggregateRating", 
        "alternativeHeadline", 
        "associatedMedia", 
        "audience", 
        "audio", 
        "author", 
        "award", 
        "awards", 
        "citation", 
        "comment", 
        "contentLocation", 
        "contentRating", 
        "contributor", 
        "copyrightHolder", 
        "copyrightYear", 
        "creator", 
        "dateCreated", 
        "dateModified", 
        "datePublished", 
        "discussionUrl", 
        "editor", 
        "educationalAlignment", 
        "educationalUse", 
        "encoding", 
        "encodings", 
        "genre", 
        "headline", 
        "inLanguage", 
        "interactionCount", 
        "interactivityType", 
        "isBasedOnUrl", 
        "isFamilyFriendly", 
        "keywords", 
        "learningResourceType", 
        "mentions", 
        "offers", 
        "provider", 
        "publisher", 
        "publishingPrinciples", 
        "review", 
        "reviews", 
        "sourceOrganization", 
        "text", 
        "thumbnailUrl", 
        "timeRequired", 
        "typicalAgeRange", 
        "version", 
        "video", 
        "associatedArticle", 
        "bitrate", 
        "contentSize", 
        "contentUrl", 
        "duration", 
        "embedUrl", 
        "encodesCreativeWork", 
        "encodingFormat", 
        "expires", 
        "height", 
        "playerType", 
        "productionCompany", 
        "publication", 
        "regionsAllowed", 
        "requiresSubscription", 
        "uploadDate", 
        "width"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "MediaObject"
      ], 
      "url": "http://schema.org/MusicVideoObject"
    }, 
    "NGO": {
      "ancestors": [
        "Thing", 
        "Organization"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "NGO", 
      "label": "NGO", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "event", 
        "events", 
        "faxNumber", 
        "founder", 
        "founders", 
        "foundingDate", 
        "globalLocationNumber", 
        "hasPOS", 
        "interactionCount", 
        "isicV4", 
        "legalName", 
        "location", 
        "logo", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "review", 
        "reviews", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "telephone", 
        "vatID"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "Organization"
      ], 
      "url": "http://schema.org/NGO"
    }, 
    "NailSalon": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "LocalBusiness", 
        "HealthAndBeautyBusiness"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "NailSalon", 
      "label": "Nail Salon", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "founder", 
        "founders", 
        "foundingDate", 
        "hasPOS", 
        "legalName", 
        "location", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "vatID", 
        "branchOf", 
        "currenciesAccepted", 
        "openingHours", 
        "paymentAccepted", 
        "priceRange"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "HealthAndBeautyBusiness"
      ], 
      "url": "http://schema.org/NailSalon"
    }, 
    "Nerve": {
      "ancestors": [
        "Thing", 
        "MedicalEntity", 
        "AnatomicalStructure"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "Nerve", 
      "label": "Nerve", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "code", 
        "guideline", 
        "medicineSystem", 
        "recognizingAuthority", 
        "relevantSpecialty", 
        "study", 
        "associatedPathophysiology", 
        "bodyLocation", 
        "connectedTo", 
        "diagram", 
        "function", 
        "partOfSystem", 
        "relatedCondition", 
        "relatedTherapy", 
        "subStructure", 
        "branch", 
        "nerveMotor", 
        "sensoryUnit", 
        "sourcedFrom"
      ], 
      "specific_properties": [
        "branch", 
        "nerveMotor", 
        "sensoryUnit", 
        "sourcedFrom"
      ], 
      "subtypes": [], 
      "supertypes": [
        "AnatomicalStructure"
      ], 
      "url": "http://schema.org/Nerve"
    }, 
    "NewsArticle": {
      "ancestors": [
        "Thing", 
        "CreativeWork", 
        "Article"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "NewsArticle", 
      "label": "News Article", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "about", 
        "accessibilityAPI", 
        "accessibilityControl", 
        "accessibilityFeature", 
        "accessibilityHazard", 
        "accountablePerson", 
        "aggregateRating", 
        "alternativeHeadline", 
        "associatedMedia", 
        "audience", 
        "audio", 
        "author", 
        "award", 
        "awards", 
        "citation", 
        "comment", 
        "contentLocation", 
        "contentRating", 
        "contributor", 
        "copyrightHolder", 
        "copyrightYear", 
        "creator", 
        "dateCreated", 
        "dateModified", 
        "datePublished", 
        "discussionUrl", 
        "editor", 
        "educationalAlignment", 
        "educationalUse", 
        "encoding", 
        "encodings", 
        "genre", 
        "headline", 
        "inLanguage", 
        "interactionCount", 
        "interactivityType", 
        "isBasedOnUrl", 
        "isFamilyFriendly", 
        "keywords", 
        "learningResourceType", 
        "mentions", 
        "offers", 
        "provider", 
        "publisher", 
        "publishingPrinciples", 
        "review", 
        "reviews", 
        "sourceOrganization", 
        "text", 
        "thumbnailUrl", 
        "timeRequired", 
        "typicalAgeRange", 
        "version", 
        "video", 
        "articleBody", 
        "articleSection", 
        "wordCount", 
        "dateline", 
        "printColumn", 
        "printEdition", 
        "printPage", 
        "printSection"
      ], 
      "specific_properties": [
        "dateline", 
        "printColumn", 
        "printEdition", 
        "printPage", 
        "printSection"
      ], 
      "subtypes": [], 
      "supertypes": [
        "Article"
      ], 
      "url": "http://schema.org/NewsArticle"
    }, 
    "NightClub": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "LocalBusiness", 
        "EntertainmentBusiness"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "NightClub", 
      "label": "Night Club", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "founder", 
        "founders", 
        "foundingDate", 
        "hasPOS", 
        "legalName", 
        "location", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "vatID", 
        "branchOf", 
        "currenciesAccepted", 
        "openingHours", 
        "paymentAccepted", 
        "priceRange"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "EntertainmentBusiness"
      ], 
      "url": "http://schema.org/NightClub"
    }, 
    "Notary": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "LocalBusiness", 
        "ProfessionalService"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "Notary", 
      "label": "Notary", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "founder", 
        "founders", 
        "foundingDate", 
        "hasPOS", 
        "legalName", 
        "location", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "vatID", 
        "branchOf", 
        "currenciesAccepted", 
        "openingHours", 
        "paymentAccepted", 
        "priceRange"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "ProfessionalService"
      ], 
      "url": "http://schema.org/Notary"
    }, 
    "NutritionInformation": {
      "ancestors": [
        "Thing", 
        "Intangible", 
        "StructuredValue"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "NutritionInformation", 
      "label": "Nutrition Information", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "calories", 
        "carbohydrateContent", 
        "cholesterolContent", 
        "fatContent", 
        "fiberContent", 
        "proteinContent", 
        "saturatedFatContent", 
        "servingSize", 
        "sodiumContent", 
        "sugarContent", 
        "transFatContent", 
        "unsaturatedFatContent"
      ], 
      "specific_properties": [
        "calories", 
        "carbohydrateContent", 
        "cholesterolContent", 
        "fatContent", 
        "fiberContent", 
        "proteinContent", 
        "saturatedFatContent", 
        "servingSize", 
        "sodiumContent", 
        "sugarContent", 
        "transFatContent", 
        "unsaturatedFatContent"
      ], 
      "subtypes": [], 
      "supertypes": [
        "StructuredValue"
      ], 
      "url": "http://schema.org/NutritionInformation"
    }, 
    "OceanBodyOfWater": {
      "ancestors": [
        "Thing", 
        "Place", 
        "Landform", 
        "BodyOfWater"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "OceanBodyOfWater", 
      "label": "Ocean Body of Water", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "BodyOfWater"
      ], 
      "url": "http://schema.org/OceanBodyOfWater"
    }, 
    "Offer": {
      "ancestors": [
        "Thing", 
        "Intangible"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "Offer", 
      "label": "Offer", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "acceptedPaymentMethod", 
        "addOn", 
        "advanceBookingRequirement", 
        "aggregateRating", 
        "availability", 
        "availabilityEnds", 
        "availabilityStarts", 
        "availableAtOrFrom", 
        "availableDeliveryMethod", 
        "businessFunction", 
        "category", 
        "deliveryLeadTime", 
        "eligibleCustomerType", 
        "eligibleDuration", 
        "eligibleQuantity", 
        "eligibleRegion", 
        "eligibleTransactionVolume", 
        "gtin13", 
        "gtin14", 
        "gtin8", 
        "includesObject", 
        "inventoryLevel", 
        "itemCondition", 
        "itemOffered", 
        "mpn", 
        "price", 
        "priceCurrency", 
        "priceSpecification", 
        "priceValidUntil", 
        "review", 
        "reviews", 
        "seller", 
        "serialNumber", 
        "sku", 
        "validFrom", 
        "validThrough", 
        "warranty"
      ], 
      "specific_properties": [
        "acceptedPaymentMethod", 
        "addOn", 
        "advanceBookingRequirement", 
        "aggregateRating", 
        "availability", 
        "availabilityEnds", 
        "availabilityStarts", 
        "availableAtOrFrom", 
        "availableDeliveryMethod", 
        "businessFunction", 
        "category", 
        "deliveryLeadTime", 
        "eligibleCustomerType", 
        "eligibleDuration", 
        "eligibleQuantity", 
        "eligibleRegion", 
        "eligibleTransactionVolume", 
        "gtin13", 
        "gtin14", 
        "gtin8", 
        "includesObject", 
        "inventoryLevel", 
        "itemCondition", 
        "itemOffered", 
        "mpn", 
        "price", 
        "priceCurrency", 
        "priceSpecification", 
        "priceValidUntil", 
        "review", 
        "reviews", 
        "seller", 
        "serialNumber", 
        "sku", 
        "validFrom", 
        "validThrough", 
        "warranty"
      ], 
      "subtypes": [
        "AggregateOffer"
      ], 
      "supertypes": [
        "Intangible"
      ], 
      "url": "http://schema.org/Offer"
    }, 
    "OfferItemCondition": {
      "ancestors": [
        "Thing", 
        "Intangible", 
        "Enumeration"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "OfferItemCondition", 
      "instances": [
        "DamagedCondition", 
        "NewCondition", 
        "RefurbishedCondition", 
        "UsedCondition"
      ], 
      "label": "Offer Item Condition", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "Enumeration"
      ], 
      "url": "http://schema.org/OfferItemCondition"
    }, 
    "OfficeEquipmentStore": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "LocalBusiness", 
        "Store"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "OfficeEquipmentStore", 
      "label": "Office Equipment Store", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "founder", 
        "founders", 
        "foundingDate", 
        "hasPOS", 
        "legalName", 
        "location", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "vatID", 
        "branchOf", 
        "currenciesAccepted", 
        "openingHours", 
        "paymentAccepted", 
        "priceRange"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "Store"
      ], 
      "url": "http://schema.org/OfficeEquipmentStore"
    }, 
    "OnDemandEvent": {
      "ancestors": [
        "Thing", 
        "Event", 
        "PublicationEvent"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "OnDemandEvent", 
      "label": "On Demand Event", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "attendee", 
        "attendees", 
        "doorTime", 
        "duration", 
        "endDate", 
        "eventStatus", 
        "location", 
        "offers", 
        "performer", 
        "performers", 
        "previousStartDate", 
        "startDate", 
        "subEvent", 
        "subEvents", 
        "superEvent", 
        "typicalAgeRange", 
        "free", 
        "publishedOn"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "PublicationEvent"
      ], 
      "url": "http://schema.org/OnDemandEvent"
    }, 
    "OnSitePickup": {
      "ancestors": [
        "Thing", 
        "Intangible", 
        "Enumeration", 
        "DeliveryMethod"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "OnSitePickup", 
      "label": "On Site Pickup", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "DeliveryMethod"
      ], 
      "url": "http://schema.org/OnSitePickup"
    }, 
    "OpeningHoursSpecification": {
      "ancestors": [
        "Thing", 
        "Intangible", 
        "StructuredValue"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "OpeningHoursSpecification", 
      "label": "Opening Hours Specification", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "closes", 
        "dayOfWeek", 
        "opens", 
        "validFrom", 
        "validThrough"
      ], 
      "specific_properties": [
        "closes", 
        "dayOfWeek", 
        "opens", 
        "validFrom", 
        "validThrough"
      ], 
      "subtypes": [], 
      "supertypes": [
        "StructuredValue"
      ], 
      "url": "http://schema.org/OpeningHoursSpecification"
    }, 
    "Optician": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "LocalBusiness", 
        "MedicalOrganization"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "Optician", 
      "label": "Optician", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "founder", 
        "founders", 
        "foundingDate", 
        "hasPOS", 
        "legalName", 
        "location", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "vatID", 
        "branchOf", 
        "currenciesAccepted", 
        "openingHours", 
        "paymentAccepted", 
        "priceRange"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "MedicalOrganization"
      ], 
      "url": "http://schema.org/Optician"
    }, 
    "Order": {
      "ancestors": [
        "Thing", 
        "Intangible"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "Order", 
      "label": "Order", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "acceptedOffer", 
        "billingAddress", 
        "confirmationNumber", 
        "customer", 
        "discount", 
        "discountCode", 
        "discountCurrency", 
        "isGift", 
        "merchant", 
        "orderDate", 
        "orderedItem", 
        "orderNumber", 
        "orderStatus", 
        "paymentDue", 
        "paymentMethod", 
        "paymentMethodId", 
        "paymentUrl"
      ], 
      "specific_properties": [
        "acceptedOffer", 
        "billingAddress", 
        "confirmationNumber", 
        "customer", 
        "discount", 
        "discountCode", 
        "discountCurrency", 
        "isGift", 
        "merchant", 
        "orderDate", 
        "orderedItem", 
        "orderNumber", 
        "orderStatus", 
        "paymentDue", 
        "paymentMethod", 
        "paymentMethodId", 
        "paymentUrl"
      ], 
      "subtypes": [], 
      "supertypes": [
        "Intangible"
      ], 
      "url": "http://schema.org/Order"
    }, 
    "OrderAction": {
      "ancestors": [
        "Thing", 
        "Action", 
        "TradeAction"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "OrderAction", 
      "label": "Order Action", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "agent", 
        "endTime", 
        "instrument", 
        "location", 
        "object", 
        "participant", 
        "result", 
        "startTime", 
        "price"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "TradeAction"
      ], 
      "url": "http://schema.org/OrderAction"
    }, 
    "OrderStatus": {
      "ancestors": [
        "Thing", 
        "Intangible", 
        "Enumeration"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "OrderStatus", 
      "instances": [
        "OrderCancelled", 
        "OrderDelivered", 
        "OrderInTransit", 
        "OrderPaymentDue", 
        "OrderPickupAvailable", 
        "OrderProblem", 
        "OrderProcessing", 
        "OrderReturned"
      ], 
      "label": "Order Status", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "Enumeration"
      ], 
      "url": "http://schema.org/OrderStatus"
    }, 
    "Organization": {
      "ancestors": [
        "Thing"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "Organization", 
      "label": "Organization", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "event", 
        "events", 
        "faxNumber", 
        "founder", 
        "founders", 
        "foundingDate", 
        "globalLocationNumber", 
        "hasPOS", 
        "interactionCount", 
        "isicV4", 
        "legalName", 
        "location", 
        "logo", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "review", 
        "reviews", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "telephone", 
        "vatID"
      ], 
      "specific_properties": [
        "address", 
        "aggregateRating", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "event", 
        "events", 
        "faxNumber", 
        "founder", 
        "founders", 
        "foundingDate", 
        "globalLocationNumber", 
        "hasPOS", 
        "interactionCount", 
        "isicV4", 
        "legalName", 
        "location", 
        "logo", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "review", 
        "reviews", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "telephone", 
        "vatID"
      ], 
      "subtypes": [
        "Corporation", 
        "EducationalOrganization", 
        "GovernmentOrganization", 
        "LocalBusiness", 
        "NGO", 
        "PerformingGroup", 
        "SportsTeam"
      ], 
      "supertypes": [
        "Thing"
      ], 
      "url": "http://schema.org/Organization"
    }, 
    "OrganizeAction": {
      "ancestors": [
        "Thing", 
        "Action"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "OrganizeAction", 
      "label": "Organize Action", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "agent", 
        "endTime", 
        "instrument", 
        "location", 
        "object", 
        "participant", 
        "result", 
        "startTime"
      ], 
      "specific_properties": [], 
      "subtypes": [
        "AllocateAction", 
        "ApplyAction", 
        "BookmarkAction", 
        "PlanAction"
      ], 
      "supertypes": [
        "Action"
      ], 
      "url": "http://schema.org/OrganizeAction"
    }, 
    "OutletStore": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "LocalBusiness", 
        "Store"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "OutletStore", 
      "label": "Outlet Store", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "founder", 
        "founders", 
        "foundingDate", 
        "hasPOS", 
        "legalName", 
        "location", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "vatID", 
        "branchOf", 
        "currenciesAccepted", 
        "openingHours", 
        "paymentAccepted", 
        "priceRange"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "Store"
      ], 
      "url": "http://schema.org/OutletStore"
    }, 
    "OwnershipInfo": {
      "ancestors": [
        "Thing", 
        "Intangible", 
        "StructuredValue"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "OwnershipInfo", 
      "label": "Ownership Info", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "acquiredFrom", 
        "ownedFrom", 
        "ownedThrough", 
        "typeOfGood"
      ], 
      "specific_properties": [
        "acquiredFrom", 
        "ownedFrom", 
        "ownedThrough", 
        "typeOfGood"
      ], 
      "subtypes": [], 
      "supertypes": [
        "StructuredValue"
      ], 
      "url": "http://schema.org/OwnershipInfo"
    }, 
    "PaintAction": {
      "ancestors": [
        "Thing", 
        "Action", 
        "CreateAction"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "PaintAction", 
      "label": "Paint Action", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "agent", 
        "endTime", 
        "instrument", 
        "location", 
        "object", 
        "participant", 
        "result", 
        "startTime"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "CreateAction"
      ], 
      "url": "http://schema.org/PaintAction"
    }, 
    "Painting": {
      "ancestors": [
        "Thing", 
        "CreativeWork"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "Painting", 
      "label": "Painting", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "about", 
        "accessibilityAPI", 
        "accessibilityControl", 
        "accessibilityFeature", 
        "accessibilityHazard", 
        "accountablePerson", 
        "aggregateRating", 
        "alternativeHeadline", 
        "associatedMedia", 
        "audience", 
        "audio", 
        "author", 
        "award", 
        "awards", 
        "citation", 
        "comment", 
        "contentLocation", 
        "contentRating", 
        "contributor", 
        "copyrightHolder", 
        "copyrightYear", 
        "creator", 
        "dateCreated", 
        "dateModified", 
        "datePublished", 
        "discussionUrl", 
        "editor", 
        "educationalAlignment", 
        "educationalUse", 
        "encoding", 
        "encodings", 
        "genre", 
        "headline", 
        "inLanguage", 
        "interactionCount", 
        "interactivityType", 
        "isBasedOnUrl", 
        "isFamilyFriendly", 
        "keywords", 
        "learningResourceType", 
        "mentions", 
        "offers", 
        "provider", 
        "publisher", 
        "publishingPrinciples", 
        "review", 
        "reviews", 
        "sourceOrganization", 
        "text", 
        "thumbnailUrl", 
        "timeRequired", 
        "typicalAgeRange", 
        "version", 
        "video"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "CreativeWork"
      ], 
      "url": "http://schema.org/Painting"
    }, 
    "PalliativeProcedure": {
      "ancestors": [
        "Thing", 
        "MedicalEntity", 
        "MedicalProcedure"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "PalliativeProcedure", 
      "label": "Palliative Procedure", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "code", 
        "guideline", 
        "medicineSystem", 
        "recognizingAuthority", 
        "relevantSpecialty", 
        "study", 
        "adverseOutcome", 
        "contraindication", 
        "duplicateTherapy", 
        "indication", 
        "seriousAdverseOutcome", 
        "followup", 
        "howPerformed", 
        "preparation", 
        "procedureType"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "MedicalProcedure", 
        "MedicalTherapy"
      ], 
      "url": "http://schema.org/PalliativeProcedure"
    }, 
    "ParcelDelivery": {
      "ancestors": [
        "Thing", 
        "Intangible"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "ParcelDelivery", 
      "label": "Parcel Delivery", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "carrier", 
        "deliveryAddress", 
        "deliveryStatus", 
        "expectedArrivalFrom", 
        "expectedArrivalUntil", 
        "hasDeliveryMethod", 
        "itemShipped", 
        "originAddress", 
        "partOfOrder", 
        "trackingNumber", 
        "trackingUrl"
      ], 
      "specific_properties": [
        "carrier", 
        "deliveryAddress", 
        "deliveryStatus", 
        "expectedArrivalFrom", 
        "expectedArrivalUntil", 
        "hasDeliveryMethod", 
        "itemShipped", 
        "originAddress", 
        "partOfOrder", 
        "trackingNumber", 
        "trackingUrl"
      ], 
      "subtypes": [], 
      "supertypes": [
        "Intangible"
      ], 
      "url": "http://schema.org/ParcelDelivery"
    }, 
    "ParcelService": {
      "ancestors": [
        "Thing", 
        "Intangible", 
        "Enumeration", 
        "DeliveryMethod"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "ParcelService", 
      "label": "Parcel Service", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "DeliveryMethod"
      ], 
      "url": "http://schema.org/ParcelService"
    }, 
    "ParentAudience": {
      "ancestors": [
        "Thing", 
        "Intangible", 
        "Audience", 
        "PeopleAudience"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "ParentAudience", 
      "label": "Parent Audience", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "audienceType", 
        "geographicArea", 
        "healthCondition", 
        "requiredGender", 
        "requiredMaxAge", 
        "requiredMinAge", 
        "suggestedGender", 
        "suggestedMaxAge", 
        "suggestedMinAge", 
        "childMaxAge", 
        "childMinAge"
      ], 
      "specific_properties": [
        "childMaxAge", 
        "childMinAge"
      ], 
      "subtypes": [], 
      "supertypes": [
        "PeopleAudience"
      ], 
      "url": "http://schema.org/ParentAudience"
    }, 
    "Park": {
      "ancestors": [
        "Thing", 
        "Place", 
        "CivicStructure"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "Park", 
      "label": "Park", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "openingHours"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "CivicStructure"
      ], 
      "url": "http://schema.org/Park"
    }, 
    "ParkingFacility": {
      "ancestors": [
        "Thing", 
        "Place", 
        "CivicStructure"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "ParkingFacility", 
      "label": "Parking Facility", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "openingHours"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "CivicStructure"
      ], 
      "url": "http://schema.org/ParkingFacility"
    }, 
    "PathologyTest": {
      "ancestors": [
        "Thing", 
        "MedicalEntity", 
        "MedicalTest"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "PathologyTest", 
      "label": "Pathology Test", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "code", 
        "guideline", 
        "medicineSystem", 
        "recognizingAuthority", 
        "relevantSpecialty", 
        "study", 
        "affectedBy", 
        "normalRange", 
        "signDetected", 
        "usedToDiagnose", 
        "usesDevice", 
        "tissueSample"
      ], 
      "specific_properties": [
        "tissueSample"
      ], 
      "subtypes": [], 
      "supertypes": [
        "MedicalTest"
      ], 
      "url": "http://schema.org/PathologyTest"
    }, 
    "PawnShop": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "LocalBusiness", 
        "Store"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "PawnShop", 
      "label": "Pawn Shop", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "founder", 
        "founders", 
        "foundingDate", 
        "hasPOS", 
        "legalName", 
        "location", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "vatID", 
        "branchOf", 
        "currenciesAccepted", 
        "openingHours", 
        "paymentAccepted", 
        "priceRange"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "Store"
      ], 
      "url": "http://schema.org/PawnShop"
    }, 
    "PayAction": {
      "ancestors": [
        "Thing", 
        "Action", 
        "TradeAction"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "PayAction", 
      "label": "Pay Action", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "agent", 
        "endTime", 
        "instrument", 
        "location", 
        "object", 
        "participant", 
        "result", 
        "startTime", 
        "price", 
        "purpose", 
        "recipient"
      ], 
      "specific_properties": [
        "purpose", 
        "recipient"
      ], 
      "subtypes": [], 
      "supertypes": [
        "TradeAction"
      ], 
      "url": "http://schema.org/PayAction"
    }, 
    "PaymentChargeSpecification": {
      "ancestors": [
        "Thing", 
        "Intangible", 
        "StructuredValue", 
        "PriceSpecification"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "PaymentChargeSpecification", 
      "label": "Payment Charge Specification", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "eligibleQuantity", 
        "eligibleTransactionVolume", 
        "maxPrice", 
        "minPrice", 
        "price", 
        "priceCurrency", 
        "validFrom", 
        "validThrough", 
        "valueAddedTaxIncluded", 
        "appliesToDeliveryMethod", 
        "appliesToPaymentMethod"
      ], 
      "specific_properties": [
        "appliesToDeliveryMethod", 
        "appliesToPaymentMethod"
      ], 
      "subtypes": [], 
      "supertypes": [
        "PriceSpecification"
      ], 
      "url": "http://schema.org/PaymentChargeSpecification"
    }, 
    "PaymentMethod": {
      "ancestors": [
        "Thing", 
        "Intangible", 
        "Enumeration"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "PaymentMethod", 
      "label": "Payment Method", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url"
      ], 
      "specific_properties": [], 
      "subtypes": [
        "CreditCard"
      ], 
      "supertypes": [
        "Enumeration"
      ], 
      "url": "http://schema.org/PaymentMethod"
    }, 
    "PeopleAudience": {
      "ancestors": [
        "Thing", 
        "Intangible", 
        "Audience"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "PeopleAudience", 
      "label": "People Audience", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "audienceType", 
        "geographicArea", 
        "healthCondition", 
        "requiredGender", 
        "requiredMaxAge", 
        "requiredMinAge", 
        "suggestedGender", 
        "suggestedMaxAge", 
        "suggestedMinAge"
      ], 
      "specific_properties": [
        "healthCondition", 
        "requiredGender", 
        "requiredMaxAge", 
        "requiredMinAge", 
        "suggestedGender", 
        "suggestedMaxAge", 
        "suggestedMinAge"
      ], 
      "subtypes": [
        "MedicalAudience", 
        "ParentAudience"
      ], 
      "supertypes": [
        "Audience"
      ], 
      "url": "http://schema.org/PeopleAudience"
    }, 
    "PerformAction": {
      "ancestors": [
        "Thing", 
        "Action", 
        "PlayAction"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "PerformAction", 
      "label": "Perform Action", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "agent", 
        "endTime", 
        "instrument", 
        "location", 
        "object", 
        "participant", 
        "result", 
        "startTime", 
        "audience", 
        "event", 
        "entertainmentBusiness"
      ], 
      "specific_properties": [
        "entertainmentBusiness"
      ], 
      "subtypes": [], 
      "supertypes": [
        "PlayAction"
      ], 
      "url": "http://schema.org/PerformAction"
    }, 
    "PerformingArtsTheater": {
      "ancestors": [
        "Thing", 
        "Place", 
        "CivicStructure"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "PerformingArtsTheater", 
      "label": "Performing Arts Theater", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "openingHours"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "CivicStructure"
      ], 
      "url": "http://schema.org/PerformingArtsTheater"
    }, 
    "PerformingGroup": {
      "ancestors": [
        "Thing", 
        "Organization"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "PerformingGroup", 
      "label": "Performing Group", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "event", 
        "events", 
        "faxNumber", 
        "founder", 
        "founders", 
        "foundingDate", 
        "globalLocationNumber", 
        "hasPOS", 
        "interactionCount", 
        "isicV4", 
        "legalName", 
        "location", 
        "logo", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "review", 
        "reviews", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "telephone", 
        "vatID"
      ], 
      "specific_properties": [], 
      "subtypes": [
        "DanceGroup", 
        "MusicGroup", 
        "TheaterGroup"
      ], 
      "supertypes": [
        "Organization"
      ], 
      "url": "http://schema.org/PerformingGroup"
    }, 
    "Permit": {
      "ancestors": [
        "Thing", 
        "Intangible"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "Permit", 
      "label": "Permit", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "issuedBy", 
        "issuedThrough", 
        "permitAudience", 
        "validFor", 
        "validFrom", 
        "validIn", 
        "validUntil"
      ], 
      "specific_properties": [
        "issuedBy", 
        "issuedThrough", 
        "permitAudience", 
        "validFor", 
        "validFrom", 
        "validIn", 
        "validUntil"
      ], 
      "subtypes": [
        "GovernmentPermit"
      ], 
      "supertypes": [
        "Intangible"
      ], 
      "url": "http://schema.org/Permit"
    }, 
    "Person": {
      "ancestors": [
        "Thing"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "Person", 
      "label": "Person", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "additionalName", 
        "address", 
        "affiliation", 
        "alumniOf", 
        "award", 
        "awards", 
        "birthDate", 
        "brand", 
        "children", 
        "colleague", 
        "colleagues", 
        "contactPoint", 
        "contactPoints", 
        "deathDate", 
        "duns", 
        "email", 
        "familyName", 
        "faxNumber", 
        "follows", 
        "gender", 
        "givenName", 
        "globalLocationNumber", 
        "hasPOS", 
        "homeLocation", 
        "honorificPrefix", 
        "honorificSuffix", 
        "interactionCount", 
        "isicV4", 
        "jobTitle", 
        "knows", 
        "makesOffer", 
        "memberOf", 
        "naics", 
        "nationality", 
        "owns", 
        "parent", 
        "parents", 
        "performerIn", 
        "relatedTo", 
        "seeks", 
        "sibling", 
        "siblings", 
        "spouse", 
        "taxID", 
        "telephone", 
        "vatID", 
        "workLocation", 
        "worksFor"
      ], 
      "specific_properties": [
        "additionalName", 
        "address", 
        "affiliation", 
        "alumniOf", 
        "award", 
        "awards", 
        "birthDate", 
        "brand", 
        "children", 
        "colleague", 
        "colleagues", 
        "contactPoint", 
        "contactPoints", 
        "deathDate", 
        "duns", 
        "email", 
        "familyName", 
        "faxNumber", 
        "follows", 
        "gender", 
        "givenName", 
        "globalLocationNumber", 
        "hasPOS", 
        "homeLocation", 
        "honorificPrefix", 
        "honorificSuffix", 
        "interactionCount", 
        "isicV4", 
        "jobTitle", 
        "knows", 
        "makesOffer", 
        "memberOf", 
        "naics", 
        "nationality", 
        "owns", 
        "parent", 
        "parents", 
        "performerIn", 
        "relatedTo", 
        "seeks", 
        "sibling", 
        "siblings", 
        "spouse", 
        "taxID", 
        "telephone", 
        "vatID", 
        "workLocation", 
        "worksFor"
      ], 
      "subtypes": [], 
      "supertypes": [
        "Thing"
      ], 
      "url": "http://schema.org/Person"
    }, 
    "PetStore": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "LocalBusiness", 
        "Store"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "PetStore", 
      "label": "Pet Store", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "founder", 
        "founders", 
        "foundingDate", 
        "hasPOS", 
        "legalName", 
        "location", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "vatID", 
        "branchOf", 
        "currenciesAccepted", 
        "openingHours", 
        "paymentAccepted", 
        "priceRange"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "Store"
      ], 
      "url": "http://schema.org/PetStore"
    }, 
    "Pharmacy": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "LocalBusiness", 
        "MedicalOrganization"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "Pharmacy", 
      "label": "Pharmacy", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "founder", 
        "founders", 
        "foundingDate", 
        "hasPOS", 
        "legalName", 
        "location", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "vatID", 
        "branchOf", 
        "currenciesAccepted", 
        "openingHours", 
        "paymentAccepted", 
        "priceRange"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "MedicalOrganization"
      ], 
      "url": "http://schema.org/Pharmacy"
    }, 
    "Photograph": {
      "ancestors": [
        "Thing", 
        "CreativeWork"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "Photograph", 
      "label": "Photograph", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "about", 
        "accessibilityAPI", 
        "accessibilityControl", 
        "accessibilityFeature", 
        "accessibilityHazard", 
        "accountablePerson", 
        "aggregateRating", 
        "alternativeHeadline", 
        "associatedMedia", 
        "audience", 
        "audio", 
        "author", 
        "award", 
        "awards", 
        "citation", 
        "comment", 
        "contentLocation", 
        "contentRating", 
        "contributor", 
        "copyrightHolder", 
        "copyrightYear", 
        "creator", 
        "dateCreated", 
        "dateModified", 
        "datePublished", 
        "discussionUrl", 
        "editor", 
        "educationalAlignment", 
        "educationalUse", 
        "encoding", 
        "encodings", 
        "genre", 
        "headline", 
        "inLanguage", 
        "interactionCount", 
        "interactivityType", 
        "isBasedOnUrl", 
        "isFamilyFriendly", 
        "keywords", 
        "learningResourceType", 
        "mentions", 
        "offers", 
        "provider", 
        "publisher", 
        "publishingPrinciples", 
        "review", 
        "reviews", 
        "sourceOrganization", 
        "text", 
        "thumbnailUrl", 
        "timeRequired", 
        "typicalAgeRange", 
        "version", 
        "video"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "CreativeWork"
      ], 
      "url": "http://schema.org/Photograph"
    }, 
    "PhotographAction": {
      "ancestors": [
        "Thing", 
        "Action", 
        "CreateAction"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "PhotographAction", 
      "label": "Photograph Action", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "agent", 
        "endTime", 
        "instrument", 
        "location", 
        "object", 
        "participant", 
        "result", 
        "startTime"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "CreateAction"
      ], 
      "url": "http://schema.org/PhotographAction"
    }, 
    "PhysicalActivity": {
      "ancestors": [
        "Thing", 
        "MedicalEntity", 
        "MedicalTherapy", 
        "LifestyleModification"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "PhysicalActivity", 
      "label": "Physical Activity", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "code", 
        "guideline", 
        "medicineSystem", 
        "recognizingAuthority", 
        "relevantSpecialty", 
        "study", 
        "adverseOutcome", 
        "contraindication", 
        "duplicateTherapy", 
        "indication", 
        "seriousAdverseOutcome", 
        "associatedAnatomy", 
        "category", 
        "epidemiology", 
        "pathophysiology"
      ], 
      "specific_properties": [
        "associatedAnatomy", 
        "category", 
        "epidemiology", 
        "pathophysiology"
      ], 
      "subtypes": [
        "ExercisePlan"
      ], 
      "supertypes": [
        "LifestyleModification"
      ], 
      "url": "http://schema.org/PhysicalActivity"
    }, 
    "PhysicalActivityCategory": {
      "ancestors": [
        "Thing", 
        "MedicalEntity", 
        "MedicalIntangible", 
        "MedicalEnumeration"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "PhysicalActivityCategory", 
      "instances": [
        "AerobicActivity", 
        "AnaerobicActivity", 
        "Balance", 
        "Flexibility", 
        "LeisureTimeActivity", 
        "OccupationalActivity", 
        "StrengthTraining"
      ], 
      "label": "Physical Activity Category", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "code", 
        "guideline", 
        "medicineSystem", 
        "recognizingAuthority", 
        "relevantSpecialty", 
        "study"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "MedicalEnumeration"
      ], 
      "url": "http://schema.org/PhysicalActivityCategory"
    }, 
    "PhysicalExam": {
      "ancestors": [
        "Thing", 
        "MedicalEntity", 
        "MedicalIntangible", 
        "MedicalEnumeration"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "PhysicalExam", 
      "instances": [
        "Abdomen", 
        "Appearance", 
        "CardiovascularExam", 
        "Ear", 
        "Eye", 
        "Genitourinary", 
        "Head", 
        "Lung", 
        "MusculoskeletalExam", 
        "Neck", 
        "Neuro", 
        "Nose", 
        "Skin", 
        "Throat", 
        "VitalSign"
      ], 
      "label": "Physical Exam", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "code", 
        "guideline", 
        "medicineSystem", 
        "recognizingAuthority", 
        "relevantSpecialty", 
        "study"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "MedicalEnumeration"
      ], 
      "url": "http://schema.org/PhysicalExam"
    }, 
    "PhysicalTherapy": {
      "ancestors": [
        "Thing", 
        "MedicalEntity", 
        "MedicalTherapy"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "PhysicalTherapy", 
      "label": "Physical Therapy", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "code", 
        "guideline", 
        "medicineSystem", 
        "recognizingAuthority", 
        "relevantSpecialty", 
        "study", 
        "adverseOutcome", 
        "contraindication", 
        "duplicateTherapy", 
        "indication", 
        "seriousAdverseOutcome"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "MedicalTherapy"
      ], 
      "url": "http://schema.org/PhysicalTherapy"
    }, 
    "Physician": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "LocalBusiness", 
        "MedicalOrganization"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "Physician", 
      "label": "Physician", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "founder", 
        "founders", 
        "foundingDate", 
        "hasPOS", 
        "legalName", 
        "location", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "vatID", 
        "branchOf", 
        "currenciesAccepted", 
        "openingHours", 
        "paymentAccepted", 
        "priceRange", 
        "availableService", 
        "hospitalAffiliation", 
        "medicalSpecialty"
      ], 
      "specific_properties": [
        "availableService", 
        "hospitalAffiliation", 
        "medicalSpecialty"
      ], 
      "subtypes": [], 
      "supertypes": [
        "MedicalOrganization"
      ], 
      "url": "http://schema.org/Physician"
    }, 
    "Place": {
      "ancestors": [
        "Thing"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "Place", 
      "label": "Place", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone"
      ], 
      "specific_properties": [
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone"
      ], 
      "subtypes": [
        "AdministrativeArea", 
        "CivicStructure", 
        "Landform", 
        "LandmarksOrHistoricalBuildings", 
        "LocalBusiness", 
        "Residence", 
        "TouristAttraction"
      ], 
      "supertypes": [
        "Thing"
      ], 
      "url": "http://schema.org/Place"
    }, 
    "PlaceOfWorship": {
      "ancestors": [
        "Thing", 
        "Place", 
        "CivicStructure"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "PlaceOfWorship", 
      "label": "Place of Worship", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "openingHours"
      ], 
      "specific_properties": [], 
      "subtypes": [
        "BuddhistTemple", 
        "CatholicChurch", 
        "Church", 
        "HinduTemple", 
        "Mosque", 
        "Synagogue"
      ], 
      "supertypes": [
        "CivicStructure"
      ], 
      "url": "http://schema.org/PlaceOfWorship"
    }, 
    "PlanAction": {
      "ancestors": [
        "Thing", 
        "Action", 
        "OrganizeAction"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "PlanAction", 
      "label": "Plan Action", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "agent", 
        "endTime", 
        "instrument", 
        "location", 
        "object", 
        "participant", 
        "result", 
        "startTime", 
        "scheduledTime"
      ], 
      "specific_properties": [
        "scheduledTime"
      ], 
      "subtypes": [
        "CancelAction", 
        "ReserveAction", 
        "ScheduleAction"
      ], 
      "supertypes": [
        "OrganizeAction"
      ], 
      "url": "http://schema.org/PlanAction"
    }, 
    "PlayAction": {
      "ancestors": [
        "Thing", 
        "Action"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "PlayAction", 
      "label": "Play Action", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "agent", 
        "endTime", 
        "instrument", 
        "location", 
        "object", 
        "participant", 
        "result", 
        "startTime", 
        "audience", 
        "event"
      ], 
      "specific_properties": [
        "audience", 
        "event"
      ], 
      "subtypes": [
        "ExerciseAction", 
        "PerformAction"
      ], 
      "supertypes": [
        "Action"
      ], 
      "url": "http://schema.org/PlayAction"
    }, 
    "Playground": {
      "ancestors": [
        "Thing", 
        "Place", 
        "CivicStructure"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "Playground", 
      "label": "Playground", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "openingHours"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "CivicStructure"
      ], 
      "url": "http://schema.org/Playground"
    }, 
    "Plumber": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "LocalBusiness", 
        "HomeAndConstructionBusiness"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "Plumber", 
      "label": "Plumber", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "founder", 
        "founders", 
        "foundingDate", 
        "hasPOS", 
        "legalName", 
        "location", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "vatID", 
        "branchOf", 
        "currenciesAccepted", 
        "openingHours", 
        "paymentAccepted", 
        "priceRange"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "ProfessionalService", 
        "HomeAndConstructionBusiness"
      ], 
      "url": "http://schema.org/Plumber"
    }, 
    "PoliceStation": {
      "ancestors": [
        "Thing", 
        "Place", 
        "CivicStructure"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "PoliceStation", 
      "label": "Police Station", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "founder", 
        "founders", 
        "foundingDate", 
        "hasPOS", 
        "legalName", 
        "location", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "vatID", 
        "branchOf", 
        "currenciesAccepted", 
        "openingHours", 
        "paymentAccepted", 
        "priceRange"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "CivicStructure", 
        "EmergencyService"
      ], 
      "url": "http://schema.org/PoliceStation"
    }, 
    "Pond": {
      "ancestors": [
        "Thing", 
        "Place", 
        "Landform", 
        "BodyOfWater"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "Pond", 
      "label": "Pond", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "BodyOfWater"
      ], 
      "url": "http://schema.org/Pond"
    }, 
    "PostOffice": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "LocalBusiness", 
        "GovernmentOffice"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "PostOffice", 
      "label": "Post Office", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "founder", 
        "founders", 
        "foundingDate", 
        "hasPOS", 
        "legalName", 
        "location", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "vatID", 
        "branchOf", 
        "currenciesAccepted", 
        "openingHours", 
        "paymentAccepted", 
        "priceRange"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "GovernmentOffice"
      ], 
      "url": "http://schema.org/PostOffice"
    }, 
    "PostalAddress": {
      "ancestors": [
        "Thing", 
        "Intangible", 
        "StructuredValue", 
        "ContactPoint"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "PostalAddress", 
      "label": "Postal Address", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "areaServed", 
        "availableLanguage", 
        "contactOption", 
        "contactType", 
        "email", 
        "faxNumber", 
        "hoursAvailable", 
        "productSupported", 
        "telephone", 
        "addressCountry", 
        "addressLocality", 
        "addressRegion", 
        "postalCode", 
        "postOfficeBoxNumber", 
        "streetAddress"
      ], 
      "specific_properties": [
        "addressCountry", 
        "addressLocality", 
        "addressRegion", 
        "postalCode", 
        "postOfficeBoxNumber", 
        "streetAddress"
      ], 
      "subtypes": [], 
      "supertypes": [
        "ContactPoint"
      ], 
      "url": "http://schema.org/PostalAddress"
    }, 
    "PrependAction": {
      "ancestors": [
        "Thing", 
        "Action", 
        "UpdateAction", 
        "AddAction", 
        "InsertAction"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "PrependAction", 
      "label": "Prepend Action", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "agent", 
        "endTime", 
        "instrument", 
        "location", 
        "object", 
        "participant", 
        "result", 
        "startTime", 
        "collection", 
        "toLocation"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "InsertAction"
      ], 
      "url": "http://schema.org/PrependAction"
    }, 
    "Preschool": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "EducationalOrganization"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "Preschool", 
      "label": "Preschool", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "event", 
        "events", 
        "faxNumber", 
        "founder", 
        "founders", 
        "foundingDate", 
        "globalLocationNumber", 
        "hasPOS", 
        "interactionCount", 
        "isicV4", 
        "legalName", 
        "location", 
        "logo", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "review", 
        "reviews", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "telephone", 
        "vatID", 
        "alumni"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "EducationalOrganization"
      ], 
      "url": "http://schema.org/Preschool"
    }, 
    "PreventionIndication": {
      "ancestors": [
        "Thing", 
        "MedicalEntity", 
        "MedicalIndication"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "PreventionIndication", 
      "label": "Prevention Indication", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "code", 
        "guideline", 
        "medicineSystem", 
        "recognizingAuthority", 
        "relevantSpecialty", 
        "study"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "MedicalIndication"
      ], 
      "url": "http://schema.org/PreventionIndication"
    }, 
    "PriceSpecification": {
      "ancestors": [
        "Thing", 
        "Intangible", 
        "StructuredValue"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "PriceSpecification", 
      "label": "Price Specification", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "eligibleQuantity", 
        "eligibleTransactionVolume", 
        "maxPrice", 
        "minPrice", 
        "price", 
        "priceCurrency", 
        "validFrom", 
        "validThrough", 
        "valueAddedTaxIncluded"
      ], 
      "specific_properties": [
        "eligibleQuantity", 
        "eligibleTransactionVolume", 
        "maxPrice", 
        "minPrice", 
        "price", 
        "priceCurrency", 
        "validFrom", 
        "validThrough", 
        "valueAddedTaxIncluded"
      ], 
      "subtypes": [
        "DeliveryChargeSpecification", 
        "PaymentChargeSpecification", 
        "UnitPriceSpecification"
      ], 
      "supertypes": [
        "StructuredValue"
      ], 
      "url": "http://schema.org/PriceSpecification"
    }, 
    "Product": {
      "ancestors": [
        "Thing"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "Product", 
      "label": "Product", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "aggregateRating", 
        "audience", 
        "brand", 
        "color", 
        "depth", 
        "gtin13", 
        "gtin14", 
        "gtin8", 
        "height", 
        "isAccessoryOrSparePartFor", 
        "isConsumableFor", 
        "isRelatedTo", 
        "isSimilarTo", 
        "itemCondition", 
        "logo", 
        "manufacturer", 
        "model", 
        "mpn", 
        "offers", 
        "productID", 
        "releaseDate", 
        "review", 
        "reviews", 
        "sku", 
        "weight", 
        "width"
      ], 
      "specific_properties": [
        "aggregateRating", 
        "audience", 
        "brand", 
        "color", 
        "depth", 
        "gtin13", 
        "gtin14", 
        "gtin8", 
        "height", 
        "isAccessoryOrSparePartFor", 
        "isConsumableFor", 
        "isRelatedTo", 
        "isSimilarTo", 
        "itemCondition", 
        "logo", 
        "manufacturer", 
        "model", 
        "mpn", 
        "offers", 
        "productID", 
        "releaseDate", 
        "review", 
        "reviews", 
        "sku", 
        "weight", 
        "width"
      ], 
      "subtypes": [
        "IndividualProduct", 
        "ProductModel", 
        "SomeProducts"
      ], 
      "supertypes": [
        "Thing"
      ], 
      "url": "http://schema.org/Product"
    }, 
    "ProductModel": {
      "ancestors": [
        "Thing", 
        "Product"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "ProductModel", 
      "label": "Product Model", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "aggregateRating", 
        "audience", 
        "brand", 
        "color", 
        "depth", 
        "gtin13", 
        "gtin14", 
        "gtin8", 
        "height", 
        "isAccessoryOrSparePartFor", 
        "isConsumableFor", 
        "isRelatedTo", 
        "isSimilarTo", 
        "itemCondition", 
        "logo", 
        "manufacturer", 
        "model", 
        "mpn", 
        "offers", 
        "productID", 
        "releaseDate", 
        "review", 
        "reviews", 
        "sku", 
        "weight", 
        "width", 
        "isVariantOf", 
        "predecessorOf", 
        "successorOf"
      ], 
      "specific_properties": [
        "isVariantOf", 
        "predecessorOf", 
        "successorOf"
      ], 
      "subtypes": [], 
      "supertypes": [
        "Product"
      ], 
      "url": "http://schema.org/ProductModel"
    }, 
    "ProfessionalService": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "LocalBusiness"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "ProfessionalService", 
      "label": "Professional Service", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "founder", 
        "founders", 
        "foundingDate", 
        "hasPOS", 
        "legalName", 
        "location", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "vatID", 
        "branchOf", 
        "currenciesAccepted", 
        "openingHours", 
        "paymentAccepted", 
        "priceRange"
      ], 
      "specific_properties": [], 
      "subtypes": [
        "AccountingService", 
        "Attorney", 
        "Dentist", 
        "Electrician", 
        "GeneralContractor", 
        "HousePainter", 
        "Locksmith", 
        "Notary", 
        "Plumber", 
        "RoofingContractor"
      ], 
      "supertypes": [
        "LocalBusiness"
      ], 
      "url": "http://schema.org/ProfessionalService"
    }, 
    "ProfilePage": {
      "ancestors": [
        "Thing", 
        "CreativeWork", 
        "WebPage"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "ProfilePage", 
      "label": "Profile Page", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "about", 
        "accessibilityAPI", 
        "accessibilityControl", 
        "accessibilityFeature", 
        "accessibilityHazard", 
        "accountablePerson", 
        "aggregateRating", 
        "alternativeHeadline", 
        "associatedMedia", 
        "audience", 
        "audio", 
        "author", 
        "award", 
        "awards", 
        "citation", 
        "comment", 
        "contentLocation", 
        "contentRating", 
        "contributor", 
        "copyrightHolder", 
        "copyrightYear", 
        "creator", 
        "dateCreated", 
        "dateModified", 
        "datePublished", 
        "discussionUrl", 
        "editor", 
        "educationalAlignment", 
        "educationalUse", 
        "encoding", 
        "encodings", 
        "genre", 
        "headline", 
        "inLanguage", 
        "interactionCount", 
        "interactivityType", 
        "isBasedOnUrl", 
        "isFamilyFriendly", 
        "keywords", 
        "learningResourceType", 
        "mentions", 
        "offers", 
        "provider", 
        "publisher", 
        "publishingPrinciples", 
        "review", 
        "reviews", 
        "sourceOrganization", 
        "text", 
        "thumbnailUrl", 
        "timeRequired", 
        "typicalAgeRange", 
        "version", 
        "video", 
        "breadcrumb", 
        "isPartOf", 
        "lastReviewed", 
        "mainContentOfPage", 
        "primaryImageOfPage", 
        "relatedLink", 
        "reviewedBy", 
        "significantLink", 
        "significantLinks", 
        "specialty"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "WebPage"
      ], 
      "url": "http://schema.org/ProfilePage"
    }, 
    "Property": {
      "ancestors": [
        "Thing"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "Property", 
      "label": "Property", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "domainIncludes", 
        "rangeIncludes"
      ], 
      "specific_properties": [
        "domainIncludes", 
        "rangeIncludes"
      ], 
      "subtypes": [], 
      "supertypes": [
        "Thing"
      ], 
      "url": "http://schema.org/Property"
    }, 
    "PsychologicalTreatment": {
      "ancestors": [
        "Thing", 
        "MedicalEntity", 
        "MedicalTherapy"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "PsychologicalTreatment", 
      "label": "Psychological Treatment", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "code", 
        "guideline", 
        "medicineSystem", 
        "recognizingAuthority", 
        "relevantSpecialty", 
        "study", 
        "adverseOutcome", 
        "contraindication", 
        "duplicateTherapy", 
        "indication", 
        "seriousAdverseOutcome"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "MedicalTherapy"
      ], 
      "url": "http://schema.org/PsychologicalTreatment"
    }, 
    "PublicSwimmingPool": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "LocalBusiness", 
        "SportsActivityLocation"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "PublicSwimmingPool", 
      "label": "Public Swimming Pool", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "founder", 
        "founders", 
        "foundingDate", 
        "hasPOS", 
        "legalName", 
        "location", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "vatID", 
        "branchOf", 
        "currenciesAccepted", 
        "openingHours", 
        "paymentAccepted", 
        "priceRange"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "SportsActivityLocation"
      ], 
      "url": "http://schema.org/PublicSwimmingPool"
    }, 
    "PublicationEvent": {
      "ancestors": [
        "Thing", 
        "Event"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "PublicationEvent", 
      "label": "Publication Event", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "attendee", 
        "attendees", 
        "doorTime", 
        "duration", 
        "endDate", 
        "eventStatus", 
        "location", 
        "offers", 
        "performer", 
        "performers", 
        "previousStartDate", 
        "startDate", 
        "subEvent", 
        "subEvents", 
        "superEvent", 
        "typicalAgeRange", 
        "free", 
        "publishedOn"
      ], 
      "specific_properties": [
        "free", 
        "publishedOn"
      ], 
      "subtypes": [
        "BroadcastEvent", 
        "OnDemandEvent"
      ], 
      "supertypes": [
        "Event"
      ], 
      "url": "http://schema.org/PublicationEvent"
    }, 
    "QualitativeValue": {
      "ancestors": [
        "Thing", 
        "Intangible", 
        "Enumeration"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "QualitativeValue", 
      "label": "Qualitative Value", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "equal", 
        "greater", 
        "greaterOrEqual", 
        "lesser", 
        "lesserOrEqual", 
        "nonEqual", 
        "valueReference"
      ], 
      "specific_properties": [
        "equal", 
        "greater", 
        "greaterOrEqual", 
        "lesser", 
        "lesserOrEqual", 
        "nonEqual", 
        "valueReference"
      ], 
      "subtypes": [], 
      "supertypes": [
        "Enumeration"
      ], 
      "url": "http://schema.org/QualitativeValue"
    }, 
    "QuantitativeValue": {
      "ancestors": [
        "Thing", 
        "Intangible", 
        "StructuredValue"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "QuantitativeValue", 
      "label": "Quantitative Value", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "maxValue", 
        "minValue", 
        "unitCode", 
        "value", 
        "valueReference"
      ], 
      "specific_properties": [
        "maxValue", 
        "minValue", 
        "unitCode", 
        "value", 
        "valueReference"
      ], 
      "subtypes": [], 
      "supertypes": [
        "StructuredValue"
      ], 
      "url": "http://schema.org/QuantitativeValue"
    }, 
    "Quantity": {
      "ancestors": [
        "Thing", 
        "Intangible"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "Quantity", 
      "label": "Quantity", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url"
      ], 
      "specific_properties": [], 
      "subtypes": [
        "Distance", 
        "Duration", 
        "Energy", 
        "Mass"
      ], 
      "supertypes": [
        "Intangible"
      ], 
      "url": "http://schema.org/Quantity"
    }, 
    "QuoteAction": {
      "ancestors": [
        "Thing", 
        "Action", 
        "TradeAction"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "QuoteAction", 
      "label": "Quote Action", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "agent", 
        "endTime", 
        "instrument", 
        "location", 
        "object", 
        "participant", 
        "result", 
        "startTime", 
        "price"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "TradeAction"
      ], 
      "url": "http://schema.org/QuoteAction"
    }, 
    "RVPark": {
      "ancestors": [
        "Thing", 
        "Place", 
        "CivicStructure"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "RVPark", 
      "label": "RV Park", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "openingHours"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "CivicStructure"
      ], 
      "url": "http://schema.org/RVPark"
    }, 
    "RadiationTherapy": {
      "ancestors": [
        "Thing", 
        "MedicalEntity", 
        "MedicalTherapy"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "RadiationTherapy", 
      "label": "Radiation Therapy", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "code", 
        "guideline", 
        "medicineSystem", 
        "recognizingAuthority", 
        "relevantSpecialty", 
        "study", 
        "adverseOutcome", 
        "contraindication", 
        "duplicateTherapy", 
        "indication", 
        "seriousAdverseOutcome"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "MedicalTherapy"
      ], 
      "url": "http://schema.org/RadiationTherapy"
    }, 
    "RadioClip": {
      "ancestors": [
        "Thing", 
        "CreativeWork", 
        "Clip"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "RadioClip", 
      "label": "Radio Clip", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "about", 
        "accessibilityAPI", 
        "accessibilityControl", 
        "accessibilityFeature", 
        "accessibilityHazard", 
        "accountablePerson", 
        "aggregateRating", 
        "alternativeHeadline", 
        "associatedMedia", 
        "audience", 
        "audio", 
        "author", 
        "award", 
        "awards", 
        "citation", 
        "comment", 
        "contentLocation", 
        "contentRating", 
        "contributor", 
        "copyrightHolder", 
        "copyrightYear", 
        "creator", 
        "dateCreated", 
        "dateModified", 
        "datePublished", 
        "discussionUrl", 
        "editor", 
        "educationalAlignment", 
        "educationalUse", 
        "encoding", 
        "encodings", 
        "genre", 
        "headline", 
        "inLanguage", 
        "interactionCount", 
        "interactivityType", 
        "isBasedOnUrl", 
        "isFamilyFriendly", 
        "keywords", 
        "learningResourceType", 
        "mentions", 
        "offers", 
        "provider", 
        "publisher", 
        "publishingPrinciples", 
        "review", 
        "reviews", 
        "sourceOrganization", 
        "text", 
        "thumbnailUrl", 
        "timeRequired", 
        "typicalAgeRange", 
        "version", 
        "video", 
        "clipNumber", 
        "partOfEpisode", 
        "partOfSeason", 
        "partOfSeries", 
        "position", 
        "publication"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "Clip"
      ], 
      "url": "http://schema.org/RadioClip"
    }, 
    "RadioEpisode": {
      "ancestors": [
        "Thing", 
        "CreativeWork", 
        "Episode"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "RadioEpisode", 
      "label": "Radio Episode", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "about", 
        "accessibilityAPI", 
        "accessibilityControl", 
        "accessibilityFeature", 
        "accessibilityHazard", 
        "accountablePerson", 
        "aggregateRating", 
        "alternativeHeadline", 
        "associatedMedia", 
        "audience", 
        "audio", 
        "author", 
        "award", 
        "awards", 
        "citation", 
        "comment", 
        "contentLocation", 
        "contentRating", 
        "contributor", 
        "copyrightHolder", 
        "copyrightYear", 
        "creator", 
        "dateCreated", 
        "dateModified", 
        "datePublished", 
        "discussionUrl", 
        "editor", 
        "educationalAlignment", 
        "educationalUse", 
        "encoding", 
        "encodings", 
        "genre", 
        "headline", 
        "inLanguage", 
        "interactionCount", 
        "interactivityType", 
        "isBasedOnUrl", 
        "isFamilyFriendly", 
        "keywords", 
        "learningResourceType", 
        "mentions", 
        "offers", 
        "provider", 
        "publisher", 
        "publishingPrinciples", 
        "review", 
        "reviews", 
        "sourceOrganization", 
        "text", 
        "thumbnailUrl", 
        "timeRequired", 
        "typicalAgeRange", 
        "version", 
        "video", 
        "actor", 
        "actors", 
        "director", 
        "directors", 
        "episodeNumber", 
        "musicBy", 
        "partOfSeason", 
        "partOfSeries", 
        "position", 
        "producer", 
        "productionCompany", 
        "publication", 
        "trailer"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "Episode"
      ], 
      "url": "http://schema.org/RadioEpisode"
    }, 
    "RadioSeason": {
      "ancestors": [
        "Thing", 
        "CreativeWork", 
        "Season"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "RadioSeason", 
      "label": "Radio Season", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "about", 
        "accessibilityAPI", 
        "accessibilityControl", 
        "accessibilityFeature", 
        "accessibilityHazard", 
        "accountablePerson", 
        "aggregateRating", 
        "alternativeHeadline", 
        "associatedMedia", 
        "audience", 
        "audio", 
        "author", 
        "award", 
        "awards", 
        "citation", 
        "comment", 
        "contentLocation", 
        "contentRating", 
        "contributor", 
        "copyrightHolder", 
        "copyrightYear", 
        "creator", 
        "dateCreated", 
        "dateModified", 
        "datePublished", 
        "discussionUrl", 
        "editor", 
        "educationalAlignment", 
        "educationalUse", 
        "encoding", 
        "encodings", 
        "genre", 
        "headline", 
        "inLanguage", 
        "interactionCount", 
        "interactivityType", 
        "isBasedOnUrl", 
        "isFamilyFriendly", 
        "keywords", 
        "learningResourceType", 
        "mentions", 
        "offers", 
        "provider", 
        "publisher", 
        "publishingPrinciples", 
        "review", 
        "reviews", 
        "sourceOrganization", 
        "text", 
        "thumbnailUrl", 
        "timeRequired", 
        "typicalAgeRange", 
        "version", 
        "video", 
        "endDate", 
        "episode", 
        "episodes", 
        "numberOfEpisodes", 
        "partOfSeries", 
        "position", 
        "producer", 
        "productionCompany", 
        "seasonNumber", 
        "startDate", 
        "trailer"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "Season"
      ], 
      "url": "http://schema.org/RadioSeason"
    }, 
    "RadioSeries": {
      "ancestors": [
        "Thing", 
        "CreativeWork", 
        "Series"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "RadioSeries", 
      "label": "Radio Series", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "about", 
        "accessibilityAPI", 
        "accessibilityControl", 
        "accessibilityFeature", 
        "accessibilityHazard", 
        "accountablePerson", 
        "aggregateRating", 
        "alternativeHeadline", 
        "associatedMedia", 
        "audience", 
        "audio", 
        "author", 
        "award", 
        "awards", 
        "citation", 
        "comment", 
        "contentLocation", 
        "contentRating", 
        "contributor", 
        "copyrightHolder", 
        "copyrightYear", 
        "creator", 
        "dateCreated", 
        "dateModified", 
        "datePublished", 
        "discussionUrl", 
        "editor", 
        "educationalAlignment", 
        "educationalUse", 
        "encoding", 
        "encodings", 
        "genre", 
        "headline", 
        "inLanguage", 
        "interactionCount", 
        "interactivityType", 
        "isBasedOnUrl", 
        "isFamilyFriendly", 
        "keywords", 
        "learningResourceType", 
        "mentions", 
        "offers", 
        "provider", 
        "publisher", 
        "publishingPrinciples", 
        "review", 
        "reviews", 
        "sourceOrganization", 
        "text", 
        "thumbnailUrl", 
        "timeRequired", 
        "typicalAgeRange", 
        "version", 
        "video", 
        "actor", 
        "actors", 
        "director", 
        "directors", 
        "endDate", 
        "episode", 
        "episodes", 
        "musicBy", 
        "numberOfEpisodes", 
        "numberOfSeasons", 
        "producer", 
        "productionCompany", 
        "season", 
        "seasons", 
        "startDate", 
        "trailer"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "Series"
      ], 
      "url": "http://schema.org/RadioSeries"
    }, 
    "RadioStation": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "LocalBusiness"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "RadioStation", 
      "label": "Radio Station", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "founder", 
        "founders", 
        "foundingDate", 
        "hasPOS", 
        "legalName", 
        "location", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "vatID", 
        "branchOf", 
        "currenciesAccepted", 
        "openingHours", 
        "paymentAccepted", 
        "priceRange"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "LocalBusiness"
      ], 
      "url": "http://schema.org/RadioStation"
    }, 
    "Rating": {
      "ancestors": [
        "Thing", 
        "Intangible"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "Rating", 
      "label": "Rating", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "bestRating", 
        "ratingValue", 
        "worstRating"
      ], 
      "specific_properties": [
        "bestRating", 
        "ratingValue", 
        "worstRating"
      ], 
      "subtypes": [
        "AggregateRating"
      ], 
      "supertypes": [
        "Intangible"
      ], 
      "url": "http://schema.org/Rating"
    }, 
    "ReactAction": {
      "ancestors": [
        "Thing", 
        "Action", 
        "AssessAction"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "ReactAction", 
      "label": "React Action", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "agent", 
        "endTime", 
        "instrument", 
        "location", 
        "object", 
        "participant", 
        "result", 
        "startTime"
      ], 
      "specific_properties": [], 
      "subtypes": [
        "AgreeAction", 
        "DisagreeAction", 
        "DislikeAction", 
        "EndorseAction", 
        "LikeAction", 
        "WantAction"
      ], 
      "supertypes": [
        "AssessAction"
      ], 
      "url": "http://schema.org/ReactAction"
    }, 
    "ReadAction": {
      "ancestors": [
        "Thing", 
        "Action", 
        "ConsumeAction"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "ReadAction", 
      "label": "Read Action", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "agent", 
        "endTime", 
        "instrument", 
        "location", 
        "object", 
        "participant", 
        "result", 
        "startTime"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "ConsumeAction"
      ], 
      "url": "http://schema.org/ReadAction"
    }, 
    "RealEstateAgent": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "LocalBusiness"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "RealEstateAgent", 
      "label": "Real Estate Agent", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "founder", 
        "founders", 
        "foundingDate", 
        "hasPOS", 
        "legalName", 
        "location", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "vatID", 
        "branchOf", 
        "currenciesAccepted", 
        "openingHours", 
        "paymentAccepted", 
        "priceRange"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "LocalBusiness"
      ], 
      "url": "http://schema.org/RealEstateAgent"
    }, 
    "ReceiveAction": {
      "ancestors": [
        "Thing", 
        "Action", 
        "TransferAction"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "ReceiveAction", 
      "label": "Receive Action", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "agent", 
        "endTime", 
        "instrument", 
        "location", 
        "object", 
        "participant", 
        "result", 
        "startTime", 
        "fromLocation", 
        "toLocation", 
        "deliveryMethod", 
        "sender"
      ], 
      "specific_properties": [
        "deliveryMethod", 
        "sender"
      ], 
      "subtypes": [], 
      "supertypes": [
        "TransferAction"
      ], 
      "url": "http://schema.org/ReceiveAction"
    }, 
    "Recipe": {
      "ancestors": [
        "Thing", 
        "CreativeWork"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "Recipe", 
      "label": "Recipe", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "about", 
        "accessibilityAPI", 
        "accessibilityControl", 
        "accessibilityFeature", 
        "accessibilityHazard", 
        "accountablePerson", 
        "aggregateRating", 
        "alternativeHeadline", 
        "associatedMedia", 
        "audience", 
        "audio", 
        "author", 
        "award", 
        "awards", 
        "citation", 
        "comment", 
        "contentLocation", 
        "contentRating", 
        "contributor", 
        "copyrightHolder", 
        "copyrightYear", 
        "creator", 
        "dateCreated", 
        "dateModified", 
        "datePublished", 
        "discussionUrl", 
        "editor", 
        "educationalAlignment", 
        "educationalUse", 
        "encoding", 
        "encodings", 
        "genre", 
        "headline", 
        "inLanguage", 
        "interactionCount", 
        "interactivityType", 
        "isBasedOnUrl", 
        "isFamilyFriendly", 
        "keywords", 
        "learningResourceType", 
        "mentions", 
        "offers", 
        "provider", 
        "publisher", 
        "publishingPrinciples", 
        "review", 
        "reviews", 
        "sourceOrganization", 
        "text", 
        "thumbnailUrl", 
        "timeRequired", 
        "typicalAgeRange", 
        "version", 
        "video", 
        "cookingMethod", 
        "cookTime", 
        "ingredients", 
        "nutrition", 
        "prepTime", 
        "recipeCategory", 
        "recipeCuisine", 
        "recipeInstructions", 
        "recipeYield", 
        "totalTime"
      ], 
      "specific_properties": [
        "cookingMethod", 
        "cookTime", 
        "ingredients", 
        "nutrition", 
        "prepTime", 
        "recipeCategory", 
        "recipeCuisine", 
        "recipeInstructions", 
        "recipeYield", 
        "totalTime"
      ], 
      "subtypes": [], 
      "supertypes": [
        "CreativeWork"
      ], 
      "url": "http://schema.org/Recipe"
    }, 
    "RecommendedDoseSchedule": {
      "ancestors": [
        "Thing", 
        "MedicalEntity", 
        "MedicalIntangible", 
        "DoseSchedule"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "RecommendedDoseSchedule", 
      "label": "Recommended Dose Schedule", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "code", 
        "guideline", 
        "medicineSystem", 
        "recognizingAuthority", 
        "relevantSpecialty", 
        "study", 
        "doseUnit", 
        "doseValue", 
        "frequency", 
        "targetPopulation"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "DoseSchedule"
      ], 
      "url": "http://schema.org/RecommendedDoseSchedule"
    }, 
    "RecyclingCenter": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "LocalBusiness"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "RecyclingCenter", 
      "label": "Recycling Center", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "founder", 
        "founders", 
        "foundingDate", 
        "hasPOS", 
        "legalName", 
        "location", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "vatID", 
        "branchOf", 
        "currenciesAccepted", 
        "openingHours", 
        "paymentAccepted", 
        "priceRange"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "LocalBusiness"
      ], 
      "url": "http://schema.org/RecyclingCenter"
    }, 
    "RegisterAction": {
      "ancestors": [
        "Thing", 
        "Action", 
        "InteractAction"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "RegisterAction", 
      "label": "Register Action", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "agent", 
        "endTime", 
        "instrument", 
        "location", 
        "object", 
        "participant", 
        "result", 
        "startTime"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "InteractAction"
      ], 
      "url": "http://schema.org/RegisterAction"
    }, 
    "RejectAction": {
      "ancestors": [
        "Thing", 
        "Action", 
        "OrganizeAction", 
        "AllocateAction"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "RejectAction", 
      "label": "Reject Action", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "agent", 
        "endTime", 
        "instrument", 
        "location", 
        "object", 
        "participant", 
        "result", 
        "startTime", 
        "purpose"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "AllocateAction"
      ], 
      "url": "http://schema.org/RejectAction"
    }, 
    "RentAction": {
      "ancestors": [
        "Thing", 
        "Action", 
        "TradeAction"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "RentAction", 
      "label": "Rent Action", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "agent", 
        "endTime", 
        "instrument", 
        "location", 
        "object", 
        "participant", 
        "result", 
        "startTime", 
        "price", 
        "landlord", 
        "realEstateAgent"
      ], 
      "specific_properties": [
        "landlord", 
        "realEstateAgent"
      ], 
      "subtypes": [], 
      "supertypes": [
        "TradeAction"
      ], 
      "url": "http://schema.org/RentAction"
    }, 
    "ReplaceAction": {
      "ancestors": [
        "Thing", 
        "Action", 
        "UpdateAction"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "ReplaceAction", 
      "label": "Replace Action", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "agent", 
        "endTime", 
        "instrument", 
        "location", 
        "object", 
        "participant", 
        "result", 
        "startTime", 
        "collection", 
        "replacee", 
        "replacer"
      ], 
      "specific_properties": [
        "replacee", 
        "replacer"
      ], 
      "subtypes": [], 
      "supertypes": [
        "UpdateAction"
      ], 
      "url": "http://schema.org/ReplaceAction"
    }, 
    "ReplyAction": {
      "ancestors": [
        "Thing", 
        "Action", 
        "InteractAction", 
        "CommunicateAction"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "ReplyAction", 
      "label": "Reply Action", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "agent", 
        "endTime", 
        "instrument", 
        "location", 
        "object", 
        "participant", 
        "result", 
        "startTime", 
        "about", 
        "language", 
        "recipient"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "CommunicateAction"
      ], 
      "url": "http://schema.org/ReplyAction"
    }, 
    "ReportedDoseSchedule": {
      "ancestors": [
        "Thing", 
        "MedicalEntity", 
        "MedicalIntangible", 
        "DoseSchedule"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "ReportedDoseSchedule", 
      "label": "Reported Dose Schedule", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "code", 
        "guideline", 
        "medicineSystem", 
        "recognizingAuthority", 
        "relevantSpecialty", 
        "study", 
        "doseUnit", 
        "doseValue", 
        "frequency", 
        "targetPopulation"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "DoseSchedule"
      ], 
      "url": "http://schema.org/ReportedDoseSchedule"
    }, 
    "ReserveAction": {
      "ancestors": [
        "Thing", 
        "Action", 
        "OrganizeAction", 
        "PlanAction"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "ReserveAction", 
      "label": "Reserve Action", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "agent", 
        "endTime", 
        "instrument", 
        "location", 
        "object", 
        "participant", 
        "result", 
        "startTime", 
        "scheduledTime"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "PlanAction"
      ], 
      "url": "http://schema.org/ReserveAction"
    }, 
    "Reservoir": {
      "ancestors": [
        "Thing", 
        "Place", 
        "Landform", 
        "BodyOfWater"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "Reservoir", 
      "label": "Reservoir", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "BodyOfWater"
      ], 
      "url": "http://schema.org/Reservoir"
    }, 
    "Residence": {
      "ancestors": [
        "Thing", 
        "Place"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "Residence", 
      "label": "Residence", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone"
      ], 
      "specific_properties": [], 
      "subtypes": [
        "ApartmentComplex", 
        "GatedResidenceCommunity", 
        "SingleFamilyResidence"
      ], 
      "supertypes": [
        "Place"
      ], 
      "url": "http://schema.org/Residence"
    }, 
    "Restaurant": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "LocalBusiness", 
        "FoodEstablishment"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "Restaurant", 
      "label": "Restaurant", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "founder", 
        "founders", 
        "foundingDate", 
        "hasPOS", 
        "legalName", 
        "location", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "vatID", 
        "branchOf", 
        "currenciesAccepted", 
        "openingHours", 
        "paymentAccepted", 
        "priceRange", 
        "acceptsReservations", 
        "menu", 
        "servesCuisine"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "FoodEstablishment"
      ], 
      "url": "http://schema.org/Restaurant"
    }, 
    "ReturnAction": {
      "ancestors": [
        "Thing", 
        "Action", 
        "TransferAction"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "ReturnAction", 
      "label": "Return Action", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "agent", 
        "endTime", 
        "instrument", 
        "location", 
        "object", 
        "participant", 
        "result", 
        "startTime", 
        "fromLocation", 
        "toLocation", 
        "recipient"
      ], 
      "specific_properties": [
        "recipient"
      ], 
      "subtypes": [], 
      "supertypes": [
        "TransferAction"
      ], 
      "url": "http://schema.org/ReturnAction"
    }, 
    "Review": {
      "ancestors": [
        "Thing", 
        "CreativeWork"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "Review", 
      "label": "Review", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "about", 
        "accessibilityAPI", 
        "accessibilityControl", 
        "accessibilityFeature", 
        "accessibilityHazard", 
        "accountablePerson", 
        "aggregateRating", 
        "alternativeHeadline", 
        "associatedMedia", 
        "audience", 
        "audio", 
        "author", 
        "award", 
        "awards", 
        "citation", 
        "comment", 
        "contentLocation", 
        "contentRating", 
        "contributor", 
        "copyrightHolder", 
        "copyrightYear", 
        "creator", 
        "dateCreated", 
        "dateModified", 
        "datePublished", 
        "discussionUrl", 
        "editor", 
        "educationalAlignment", 
        "educationalUse", 
        "encoding", 
        "encodings", 
        "genre", 
        "headline", 
        "inLanguage", 
        "interactionCount", 
        "interactivityType", 
        "isBasedOnUrl", 
        "isFamilyFriendly", 
        "keywords", 
        "learningResourceType", 
        "mentions", 
        "offers", 
        "provider", 
        "publisher", 
        "publishingPrinciples", 
        "review", 
        "reviews", 
        "sourceOrganization", 
        "text", 
        "thumbnailUrl", 
        "timeRequired", 
        "typicalAgeRange", 
        "version", 
        "video", 
        "itemReviewed", 
        "reviewBody", 
        "reviewRating"
      ], 
      "specific_properties": [
        "itemReviewed", 
        "reviewBody", 
        "reviewRating"
      ], 
      "subtypes": [], 
      "supertypes": [
        "CreativeWork"
      ], 
      "url": "http://schema.org/Review"
    }, 
    "ReviewAction": {
      "ancestors": [
        "Thing", 
        "Action", 
        "AssessAction"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "ReviewAction", 
      "label": "Review Action", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "agent", 
        "endTime", 
        "instrument", 
        "location", 
        "object", 
        "participant", 
        "result", 
        "startTime", 
        "resultReview"
      ], 
      "specific_properties": [
        "resultReview"
      ], 
      "subtypes": [], 
      "supertypes": [
        "AssessAction"
      ], 
      "url": "http://schema.org/ReviewAction"
    }, 
    "RiverBodyOfWater": {
      "ancestors": [
        "Thing", 
        "Place", 
        "Landform", 
        "BodyOfWater"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "RiverBodyOfWater", 
      "label": "River Body of Water", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "BodyOfWater"
      ], 
      "url": "http://schema.org/RiverBodyOfWater"
    }, 
    "RoofingContractor": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "LocalBusiness", 
        "HomeAndConstructionBusiness"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "RoofingContractor", 
      "label": "Roofing Contractor", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "founder", 
        "founders", 
        "foundingDate", 
        "hasPOS", 
        "legalName", 
        "location", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "vatID", 
        "branchOf", 
        "currenciesAccepted", 
        "openingHours", 
        "paymentAccepted", 
        "priceRange"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "ProfessionalService", 
        "HomeAndConstructionBusiness"
      ], 
      "url": "http://schema.org/RoofingContractor"
    }, 
    "RsvpAction": {
      "ancestors": [
        "Thing", 
        "Action", 
        "InteractAction", 
        "CommunicateAction", 
        "InformAction"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "RsvpAction", 
      "label": "Rsvp Action", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "agent", 
        "endTime", 
        "instrument", 
        "location", 
        "object", 
        "participant", 
        "result", 
        "startTime", 
        "about", 
        "language", 
        "recipient", 
        "event"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "InformAction"
      ], 
      "url": "http://schema.org/RsvpAction"
    }, 
    "SaleEvent": {
      "ancestors": [
        "Thing", 
        "Event"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "SaleEvent", 
      "label": "Sale Event", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "attendee", 
        "attendees", 
        "doorTime", 
        "duration", 
        "endDate", 
        "eventStatus", 
        "location", 
        "offers", 
        "performer", 
        "performers", 
        "previousStartDate", 
        "startDate", 
        "subEvent", 
        "subEvents", 
        "superEvent", 
        "typicalAgeRange"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "Event"
      ], 
      "url": "http://schema.org/SaleEvent"
    }, 
    "ScheduleAction": {
      "ancestors": [
        "Thing", 
        "Action", 
        "OrganizeAction", 
        "PlanAction"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "ScheduleAction", 
      "label": "Schedule Action", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "agent", 
        "endTime", 
        "instrument", 
        "location", 
        "object", 
        "participant", 
        "result", 
        "startTime", 
        "scheduledTime"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "PlanAction"
      ], 
      "url": "http://schema.org/ScheduleAction"
    }, 
    "ScholarlyArticle": {
      "ancestors": [
        "Thing", 
        "CreativeWork", 
        "Article"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "ScholarlyArticle", 
      "label": "Scholarly Article", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "about", 
        "accessibilityAPI", 
        "accessibilityControl", 
        "accessibilityFeature", 
        "accessibilityHazard", 
        "accountablePerson", 
        "aggregateRating", 
        "alternativeHeadline", 
        "associatedMedia", 
        "audience", 
        "audio", 
        "author", 
        "award", 
        "awards", 
        "citation", 
        "comment", 
        "contentLocation", 
        "contentRating", 
        "contributor", 
        "copyrightHolder", 
        "copyrightYear", 
        "creator", 
        "dateCreated", 
        "dateModified", 
        "datePublished", 
        "discussionUrl", 
        "editor", 
        "educationalAlignment", 
        "educationalUse", 
        "encoding", 
        "encodings", 
        "genre", 
        "headline", 
        "inLanguage", 
        "interactionCount", 
        "interactivityType", 
        "isBasedOnUrl", 
        "isFamilyFriendly", 
        "keywords", 
        "learningResourceType", 
        "mentions", 
        "offers", 
        "provider", 
        "publisher", 
        "publishingPrinciples", 
        "review", 
        "reviews", 
        "sourceOrganization", 
        "text", 
        "thumbnailUrl", 
        "timeRequired", 
        "typicalAgeRange", 
        "version", 
        "video", 
        "articleBody", 
        "articleSection", 
        "wordCount"
      ], 
      "specific_properties": [], 
      "subtypes": [
        "MedicalScholarlyArticle"
      ], 
      "supertypes": [
        "Article"
      ], 
      "url": "http://schema.org/ScholarlyArticle"
    }, 
    "School": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "EducationalOrganization"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "School", 
      "label": "School", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "event", 
        "events", 
        "faxNumber", 
        "founder", 
        "founders", 
        "foundingDate", 
        "globalLocationNumber", 
        "hasPOS", 
        "interactionCount", 
        "isicV4", 
        "legalName", 
        "location", 
        "logo", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "review", 
        "reviews", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "telephone", 
        "vatID", 
        "alumni"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "EducationalOrganization"
      ], 
      "url": "http://schema.org/School"
    }, 
    "Sculpture": {
      "ancestors": [
        "Thing", 
        "CreativeWork"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "Sculpture", 
      "label": "Sculpture", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "about", 
        "accessibilityAPI", 
        "accessibilityControl", 
        "accessibilityFeature", 
        "accessibilityHazard", 
        "accountablePerson", 
        "aggregateRating", 
        "alternativeHeadline", 
        "associatedMedia", 
        "audience", 
        "audio", 
        "author", 
        "award", 
        "awards", 
        "citation", 
        "comment", 
        "contentLocation", 
        "contentRating", 
        "contributor", 
        "copyrightHolder", 
        "copyrightYear", 
        "creator", 
        "dateCreated", 
        "dateModified", 
        "datePublished", 
        "discussionUrl", 
        "editor", 
        "educationalAlignment", 
        "educationalUse", 
        "encoding", 
        "encodings", 
        "genre", 
        "headline", 
        "inLanguage", 
        "interactionCount", 
        "interactivityType", 
        "isBasedOnUrl", 
        "isFamilyFriendly", 
        "keywords", 
        "learningResourceType", 
        "mentions", 
        "offers", 
        "provider", 
        "publisher", 
        "publishingPrinciples", 
        "review", 
        "reviews", 
        "sourceOrganization", 
        "text", 
        "thumbnailUrl", 
        "timeRequired", 
        "typicalAgeRange", 
        "version", 
        "video"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "CreativeWork"
      ], 
      "url": "http://schema.org/Sculpture"
    }, 
    "SeaBodyOfWater": {
      "ancestors": [
        "Thing", 
        "Place", 
        "Landform", 
        "BodyOfWater"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "SeaBodyOfWater", 
      "label": "Sea Body of Water", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "BodyOfWater"
      ], 
      "url": "http://schema.org/SeaBodyOfWater"
    }, 
    "SearchAction": {
      "ancestors": [
        "Thing", 
        "Action"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "SearchAction", 
      "label": "Search Action", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "agent", 
        "endTime", 
        "instrument", 
        "location", 
        "object", 
        "participant", 
        "result", 
        "startTime", 
        "query"
      ], 
      "specific_properties": [
        "query"
      ], 
      "subtypes": [], 
      "supertypes": [
        "Action"
      ], 
      "url": "http://schema.org/SearchAction"
    }, 
    "SearchResultsPage": {
      "ancestors": [
        "Thing", 
        "CreativeWork", 
        "WebPage"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "SearchResultsPage", 
      "label": "Search Results Page", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "about", 
        "accessibilityAPI", 
        "accessibilityControl", 
        "accessibilityFeature", 
        "accessibilityHazard", 
        "accountablePerson", 
        "aggregateRating", 
        "alternativeHeadline", 
        "associatedMedia", 
        "audience", 
        "audio", 
        "author", 
        "award", 
        "awards", 
        "citation", 
        "comment", 
        "contentLocation", 
        "contentRating", 
        "contributor", 
        "copyrightHolder", 
        "copyrightYear", 
        "creator", 
        "dateCreated", 
        "dateModified", 
        "datePublished", 
        "discussionUrl", 
        "editor", 
        "educationalAlignment", 
        "educationalUse", 
        "encoding", 
        "encodings", 
        "genre", 
        "headline", 
        "inLanguage", 
        "interactionCount", 
        "interactivityType", 
        "isBasedOnUrl", 
        "isFamilyFriendly", 
        "keywords", 
        "learningResourceType", 
        "mentions", 
        "offers", 
        "provider", 
        "publisher", 
        "publishingPrinciples", 
        "review", 
        "reviews", 
        "sourceOrganization", 
        "text", 
        "thumbnailUrl", 
        "timeRequired", 
        "typicalAgeRange", 
        "version", 
        "video", 
        "breadcrumb", 
        "isPartOf", 
        "lastReviewed", 
        "mainContentOfPage", 
        "primaryImageOfPage", 
        "relatedLink", 
        "reviewedBy", 
        "significantLink", 
        "significantLinks", 
        "specialty"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "WebPage"
      ], 
      "url": "http://schema.org/SearchResultsPage"
    }, 
    "Season": {
      "ancestors": [
        "Thing", 
        "CreativeWork"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "Season", 
      "label": "Season", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "about", 
        "accessibilityAPI", 
        "accessibilityControl", 
        "accessibilityFeature", 
        "accessibilityHazard", 
        "accountablePerson", 
        "aggregateRating", 
        "alternativeHeadline", 
        "associatedMedia", 
        "audience", 
        "audio", 
        "author", 
        "award", 
        "awards", 
        "citation", 
        "comment", 
        "contentLocation", 
        "contentRating", 
        "contributor", 
        "copyrightHolder", 
        "copyrightYear", 
        "creator", 
        "dateCreated", 
        "dateModified", 
        "datePublished", 
        "discussionUrl", 
        "editor", 
        "educationalAlignment", 
        "educationalUse", 
        "encoding", 
        "encodings", 
        "genre", 
        "headline", 
        "inLanguage", 
        "interactionCount", 
        "interactivityType", 
        "isBasedOnUrl", 
        "isFamilyFriendly", 
        "keywords", 
        "learningResourceType", 
        "mentions", 
        "offers", 
        "provider", 
        "publisher", 
        "publishingPrinciples", 
        "review", 
        "reviews", 
        "sourceOrganization", 
        "text", 
        "thumbnailUrl", 
        "timeRequired", 
        "typicalAgeRange", 
        "version", 
        "video", 
        "endDate", 
        "episode", 
        "episodes", 
        "numberOfEpisodes", 
        "partOfSeries", 
        "position", 
        "producer", 
        "productionCompany", 
        "seasonNumber", 
        "startDate", 
        "trailer"
      ], 
      "specific_properties": [
        "endDate", 
        "episode", 
        "episodes", 
        "numberOfEpisodes", 
        "partOfSeries", 
        "position", 
        "producer", 
        "productionCompany", 
        "seasonNumber", 
        "startDate", 
        "trailer"
      ], 
      "subtypes": [
        "RadioSeason", 
        "TVSeason"
      ], 
      "supertypes": [
        "CreativeWork"
      ], 
      "url": "http://schema.org/Season"
    }, 
    "SelfStorage": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "LocalBusiness"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "SelfStorage", 
      "label": "Self Storage", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "founder", 
        "founders", 
        "foundingDate", 
        "hasPOS", 
        "legalName", 
        "location", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "vatID", 
        "branchOf", 
        "currenciesAccepted", 
        "openingHours", 
        "paymentAccepted", 
        "priceRange"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "LocalBusiness"
      ], 
      "url": "http://schema.org/SelfStorage"
    }, 
    "SellAction": {
      "ancestors": [
        "Thing", 
        "Action", 
        "TradeAction"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "SellAction", 
      "label": "Sell Action", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "agent", 
        "endTime", 
        "instrument", 
        "location", 
        "object", 
        "participant", 
        "result", 
        "startTime", 
        "price", 
        "buyer", 
        "warrantyPromise"
      ], 
      "specific_properties": [
        "buyer", 
        "warrantyPromise"
      ], 
      "subtypes": [], 
      "supertypes": [
        "TradeAction"
      ], 
      "url": "http://schema.org/SellAction"
    }, 
    "SendAction": {
      "ancestors": [
        "Thing", 
        "Action", 
        "TransferAction"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "SendAction", 
      "label": "Send Action", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "agent", 
        "endTime", 
        "instrument", 
        "location", 
        "object", 
        "participant", 
        "result", 
        "startTime", 
        "fromLocation", 
        "toLocation", 
        "deliveryMethod", 
        "recipient"
      ], 
      "specific_properties": [
        "deliveryMethod", 
        "recipient"
      ], 
      "subtypes": [], 
      "supertypes": [
        "TransferAction"
      ], 
      "url": "http://schema.org/SendAction"
    }, 
    "Series": {
      "ancestors": [
        "Thing", 
        "CreativeWork"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "Series", 
      "label": "Series", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "about", 
        "accessibilityAPI", 
        "accessibilityControl", 
        "accessibilityFeature", 
        "accessibilityHazard", 
        "accountablePerson", 
        "aggregateRating", 
        "alternativeHeadline", 
        "associatedMedia", 
        "audience", 
        "audio", 
        "author", 
        "award", 
        "awards", 
        "citation", 
        "comment", 
        "contentLocation", 
        "contentRating", 
        "contributor", 
        "copyrightHolder", 
        "copyrightYear", 
        "creator", 
        "dateCreated", 
        "dateModified", 
        "datePublished", 
        "discussionUrl", 
        "editor", 
        "educationalAlignment", 
        "educationalUse", 
        "encoding", 
        "encodings", 
        "genre", 
        "headline", 
        "inLanguage", 
        "interactionCount", 
        "interactivityType", 
        "isBasedOnUrl", 
        "isFamilyFriendly", 
        "keywords", 
        "learningResourceType", 
        "mentions", 
        "offers", 
        "provider", 
        "publisher", 
        "publishingPrinciples", 
        "review", 
        "reviews", 
        "sourceOrganization", 
        "text", 
        "thumbnailUrl", 
        "timeRequired", 
        "typicalAgeRange", 
        "version", 
        "video", 
        "actor", 
        "actors", 
        "director", 
        "directors", 
        "endDate", 
        "episode", 
        "episodes", 
        "musicBy", 
        "numberOfEpisodes", 
        "numberOfSeasons", 
        "producer", 
        "productionCompany", 
        "season", 
        "seasons", 
        "startDate", 
        "trailer"
      ], 
      "specific_properties": [
        "actor", 
        "actors", 
        "director", 
        "directors", 
        "endDate", 
        "episode", 
        "episodes", 
        "musicBy", 
        "numberOfEpisodes", 
        "numberOfSeasons", 
        "producer", 
        "productionCompany", 
        "season", 
        "seasons", 
        "startDate", 
        "trailer"
      ], 
      "subtypes": [
        "RadioSeries", 
        "TVSeries"
      ], 
      "supertypes": [
        "CreativeWork"
      ], 
      "url": "http://schema.org/Series"
    }, 
    "Service": {
      "ancestors": [
        "Thing", 
        "Intangible"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "Service", 
      "label": "Service", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "availableChannel", 
        "produces", 
        "provider", 
        "serviceArea", 
        "serviceAudience", 
        "serviceType"
      ], 
      "specific_properties": [
        "availableChannel", 
        "produces", 
        "provider", 
        "serviceArea", 
        "serviceAudience", 
        "serviceType"
      ], 
      "subtypes": [
        "GovernmentService"
      ], 
      "supertypes": [
        "Intangible"
      ], 
      "url": "http://schema.org/Service"
    }, 
    "ServiceChannel": {
      "ancestors": [
        "Thing", 
        "Intangible"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "ServiceChannel", 
      "label": "Service Channel", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "availableLanguage", 
        "processingTime", 
        "providesService", 
        "serviceLocation", 
        "servicePhone", 
        "servicePostalAddress", 
        "serviceSmsNumber", 
        "serviceUrl"
      ], 
      "specific_properties": [
        "availableLanguage", 
        "processingTime", 
        "providesService", 
        "serviceLocation", 
        "servicePhone", 
        "servicePostalAddress", 
        "serviceSmsNumber", 
        "serviceUrl"
      ], 
      "subtypes": [], 
      "supertypes": [
        "Intangible"
      ], 
      "url": "http://schema.org/ServiceChannel"
    }, 
    "ShareAction": {
      "ancestors": [
        "Thing", 
        "Action", 
        "InteractAction", 
        "CommunicateAction"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "ShareAction", 
      "label": "Share Action", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "agent", 
        "endTime", 
        "instrument", 
        "location", 
        "object", 
        "participant", 
        "result", 
        "startTime", 
        "about", 
        "language", 
        "recipient"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "CommunicateAction"
      ], 
      "url": "http://schema.org/ShareAction"
    }, 
    "ShoeStore": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "LocalBusiness", 
        "Store"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "ShoeStore", 
      "label": "Shoe Store", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "founder", 
        "founders", 
        "foundingDate", 
        "hasPOS", 
        "legalName", 
        "location", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "vatID", 
        "branchOf", 
        "currenciesAccepted", 
        "openingHours", 
        "paymentAccepted", 
        "priceRange"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "Store"
      ], 
      "url": "http://schema.org/ShoeStore"
    }, 
    "ShoppingCenter": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "LocalBusiness"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "ShoppingCenter", 
      "label": "Shopping Center", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "founder", 
        "founders", 
        "foundingDate", 
        "hasPOS", 
        "legalName", 
        "location", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "vatID", 
        "branchOf", 
        "currenciesAccepted", 
        "openingHours", 
        "paymentAccepted", 
        "priceRange"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "LocalBusiness"
      ], 
      "url": "http://schema.org/ShoppingCenter"
    }, 
    "SingleFamilyResidence": {
      "ancestors": [
        "Thing", 
        "Place", 
        "Residence"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "SingleFamilyResidence", 
      "label": "Single Family Residence", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "Residence"
      ], 
      "url": "http://schema.org/SingleFamilyResidence"
    }, 
    "SiteNavigationElement": {
      "ancestors": [
        "Thing", 
        "CreativeWork", 
        "WebPageElement"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "SiteNavigationElement", 
      "label": "Site Navigation Element", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "about", 
        "accessibilityAPI", 
        "accessibilityControl", 
        "accessibilityFeature", 
        "accessibilityHazard", 
        "accountablePerson", 
        "aggregateRating", 
        "alternativeHeadline", 
        "associatedMedia", 
        "audience", 
        "audio", 
        "author", 
        "award", 
        "awards", 
        "citation", 
        "comment", 
        "contentLocation", 
        "contentRating", 
        "contributor", 
        "copyrightHolder", 
        "copyrightYear", 
        "creator", 
        "dateCreated", 
        "dateModified", 
        "datePublished", 
        "discussionUrl", 
        "editor", 
        "educationalAlignment", 
        "educationalUse", 
        "encoding", 
        "encodings", 
        "genre", 
        "headline", 
        "inLanguage", 
        "interactionCount", 
        "interactivityType", 
        "isBasedOnUrl", 
        "isFamilyFriendly", 
        "keywords", 
        "learningResourceType", 
        "mentions", 
        "offers", 
        "provider", 
        "publisher", 
        "publishingPrinciples", 
        "review", 
        "reviews", 
        "sourceOrganization", 
        "text", 
        "thumbnailUrl", 
        "timeRequired", 
        "typicalAgeRange", 
        "version", 
        "video"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "WebPageElement"
      ], 
      "url": "http://schema.org/SiteNavigationElement"
    }, 
    "SkiResort": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "LocalBusiness", 
        "SportsActivityLocation"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "SkiResort", 
      "label": "Ski Resort", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "founder", 
        "founders", 
        "foundingDate", 
        "hasPOS", 
        "legalName", 
        "location", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "vatID", 
        "branchOf", 
        "currenciesAccepted", 
        "openingHours", 
        "paymentAccepted", 
        "priceRange"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "SportsActivityLocation"
      ], 
      "url": "http://schema.org/SkiResort"
    }, 
    "SocialEvent": {
      "ancestors": [
        "Thing", 
        "Event"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "SocialEvent", 
      "label": "Social Event", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "attendee", 
        "attendees", 
        "doorTime", 
        "duration", 
        "endDate", 
        "eventStatus", 
        "location", 
        "offers", 
        "performer", 
        "performers", 
        "previousStartDate", 
        "startDate", 
        "subEvent", 
        "subEvents", 
        "superEvent", 
        "typicalAgeRange"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "Event"
      ], 
      "url": "http://schema.org/SocialEvent"
    }, 
    "SoftwareApplication": {
      "ancestors": [
        "Thing", 
        "CreativeWork"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "SoftwareApplication", 
      "label": "Software Application", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "about", 
        "accessibilityAPI", 
        "accessibilityControl", 
        "accessibilityFeature", 
        "accessibilityHazard", 
        "accountablePerson", 
        "aggregateRating", 
        "alternativeHeadline", 
        "associatedMedia", 
        "audience", 
        "audio", 
        "author", 
        "award", 
        "awards", 
        "citation", 
        "comment", 
        "contentLocation", 
        "contentRating", 
        "contributor", 
        "copyrightHolder", 
        "copyrightYear", 
        "creator", 
        "dateCreated", 
        "dateModified", 
        "datePublished", 
        "discussionUrl", 
        "editor", 
        "educationalAlignment", 
        "educationalUse", 
        "encoding", 
        "encodings", 
        "genre", 
        "headline", 
        "inLanguage", 
        "interactionCount", 
        "interactivityType", 
        "isBasedOnUrl", 
        "isFamilyFriendly", 
        "keywords", 
        "learningResourceType", 
        "mentions", 
        "offers", 
        "provider", 
        "publisher", 
        "publishingPrinciples", 
        "review", 
        "reviews", 
        "sourceOrganization", 
        "text", 
        "thumbnailUrl", 
        "timeRequired", 
        "typicalAgeRange", 
        "version", 
        "video", 
        "applicationCategory", 
        "applicationSubCategory", 
        "applicationSuite", 
        "countriesNotSupported", 
        "countriesSupported", 
        "device", 
        "downloadUrl", 
        "featureList", 
        "fileFormat", 
        "fileSize", 
        "installUrl", 
        "memoryRequirements", 
        "operatingSystem", 
        "permissions", 
        "processorRequirements", 
        "releaseNotes", 
        "requirements", 
        "screenshot", 
        "softwareVersion", 
        "storageRequirements"
      ], 
      "specific_properties": [
        "applicationCategory", 
        "applicationSubCategory", 
        "applicationSuite", 
        "countriesNotSupported", 
        "countriesSupported", 
        "device", 
        "downloadUrl", 
        "featureList", 
        "fileFormat", 
        "fileSize", 
        "installUrl", 
        "memoryRequirements", 
        "operatingSystem", 
        "permissions", 
        "processorRequirements", 
        "releaseNotes", 
        "requirements", 
        "screenshot", 
        "softwareVersion", 
        "storageRequirements"
      ], 
      "subtypes": [
        "MobileApplication", 
        "WebApplication"
      ], 
      "supertypes": [
        "CreativeWork"
      ], 
      "url": "http://schema.org/SoftwareApplication"
    }, 
    "SomeProducts": {
      "ancestors": [
        "Thing", 
        "Product"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "SomeProducts", 
      "label": "Some Products", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "aggregateRating", 
        "audience", 
        "brand", 
        "color", 
        "depth", 
        "gtin13", 
        "gtin14", 
        "gtin8", 
        "height", 
        "isAccessoryOrSparePartFor", 
        "isConsumableFor", 
        "isRelatedTo", 
        "isSimilarTo", 
        "itemCondition", 
        "logo", 
        "manufacturer", 
        "model", 
        "mpn", 
        "offers", 
        "productID", 
        "releaseDate", 
        "review", 
        "reviews", 
        "sku", 
        "weight", 
        "width", 
        "inventoryLevel"
      ], 
      "specific_properties": [
        "inventoryLevel"
      ], 
      "subtypes": [], 
      "supertypes": [
        "Product"
      ], 
      "url": "http://schema.org/SomeProducts"
    }, 
    "Specialty": {
      "ancestors": [
        "Thing", 
        "Intangible", 
        "Enumeration"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "Specialty", 
      "label": "Specialty", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url"
      ], 
      "specific_properties": [], 
      "subtypes": [
        "MedicalSpecialty"
      ], 
      "supertypes": [
        "Enumeration"
      ], 
      "url": "http://schema.org/Specialty"
    }, 
    "SportingGoodsStore": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "LocalBusiness", 
        "Store"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "SportingGoodsStore", 
      "label": "Sporting Goods Store", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "founder", 
        "founders", 
        "foundingDate", 
        "hasPOS", 
        "legalName", 
        "location", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "vatID", 
        "branchOf", 
        "currenciesAccepted", 
        "openingHours", 
        "paymentAccepted", 
        "priceRange"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "Store"
      ], 
      "url": "http://schema.org/SportingGoodsStore"
    }, 
    "SportsActivityLocation": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "LocalBusiness"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "SportsActivityLocation", 
      "label": "Sports Activity Location", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "founder", 
        "founders", 
        "foundingDate", 
        "hasPOS", 
        "legalName", 
        "location", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "vatID", 
        "branchOf", 
        "currenciesAccepted", 
        "openingHours", 
        "paymentAccepted", 
        "priceRange"
      ], 
      "specific_properties": [], 
      "subtypes": [
        "BowlingAlley", 
        "ExerciseGym", 
        "GolfCourse", 
        "HealthClub", 
        "PublicSwimmingPool", 
        "SkiResort", 
        "SportsClub", 
        "StadiumOrArena", 
        "TennisComplex"
      ], 
      "supertypes": [
        "LocalBusiness"
      ], 
      "url": "http://schema.org/SportsActivityLocation"
    }, 
    "SportsClub": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "LocalBusiness", 
        "SportsActivityLocation"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "SportsClub", 
      "label": "Sports Club", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "founder", 
        "founders", 
        "foundingDate", 
        "hasPOS", 
        "legalName", 
        "location", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "vatID", 
        "branchOf", 
        "currenciesAccepted", 
        "openingHours", 
        "paymentAccepted", 
        "priceRange"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "SportsActivityLocation"
      ], 
      "url": "http://schema.org/SportsClub"
    }, 
    "SportsEvent": {
      "ancestors": [
        "Thing", 
        "Event"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "SportsEvent", 
      "label": "Sports Event", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "attendee", 
        "attendees", 
        "doorTime", 
        "duration", 
        "endDate", 
        "eventStatus", 
        "location", 
        "offers", 
        "performer", 
        "performers", 
        "previousStartDate", 
        "startDate", 
        "subEvent", 
        "subEvents", 
        "superEvent", 
        "typicalAgeRange"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "Event"
      ], 
      "url": "http://schema.org/SportsEvent"
    }, 
    "SportsTeam": {
      "ancestors": [
        "Thing", 
        "Organization"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "SportsTeam", 
      "label": "Sports Team", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "event", 
        "events", 
        "faxNumber", 
        "founder", 
        "founders", 
        "foundingDate", 
        "globalLocationNumber", 
        "hasPOS", 
        "interactionCount", 
        "isicV4", 
        "legalName", 
        "location", 
        "logo", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "review", 
        "reviews", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "telephone", 
        "vatID"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "Organization"
      ], 
      "url": "http://schema.org/SportsTeam"
    }, 
    "StadiumOrArena": {
      "ancestors": [
        "Thing", 
        "Place", 
        "CivicStructure"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "StadiumOrArena", 
      "label": "Stadium or Arena", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "founder", 
        "founders", 
        "foundingDate", 
        "hasPOS", 
        "legalName", 
        "location", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "vatID", 
        "branchOf", 
        "currenciesAccepted", 
        "openingHours", 
        "paymentAccepted", 
        "priceRange"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "CivicStructure", 
        "SportsActivityLocation"
      ], 
      "url": "http://schema.org/StadiumOrArena"
    }, 
    "State": {
      "ancestors": [
        "Thing", 
        "Place", 
        "AdministrativeArea"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "State", 
      "label": "State", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "AdministrativeArea"
      ], 
      "url": "http://schema.org/State"
    }, 
    "Store": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "LocalBusiness"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "Store", 
      "label": "Store", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "founder", 
        "founders", 
        "foundingDate", 
        "hasPOS", 
        "legalName", 
        "location", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "vatID", 
        "branchOf", 
        "currenciesAccepted", 
        "openingHours", 
        "paymentAccepted", 
        "priceRange"
      ], 
      "specific_properties": [], 
      "subtypes": [
        "AutoPartsStore", 
        "BikeStore", 
        "BookStore", 
        "ClothingStore", 
        "ComputerStore", 
        "ConvenienceStore", 
        "DepartmentStore", 
        "ElectronicsStore", 
        "Florist", 
        "FurnitureStore", 
        "GardenStore", 
        "GroceryStore", 
        "HardwareStore", 
        "HobbyShop", 
        "HomeGoodsStore", 
        "JewelryStore", 
        "LiquorStore", 
        "MensClothingStore", 
        "MobilePhoneStore", 
        "MovieRentalStore", 
        "MusicStore", 
        "OfficeEquipmentStore", 
        "OutletStore", 
        "PawnShop", 
        "PetStore", 
        "ShoeStore", 
        "SportingGoodsStore", 
        "TireShop", 
        "ToyStore", 
        "WholesaleStore"
      ], 
      "supertypes": [
        "LocalBusiness"
      ], 
      "url": "http://schema.org/Store"
    }, 
    "StructuredValue": {
      "ancestors": [
        "Thing", 
        "Intangible"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "StructuredValue", 
      "label": "Structured Value", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url"
      ], 
      "specific_properties": [], 
      "subtypes": [
        "ContactPoint", 
        "GeoCoordinates", 
        "GeoShape", 
        "NutritionInformation", 
        "OpeningHoursSpecification", 
        "OwnershipInfo", 
        "PriceSpecification", 
        "QuantitativeValue", 
        "TypeAndQuantityNode", 
        "WarrantyPromise"
      ], 
      "supertypes": [
        "Intangible"
      ], 
      "url": "http://schema.org/StructuredValue"
    }, 
    "SubscribeAction": {
      "ancestors": [
        "Thing", 
        "Action", 
        "InteractAction"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "SubscribeAction", 
      "label": "Subscribe Action", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "agent", 
        "endTime", 
        "instrument", 
        "location", 
        "object", 
        "participant", 
        "result", 
        "startTime"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "InteractAction"
      ], 
      "url": "http://schema.org/SubscribeAction"
    }, 
    "SubwayStation": {
      "ancestors": [
        "Thing", 
        "Place", 
        "CivicStructure"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "SubwayStation", 
      "label": "Subway Station", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "openingHours"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "CivicStructure"
      ], 
      "url": "http://schema.org/SubwayStation"
    }, 
    "SuperficialAnatomy": {
      "ancestors": [
        "Thing", 
        "MedicalEntity"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "SuperficialAnatomy", 
      "label": "Superficial Anatomy", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "code", 
        "guideline", 
        "medicineSystem", 
        "recognizingAuthority", 
        "relevantSpecialty", 
        "study", 
        "associatedPathophysiology", 
        "relatedAnatomy", 
        "relatedCondition", 
        "relatedTherapy", 
        "significance"
      ], 
      "specific_properties": [
        "associatedPathophysiology", 
        "relatedAnatomy", 
        "relatedCondition", 
        "relatedTherapy", 
        "significance"
      ], 
      "subtypes": [], 
      "supertypes": [
        "MedicalEntity"
      ], 
      "url": "http://schema.org/SuperficialAnatomy"
    }, 
    "Synagogue": {
      "ancestors": [
        "Thing", 
        "Place", 
        "CivicStructure", 
        "PlaceOfWorship"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "Synagogue", 
      "label": "Synagogue", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "openingHours"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "PlaceOfWorship"
      ], 
      "url": "http://schema.org/Synagogue"
    }, 
    "TVClip": {
      "ancestors": [
        "Thing", 
        "CreativeWork", 
        "Clip"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "TVClip", 
      "label": "TV Clip", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "about", 
        "accessibilityAPI", 
        "accessibilityControl", 
        "accessibilityFeature", 
        "accessibilityHazard", 
        "accountablePerson", 
        "aggregateRating", 
        "alternativeHeadline", 
        "associatedMedia", 
        "audience", 
        "audio", 
        "author", 
        "award", 
        "awards", 
        "citation", 
        "comment", 
        "contentLocation", 
        "contentRating", 
        "contributor", 
        "copyrightHolder", 
        "copyrightYear", 
        "creator", 
        "dateCreated", 
        "dateModified", 
        "datePublished", 
        "discussionUrl", 
        "editor", 
        "educationalAlignment", 
        "educationalUse", 
        "encoding", 
        "encodings", 
        "genre", 
        "headline", 
        "inLanguage", 
        "interactionCount", 
        "interactivityType", 
        "isBasedOnUrl", 
        "isFamilyFriendly", 
        "keywords", 
        "learningResourceType", 
        "mentions", 
        "offers", 
        "provider", 
        "publisher", 
        "publishingPrinciples", 
        "review", 
        "reviews", 
        "sourceOrganization", 
        "text", 
        "thumbnailUrl", 
        "timeRequired", 
        "typicalAgeRange", 
        "version", 
        "video", 
        "clipNumber", 
        "partOfEpisode", 
        "partOfSeason", 
        "partOfSeries", 
        "position", 
        "publication", 
        "partOfTVSeries"
      ], 
      "specific_properties": [
        "partOfTVSeries"
      ], 
      "subtypes": [], 
      "supertypes": [
        "Clip"
      ], 
      "url": "http://schema.org/TVClip"
    }, 
    "TVEpisode": {
      "ancestors": [
        "Thing", 
        "CreativeWork", 
        "Episode"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "TVEpisode", 
      "label": "TV Episode", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "about", 
        "accessibilityAPI", 
        "accessibilityControl", 
        "accessibilityFeature", 
        "accessibilityHazard", 
        "accountablePerson", 
        "aggregateRating", 
        "alternativeHeadline", 
        "associatedMedia", 
        "audience", 
        "audio", 
        "author", 
        "award", 
        "awards", 
        "citation", 
        "comment", 
        "contentLocation", 
        "contentRating", 
        "contributor", 
        "copyrightHolder", 
        "copyrightYear", 
        "creator", 
        "dateCreated", 
        "dateModified", 
        "datePublished", 
        "discussionUrl", 
        "editor", 
        "educationalAlignment", 
        "educationalUse", 
        "encoding", 
        "encodings", 
        "genre", 
        "headline", 
        "inLanguage", 
        "interactionCount", 
        "interactivityType", 
        "isBasedOnUrl", 
        "isFamilyFriendly", 
        "keywords", 
        "learningResourceType", 
        "mentions", 
        "offers", 
        "provider", 
        "publisher", 
        "publishingPrinciples", 
        "review", 
        "reviews", 
        "sourceOrganization", 
        "text", 
        "thumbnailUrl", 
        "timeRequired", 
        "typicalAgeRange", 
        "version", 
        "video", 
        "actor", 
        "actors", 
        "director", 
        "directors", 
        "episodeNumber", 
        "musicBy", 
        "partOfSeason", 
        "partOfSeries", 
        "position", 
        "producer", 
        "productionCompany", 
        "publication", 
        "trailer", 
        "partOfTVSeries"
      ], 
      "specific_properties": [
        "partOfTVSeries"
      ], 
      "subtypes": [], 
      "supertypes": [
        "Episode"
      ], 
      "url": "http://schema.org/TVEpisode"
    }, 
    "TVSeason": {
      "ancestors": [
        "Thing", 
        "CreativeWork"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "TVSeason", 
      "label": "TV Season", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "about", 
        "accessibilityAPI", 
        "accessibilityControl", 
        "accessibilityFeature", 
        "accessibilityHazard", 
        "accountablePerson", 
        "aggregateRating", 
        "alternativeHeadline", 
        "associatedMedia", 
        "audience", 
        "audio", 
        "author", 
        "award", 
        "awards", 
        "citation", 
        "comment", 
        "contentLocation", 
        "contentRating", 
        "contributor", 
        "copyrightHolder", 
        "copyrightYear", 
        "creator", 
        "dateCreated", 
        "dateModified", 
        "datePublished", 
        "discussionUrl", 
        "editor", 
        "educationalAlignment", 
        "educationalUse", 
        "encoding", 
        "encodings", 
        "genre", 
        "headline", 
        "inLanguage", 
        "interactionCount", 
        "interactivityType", 
        "isBasedOnUrl", 
        "isFamilyFriendly", 
        "keywords", 
        "learningResourceType", 
        "mentions", 
        "offers", 
        "provider", 
        "publisher", 
        "publishingPrinciples", 
        "review", 
        "reviews", 
        "sourceOrganization", 
        "text", 
        "thumbnailUrl", 
        "timeRequired", 
        "typicalAgeRange", 
        "version", 
        "video", 
        "endDate", 
        "episode", 
        "episodes", 
        "numberOfEpisodes", 
        "partOfSeries", 
        "position", 
        "producer", 
        "productionCompany", 
        "seasonNumber", 
        "startDate", 
        "trailer", 
        "partOfTVSeries"
      ], 
      "specific_properties": [
        "partOfTVSeries"
      ], 
      "subtypes": [], 
      "supertypes": [
        "CreativeWork", 
        "Season"
      ], 
      "url": "http://schema.org/TVSeason"
    }, 
    "TVSeries": {
      "ancestors": [
        "Thing", 
        "CreativeWork"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "TVSeries", 
      "label": "TV Series", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "about", 
        "accessibilityAPI", 
        "accessibilityControl", 
        "accessibilityFeature", 
        "accessibilityHazard", 
        "accountablePerson", 
        "aggregateRating", 
        "alternativeHeadline", 
        "associatedMedia", 
        "audience", 
        "audio", 
        "author", 
        "award", 
        "awards", 
        "citation", 
        "comment", 
        "contentLocation", 
        "contentRating", 
        "contributor", 
        "copyrightHolder", 
        "copyrightYear", 
        "creator", 
        "dateCreated", 
        "dateModified", 
        "datePublished", 
        "discussionUrl", 
        "editor", 
        "educationalAlignment", 
        "educationalUse", 
        "encoding", 
        "encodings", 
        "genre", 
        "headline", 
        "inLanguage", 
        "interactionCount", 
        "interactivityType", 
        "isBasedOnUrl", 
        "isFamilyFriendly", 
        "keywords", 
        "learningResourceType", 
        "mentions", 
        "offers", 
        "provider", 
        "publisher", 
        "publishingPrinciples", 
        "review", 
        "reviews", 
        "sourceOrganization", 
        "text", 
        "thumbnailUrl", 
        "timeRequired", 
        "typicalAgeRange", 
        "version", 
        "video", 
        "actor", 
        "actors", 
        "director", 
        "directors", 
        "endDate", 
        "episode", 
        "episodes", 
        "musicBy", 
        "numberOfEpisodes", 
        "numberOfSeasons", 
        "producer", 
        "productionCompany", 
        "season", 
        "seasons", 
        "startDate", 
        "trailer"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "CreativeWork", 
        "Series"
      ], 
      "url": "http://schema.org/TVSeries"
    }, 
    "Table": {
      "ancestors": [
        "Thing", 
        "CreativeWork", 
        "WebPageElement"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "Table", 
      "label": "Table", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "about", 
        "accessibilityAPI", 
        "accessibilityControl", 
        "accessibilityFeature", 
        "accessibilityHazard", 
        "accountablePerson", 
        "aggregateRating", 
        "alternativeHeadline", 
        "associatedMedia", 
        "audience", 
        "audio", 
        "author", 
        "award", 
        "awards", 
        "citation", 
        "comment", 
        "contentLocation", 
        "contentRating", 
        "contributor", 
        "copyrightHolder", 
        "copyrightYear", 
        "creator", 
        "dateCreated", 
        "dateModified", 
        "datePublished", 
        "discussionUrl", 
        "editor", 
        "educationalAlignment", 
        "educationalUse", 
        "encoding", 
        "encodings", 
        "genre", 
        "headline", 
        "inLanguage", 
        "interactionCount", 
        "interactivityType", 
        "isBasedOnUrl", 
        "isFamilyFriendly", 
        "keywords", 
        "learningResourceType", 
        "mentions", 
        "offers", 
        "provider", 
        "publisher", 
        "publishingPrinciples", 
        "review", 
        "reviews", 
        "sourceOrganization", 
        "text", 
        "thumbnailUrl", 
        "timeRequired", 
        "typicalAgeRange", 
        "version", 
        "video"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "WebPageElement"
      ], 
      "url": "http://schema.org/Table"
    }, 
    "TakeAction": {
      "ancestors": [
        "Thing", 
        "Action", 
        "TransferAction"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "TakeAction", 
      "label": "Take Action", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "agent", 
        "endTime", 
        "instrument", 
        "location", 
        "object", 
        "participant", 
        "result", 
        "startTime", 
        "fromLocation", 
        "toLocation"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "TransferAction"
      ], 
      "url": "http://schema.org/TakeAction"
    }, 
    "TattooParlor": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "LocalBusiness", 
        "HealthAndBeautyBusiness"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "TattooParlor", 
      "label": "Tattoo Parlor", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "founder", 
        "founders", 
        "foundingDate", 
        "hasPOS", 
        "legalName", 
        "location", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "vatID", 
        "branchOf", 
        "currenciesAccepted", 
        "openingHours", 
        "paymentAccepted", 
        "priceRange"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "HealthAndBeautyBusiness"
      ], 
      "url": "http://schema.org/TattooParlor"
    }, 
    "TaxiStand": {
      "ancestors": [
        "Thing", 
        "Place", 
        "CivicStructure"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "TaxiStand", 
      "label": "Taxi Stand", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "openingHours"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "CivicStructure"
      ], 
      "url": "http://schema.org/TaxiStand"
    }, 
    "TechArticle": {
      "ancestors": [
        "Thing", 
        "CreativeWork", 
        "Article"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "TechArticle", 
      "label": "Tech Article", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "about", 
        "accessibilityAPI", 
        "accessibilityControl", 
        "accessibilityFeature", 
        "accessibilityHazard", 
        "accountablePerson", 
        "aggregateRating", 
        "alternativeHeadline", 
        "associatedMedia", 
        "audience", 
        "audio", 
        "author", 
        "award", 
        "awards", 
        "citation", 
        "comment", 
        "contentLocation", 
        "contentRating", 
        "contributor", 
        "copyrightHolder", 
        "copyrightYear", 
        "creator", 
        "dateCreated", 
        "dateModified", 
        "datePublished", 
        "discussionUrl", 
        "editor", 
        "educationalAlignment", 
        "educationalUse", 
        "encoding", 
        "encodings", 
        "genre", 
        "headline", 
        "inLanguage", 
        "interactionCount", 
        "interactivityType", 
        "isBasedOnUrl", 
        "isFamilyFriendly", 
        "keywords", 
        "learningResourceType", 
        "mentions", 
        "offers", 
        "provider", 
        "publisher", 
        "publishingPrinciples", 
        "review", 
        "reviews", 
        "sourceOrganization", 
        "text", 
        "thumbnailUrl", 
        "timeRequired", 
        "typicalAgeRange", 
        "version", 
        "video", 
        "articleBody", 
        "articleSection", 
        "wordCount", 
        "dependencies", 
        "proficiencyLevel"
      ], 
      "specific_properties": [
        "dependencies", 
        "proficiencyLevel"
      ], 
      "subtypes": [
        "APIReference"
      ], 
      "supertypes": [
        "Article"
      ], 
      "url": "http://schema.org/TechArticle"
    }, 
    "TelevisionStation": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "LocalBusiness"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "TelevisionStation", 
      "label": "Television Station", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "founder", 
        "founders", 
        "foundingDate", 
        "hasPOS", 
        "legalName", 
        "location", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "vatID", 
        "branchOf", 
        "currenciesAccepted", 
        "openingHours", 
        "paymentAccepted", 
        "priceRange"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "LocalBusiness"
      ], 
      "url": "http://schema.org/TelevisionStation"
    }, 
    "TennisComplex": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "LocalBusiness", 
        "SportsActivityLocation"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "TennisComplex", 
      "label": "Tennis Complex", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "founder", 
        "founders", 
        "foundingDate", 
        "hasPOS", 
        "legalName", 
        "location", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "vatID", 
        "branchOf", 
        "currenciesAccepted", 
        "openingHours", 
        "paymentAccepted", 
        "priceRange"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "SportsActivityLocation"
      ], 
      "url": "http://schema.org/TennisComplex"
    }, 
    "TheaterEvent": {
      "ancestors": [
        "Thing", 
        "Event"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "TheaterEvent", 
      "label": "Theater Event", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "attendee", 
        "attendees", 
        "doorTime", 
        "duration", 
        "endDate", 
        "eventStatus", 
        "location", 
        "offers", 
        "performer", 
        "performers", 
        "previousStartDate", 
        "startDate", 
        "subEvent", 
        "subEvents", 
        "superEvent", 
        "typicalAgeRange"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "Event"
      ], 
      "url": "http://schema.org/TheaterEvent"
    }, 
    "TheaterGroup": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "PerformingGroup"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "TheaterGroup", 
      "label": "Theater Group", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "event", 
        "events", 
        "faxNumber", 
        "founder", 
        "founders", 
        "foundingDate", 
        "globalLocationNumber", 
        "hasPOS", 
        "interactionCount", 
        "isicV4", 
        "legalName", 
        "location", 
        "logo", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "review", 
        "reviews", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "telephone", 
        "vatID"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "PerformingGroup"
      ], 
      "url": "http://schema.org/TheaterGroup"
    }, 
    "TherapeuticProcedure": {
      "ancestors": [
        "Thing", 
        "MedicalEntity", 
        "MedicalProcedure"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "TherapeuticProcedure", 
      "label": "Therapeutic Procedure", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "code", 
        "guideline", 
        "medicineSystem", 
        "recognizingAuthority", 
        "relevantSpecialty", 
        "study", 
        "adverseOutcome", 
        "contraindication", 
        "duplicateTherapy", 
        "indication", 
        "seriousAdverseOutcome", 
        "followup", 
        "howPerformed", 
        "preparation", 
        "procedureType"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "MedicalProcedure", 
        "MedicalTherapy"
      ], 
      "url": "http://schema.org/TherapeuticProcedure"
    }, 
    "Thing": {
      "ancestors": [], 
      "comment": "", 
      "comment_plain": "", 
      "id": "Thing", 
      "label": "Thing", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url"
      ], 
      "specific_properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url"
      ], 
      "subtypes": [
        "Action", 
        "BroadcastService", 
        "Class", 
        "CreativeWork", 
        "Event", 
        "Intangible", 
        "MedicalEntity", 
        "Organization", 
        "Person", 
        "Place", 
        "Product", 
        "Property"
      ], 
      "supertypes": [], 
      "url": "http://schema.org/Thing"
    }, 
    "TieAction": {
      "ancestors": [
        "Thing", 
        "Action", 
        "AchieveAction"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "TieAction", 
      "label": "Tie Action", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "agent", 
        "endTime", 
        "instrument", 
        "location", 
        "object", 
        "participant", 
        "result", 
        "startTime"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "AchieveAction"
      ], 
      "url": "http://schema.org/TieAction"
    }, 
    "TipAction": {
      "ancestors": [
        "Thing", 
        "Action", 
        "TradeAction"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "TipAction", 
      "label": "Tip Action", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "agent", 
        "endTime", 
        "instrument", 
        "location", 
        "object", 
        "participant", 
        "result", 
        "startTime", 
        "price", 
        "recipient"
      ], 
      "specific_properties": [
        "recipient"
      ], 
      "subtypes": [], 
      "supertypes": [
        "TradeAction"
      ], 
      "url": "http://schema.org/TipAction"
    }, 
    "TireShop": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "LocalBusiness", 
        "Store"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "TireShop", 
      "label": "Tire Shop", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "founder", 
        "founders", 
        "foundingDate", 
        "hasPOS", 
        "legalName", 
        "location", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "vatID", 
        "branchOf", 
        "currenciesAccepted", 
        "openingHours", 
        "paymentAccepted", 
        "priceRange"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "Store"
      ], 
      "url": "http://schema.org/TireShop"
    }, 
    "TouristAttraction": {
      "ancestors": [
        "Thing", 
        "Place"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "TouristAttraction", 
      "label": "Tourist Attraction", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "Place"
      ], 
      "url": "http://schema.org/TouristAttraction"
    }, 
    "TouristInformationCenter": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "LocalBusiness"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "TouristInformationCenter", 
      "label": "Tourist Information Center", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "founder", 
        "founders", 
        "foundingDate", 
        "hasPOS", 
        "legalName", 
        "location", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "vatID", 
        "branchOf", 
        "currenciesAccepted", 
        "openingHours", 
        "paymentAccepted", 
        "priceRange"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "LocalBusiness"
      ], 
      "url": "http://schema.org/TouristInformationCenter"
    }, 
    "ToyStore": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "LocalBusiness", 
        "Store"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "ToyStore", 
      "label": "Toy Store", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "founder", 
        "founders", 
        "foundingDate", 
        "hasPOS", 
        "legalName", 
        "location", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "vatID", 
        "branchOf", 
        "currenciesAccepted", 
        "openingHours", 
        "paymentAccepted", 
        "priceRange"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "Store"
      ], 
      "url": "http://schema.org/ToyStore"
    }, 
    "TrackAction": {
      "ancestors": [
        "Thing", 
        "Action", 
        "FindAction"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "TrackAction", 
      "label": "Track Action", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "agent", 
        "endTime", 
        "instrument", 
        "location", 
        "object", 
        "participant", 
        "result", 
        "startTime", 
        "deliveryMethod"
      ], 
      "specific_properties": [
        "deliveryMethod"
      ], 
      "subtypes": [], 
      "supertypes": [
        "FindAction"
      ], 
      "url": "http://schema.org/TrackAction"
    }, 
    "TradeAction": {
      "ancestors": [
        "Thing", 
        "Action"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "TradeAction", 
      "label": "Trade Action", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "agent", 
        "endTime", 
        "instrument", 
        "location", 
        "object", 
        "participant", 
        "result", 
        "startTime", 
        "price"
      ], 
      "specific_properties": [
        "price"
      ], 
      "subtypes": [
        "BuyAction", 
        "DonateAction", 
        "OrderAction", 
        "PayAction", 
        "QuoteAction", 
        "RentAction", 
        "SellAction", 
        "TipAction"
      ], 
      "supertypes": [
        "Action"
      ], 
      "url": "http://schema.org/TradeAction"
    }, 
    "TrainStation": {
      "ancestors": [
        "Thing", 
        "Place", 
        "CivicStructure"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "TrainStation", 
      "label": "Train Station", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "openingHours"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "CivicStructure"
      ], 
      "url": "http://schema.org/TrainStation"
    }, 
    "TransferAction": {
      "ancestors": [
        "Thing", 
        "Action"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "TransferAction", 
      "label": "Transfer Action", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "agent", 
        "endTime", 
        "instrument", 
        "location", 
        "object", 
        "participant", 
        "result", 
        "startTime", 
        "fromLocation", 
        "toLocation"
      ], 
      "specific_properties": [
        "fromLocation", 
        "toLocation"
      ], 
      "subtypes": [
        "BorrowAction", 
        "DownloadAction", 
        "GiveAction", 
        "LendAction", 
        "ReceiveAction", 
        "ReturnAction", 
        "SendAction", 
        "TakeAction"
      ], 
      "supertypes": [
        "Action"
      ], 
      "url": "http://schema.org/TransferAction"
    }, 
    "TravelAction": {
      "ancestors": [
        "Thing", 
        "Action", 
        "MoveAction"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "TravelAction", 
      "label": "Travel Action", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "agent", 
        "endTime", 
        "instrument", 
        "location", 
        "object", 
        "participant", 
        "result", 
        "startTime", 
        "fromLocation", 
        "toLocation", 
        "distance"
      ], 
      "specific_properties": [
        "distance"
      ], 
      "subtypes": [], 
      "supertypes": [
        "MoveAction"
      ], 
      "url": "http://schema.org/TravelAction"
    }, 
    "TravelAgency": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "LocalBusiness"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "TravelAgency", 
      "label": "Travel Agency", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "founder", 
        "founders", 
        "foundingDate", 
        "hasPOS", 
        "legalName", 
        "location", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "vatID", 
        "branchOf", 
        "currenciesAccepted", 
        "openingHours", 
        "paymentAccepted", 
        "priceRange"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "LocalBusiness"
      ], 
      "url": "http://schema.org/TravelAgency"
    }, 
    "TreatmentIndication": {
      "ancestors": [
        "Thing", 
        "MedicalEntity", 
        "MedicalIndication"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "TreatmentIndication", 
      "label": "Treatment Indication", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "code", 
        "guideline", 
        "medicineSystem", 
        "recognizingAuthority", 
        "relevantSpecialty", 
        "study"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "MedicalIndication"
      ], 
      "url": "http://schema.org/TreatmentIndication"
    }, 
    "TypeAndQuantityNode": {
      "ancestors": [
        "Thing", 
        "Intangible", 
        "StructuredValue"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "TypeAndQuantityNode", 
      "label": "Type And Quantity Node", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "amountOfThisGood", 
        "businessFunction", 
        "typeOfGood", 
        "unitCode"
      ], 
      "specific_properties": [
        "amountOfThisGood", 
        "businessFunction", 
        "typeOfGood", 
        "unitCode"
      ], 
      "subtypes": [], 
      "supertypes": [
        "StructuredValue"
      ], 
      "url": "http://schema.org/TypeAndQuantityNode"
    }, 
    "UnRegisterAction": {
      "ancestors": [
        "Thing", 
        "Action", 
        "InteractAction"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "UnRegisterAction", 
      "label": "Un Register Action", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "agent", 
        "endTime", 
        "instrument", 
        "location", 
        "object", 
        "participant", 
        "result", 
        "startTime"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "InteractAction"
      ], 
      "url": "http://schema.org/UnRegisterAction"
    }, 
    "UnitPriceSpecification": {
      "ancestors": [
        "Thing", 
        "Intangible", 
        "StructuredValue", 
        "PriceSpecification"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "UnitPriceSpecification", 
      "label": "Unit Price Specification", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "eligibleQuantity", 
        "eligibleTransactionVolume", 
        "maxPrice", 
        "minPrice", 
        "price", 
        "priceCurrency", 
        "validFrom", 
        "validThrough", 
        "valueAddedTaxIncluded", 
        "billingIncrement", 
        "priceType", 
        "unitCode"
      ], 
      "specific_properties": [
        "billingIncrement", 
        "priceType", 
        "unitCode"
      ], 
      "subtypes": [], 
      "supertypes": [
        "PriceSpecification"
      ], 
      "url": "http://schema.org/UnitPriceSpecification"
    }, 
    "UpdateAction": {
      "ancestors": [
        "Thing", 
        "Action"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "UpdateAction", 
      "label": "Update Action", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "agent", 
        "endTime", 
        "instrument", 
        "location", 
        "object", 
        "participant", 
        "result", 
        "startTime", 
        "collection"
      ], 
      "specific_properties": [
        "collection"
      ], 
      "subtypes": [
        "AddAction", 
        "DeleteAction", 
        "ReplaceAction"
      ], 
      "supertypes": [
        "Action"
      ], 
      "url": "http://schema.org/UpdateAction"
    }, 
    "UseAction": {
      "ancestors": [
        "Thing", 
        "Action", 
        "ConsumeAction"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "UseAction", 
      "label": "Use Action", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "agent", 
        "endTime", 
        "instrument", 
        "location", 
        "object", 
        "participant", 
        "result", 
        "startTime"
      ], 
      "specific_properties": [], 
      "subtypes": [
        "WearAction"
      ], 
      "supertypes": [
        "ConsumeAction"
      ], 
      "url": "http://schema.org/UseAction"
    }, 
    "UserBlocks": {
      "ancestors": [
        "Thing", 
        "Event", 
        "UserInteraction"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "UserBlocks", 
      "label": "User Blocks", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "attendee", 
        "attendees", 
        "doorTime", 
        "duration", 
        "endDate", 
        "eventStatus", 
        "location", 
        "offers", 
        "performer", 
        "performers", 
        "previousStartDate", 
        "startDate", 
        "subEvent", 
        "subEvents", 
        "superEvent", 
        "typicalAgeRange"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "UserInteraction"
      ], 
      "url": "http://schema.org/UserBlocks"
    }, 
    "UserCheckins": {
      "ancestors": [
        "Thing", 
        "Event", 
        "UserInteraction"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "UserCheckins", 
      "label": "User Checkins", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "attendee", 
        "attendees", 
        "doorTime", 
        "duration", 
        "endDate", 
        "eventStatus", 
        "location", 
        "offers", 
        "performer", 
        "performers", 
        "previousStartDate", 
        "startDate", 
        "subEvent", 
        "subEvents", 
        "superEvent", 
        "typicalAgeRange"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "UserInteraction"
      ], 
      "url": "http://schema.org/UserCheckins"
    }, 
    "UserComments": {
      "ancestors": [
        "Thing", 
        "Event", 
        "UserInteraction"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "UserComments", 
      "label": "User Comments", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "attendee", 
        "attendees", 
        "doorTime", 
        "duration", 
        "endDate", 
        "eventStatus", 
        "location", 
        "offers", 
        "performer", 
        "performers", 
        "previousStartDate", 
        "startDate", 
        "subEvent", 
        "subEvents", 
        "superEvent", 
        "typicalAgeRange", 
        "commentText", 
        "commentTime", 
        "creator", 
        "discusses", 
        "replyToUrl"
      ], 
      "specific_properties": [
        "commentText", 
        "commentTime", 
        "creator", 
        "discusses", 
        "replyToUrl"
      ], 
      "subtypes": [], 
      "supertypes": [
        "UserInteraction"
      ], 
      "url": "http://schema.org/UserComments"
    }, 
    "UserDownloads": {
      "ancestors": [
        "Thing", 
        "Event", 
        "UserInteraction"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "UserDownloads", 
      "label": "User Downloads", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "attendee", 
        "attendees", 
        "doorTime", 
        "duration", 
        "endDate", 
        "eventStatus", 
        "location", 
        "offers", 
        "performer", 
        "performers", 
        "previousStartDate", 
        "startDate", 
        "subEvent", 
        "subEvents", 
        "superEvent", 
        "typicalAgeRange"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "UserInteraction"
      ], 
      "url": "http://schema.org/UserDownloads"
    }, 
    "UserInteraction": {
      "ancestors": [
        "Thing", 
        "Event"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "UserInteraction", 
      "label": "User Interaction", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "attendee", 
        "attendees", 
        "doorTime", 
        "duration", 
        "endDate", 
        "eventStatus", 
        "location", 
        "offers", 
        "performer", 
        "performers", 
        "previousStartDate", 
        "startDate", 
        "subEvent", 
        "subEvents", 
        "superEvent", 
        "typicalAgeRange"
      ], 
      "specific_properties": [], 
      "subtypes": [
        "UserBlocks", 
        "UserCheckins", 
        "UserComments", 
        "UserDownloads", 
        "UserLikes", 
        "UserPageVisits", 
        "UserPlays", 
        "UserPlusOnes", 
        "UserTweets"
      ], 
      "supertypes": [
        "Event"
      ], 
      "url": "http://schema.org/UserInteraction"
    }, 
    "UserLikes": {
      "ancestors": [
        "Thing", 
        "Event", 
        "UserInteraction"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "UserLikes", 
      "label": "User Likes", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "attendee", 
        "attendees", 
        "doorTime", 
        "duration", 
        "endDate", 
        "eventStatus", 
        "location", 
        "offers", 
        "performer", 
        "performers", 
        "previousStartDate", 
        "startDate", 
        "subEvent", 
        "subEvents", 
        "superEvent", 
        "typicalAgeRange"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "UserInteraction"
      ], 
      "url": "http://schema.org/UserLikes"
    }, 
    "UserPageVisits": {
      "ancestors": [
        "Thing", 
        "Event", 
        "UserInteraction"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "UserPageVisits", 
      "label": "User Page Visits", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "attendee", 
        "attendees", 
        "doorTime", 
        "duration", 
        "endDate", 
        "eventStatus", 
        "location", 
        "offers", 
        "performer", 
        "performers", 
        "previousStartDate", 
        "startDate", 
        "subEvent", 
        "subEvents", 
        "superEvent", 
        "typicalAgeRange"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "UserInteraction"
      ], 
      "url": "http://schema.org/UserPageVisits"
    }, 
    "UserPlays": {
      "ancestors": [
        "Thing", 
        "Event", 
        "UserInteraction"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "UserPlays", 
      "label": "User Plays", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "attendee", 
        "attendees", 
        "doorTime", 
        "duration", 
        "endDate", 
        "eventStatus", 
        "location", 
        "offers", 
        "performer", 
        "performers", 
        "previousStartDate", 
        "startDate", 
        "subEvent", 
        "subEvents", 
        "superEvent", 
        "typicalAgeRange"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "UserInteraction"
      ], 
      "url": "http://schema.org/UserPlays"
    }, 
    "UserPlusOnes": {
      "ancestors": [
        "Thing", 
        "Event", 
        "UserInteraction"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "UserPlusOnes", 
      "label": "User Plus Ones", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "attendee", 
        "attendees", 
        "doorTime", 
        "duration", 
        "endDate", 
        "eventStatus", 
        "location", 
        "offers", 
        "performer", 
        "performers", 
        "previousStartDate", 
        "startDate", 
        "subEvent", 
        "subEvents", 
        "superEvent", 
        "typicalAgeRange"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "UserInteraction"
      ], 
      "url": "http://schema.org/UserPlusOnes"
    }, 
    "UserTweets": {
      "ancestors": [
        "Thing", 
        "Event", 
        "UserInteraction"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "UserTweets", 
      "label": "User Tweets", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "attendee", 
        "attendees", 
        "doorTime", 
        "duration", 
        "endDate", 
        "eventStatus", 
        "location", 
        "offers", 
        "performer", 
        "performers", 
        "previousStartDate", 
        "startDate", 
        "subEvent", 
        "subEvents", 
        "superEvent", 
        "typicalAgeRange"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "UserInteraction"
      ], 
      "url": "http://schema.org/UserTweets"
    }, 
    "Vein": {
      "ancestors": [
        "Thing", 
        "MedicalEntity", 
        "AnatomicalStructure", 
        "Vessel"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "Vein", 
      "label": "Vein", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "code", 
        "guideline", 
        "medicineSystem", 
        "recognizingAuthority", 
        "relevantSpecialty", 
        "study", 
        "associatedPathophysiology", 
        "bodyLocation", 
        "connectedTo", 
        "diagram", 
        "function", 
        "partOfSystem", 
        "relatedCondition", 
        "relatedTherapy", 
        "subStructure", 
        "drainsTo", 
        "regionDrained", 
        "tributary"
      ], 
      "specific_properties": [
        "drainsTo", 
        "regionDrained", 
        "tributary"
      ], 
      "subtypes": [], 
      "supertypes": [
        "Vessel"
      ], 
      "url": "http://schema.org/Vein"
    }, 
    "Vessel": {
      "ancestors": [
        "Thing", 
        "MedicalEntity", 
        "AnatomicalStructure"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "Vessel", 
      "label": "Vessel", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "code", 
        "guideline", 
        "medicineSystem", 
        "recognizingAuthority", 
        "relevantSpecialty", 
        "study", 
        "associatedPathophysiology", 
        "bodyLocation", 
        "connectedTo", 
        "diagram", 
        "function", 
        "partOfSystem", 
        "relatedCondition", 
        "relatedTherapy", 
        "subStructure"
      ], 
      "specific_properties": [], 
      "subtypes": [
        "Artery", 
        "LymphaticVessel", 
        "Vein"
      ], 
      "supertypes": [
        "AnatomicalStructure"
      ], 
      "url": "http://schema.org/Vessel"
    }, 
    "VeterinaryCare": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "LocalBusiness", 
        "MedicalOrganization"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "VeterinaryCare", 
      "label": "Veterinary Care", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "founder", 
        "founders", 
        "foundingDate", 
        "hasPOS", 
        "legalName", 
        "location", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "vatID", 
        "branchOf", 
        "currenciesAccepted", 
        "openingHours", 
        "paymentAccepted", 
        "priceRange"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "MedicalOrganization"
      ], 
      "url": "http://schema.org/VeterinaryCare"
    }, 
    "VideoGallery": {
      "ancestors": [
        "Thing", 
        "CreativeWork", 
        "WebPage", 
        "CollectionPage"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "VideoGallery", 
      "label": "Video Gallery", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "about", 
        "accessibilityAPI", 
        "accessibilityControl", 
        "accessibilityFeature", 
        "accessibilityHazard", 
        "accountablePerson", 
        "aggregateRating", 
        "alternativeHeadline", 
        "associatedMedia", 
        "audience", 
        "audio", 
        "author", 
        "award", 
        "awards", 
        "citation", 
        "comment", 
        "contentLocation", 
        "contentRating", 
        "contributor", 
        "copyrightHolder", 
        "copyrightYear", 
        "creator", 
        "dateCreated", 
        "dateModified", 
        "datePublished", 
        "discussionUrl", 
        "editor", 
        "educationalAlignment", 
        "educationalUse", 
        "encoding", 
        "encodings", 
        "genre", 
        "headline", 
        "inLanguage", 
        "interactionCount", 
        "interactivityType", 
        "isBasedOnUrl", 
        "isFamilyFriendly", 
        "keywords", 
        "learningResourceType", 
        "mentions", 
        "offers", 
        "provider", 
        "publisher", 
        "publishingPrinciples", 
        "review", 
        "reviews", 
        "sourceOrganization", 
        "text", 
        "thumbnailUrl", 
        "timeRequired", 
        "typicalAgeRange", 
        "version", 
        "video", 
        "breadcrumb", 
        "isPartOf", 
        "lastReviewed", 
        "mainContentOfPage", 
        "primaryImageOfPage", 
        "relatedLink", 
        "reviewedBy", 
        "significantLink", 
        "significantLinks", 
        "specialty"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "CollectionPage"
      ], 
      "url": "http://schema.org/VideoGallery"
    }, 
    "VideoObject": {
      "ancestors": [
        "Thing", 
        "CreativeWork", 
        "MediaObject"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "VideoObject", 
      "label": "Video Object", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "about", 
        "accessibilityAPI", 
        "accessibilityControl", 
        "accessibilityFeature", 
        "accessibilityHazard", 
        "accountablePerson", 
        "aggregateRating", 
        "alternativeHeadline", 
        "associatedMedia", 
        "audience", 
        "audio", 
        "author", 
        "award", 
        "awards", 
        "citation", 
        "comment", 
        "contentLocation", 
        "contentRating", 
        "contributor", 
        "copyrightHolder", 
        "copyrightYear", 
        "creator", 
        "dateCreated", 
        "dateModified", 
        "datePublished", 
        "discussionUrl", 
        "editor", 
        "educationalAlignment", 
        "educationalUse", 
        "encoding", 
        "encodings", 
        "genre", 
        "headline", 
        "inLanguage", 
        "interactionCount", 
        "interactivityType", 
        "isBasedOnUrl", 
        "isFamilyFriendly", 
        "keywords", 
        "learningResourceType", 
        "mentions", 
        "offers", 
        "provider", 
        "publisher", 
        "publishingPrinciples", 
        "review", 
        "reviews", 
        "sourceOrganization", 
        "text", 
        "thumbnailUrl", 
        "timeRequired", 
        "typicalAgeRange", 
        "version", 
        "video", 
        "associatedArticle", 
        "bitrate", 
        "contentSize", 
        "contentUrl", 
        "duration", 
        "embedUrl", 
        "encodesCreativeWork", 
        "encodingFormat", 
        "expires", 
        "height", 
        "playerType", 
        "productionCompany", 
        "publication", 
        "regionsAllowed", 
        "requiresSubscription", 
        "uploadDate", 
        "width", 
        "caption", 
        "thumbnail", 
        "transcript", 
        "videoFrameSize", 
        "videoQuality"
      ], 
      "specific_properties": [
        "caption", 
        "thumbnail", 
        "transcript", 
        "videoFrameSize", 
        "videoQuality"
      ], 
      "subtypes": [], 
      "supertypes": [
        "MediaObject"
      ], 
      "url": "http://schema.org/VideoObject"
    }, 
    "ViewAction": {
      "ancestors": [
        "Thing", 
        "Action", 
        "ConsumeAction"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "ViewAction", 
      "label": "View Action", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "agent", 
        "endTime", 
        "instrument", 
        "location", 
        "object", 
        "participant", 
        "result", 
        "startTime"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "ConsumeAction"
      ], 
      "url": "http://schema.org/ViewAction"
    }, 
    "VisualArtsEvent": {
      "ancestors": [
        "Thing", 
        "Event"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "VisualArtsEvent", 
      "label": "Visual Arts Event", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "attendee", 
        "attendees", 
        "doorTime", 
        "duration", 
        "endDate", 
        "eventStatus", 
        "location", 
        "offers", 
        "performer", 
        "performers", 
        "previousStartDate", 
        "startDate", 
        "subEvent", 
        "subEvents", 
        "superEvent", 
        "typicalAgeRange"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "Event"
      ], 
      "url": "http://schema.org/VisualArtsEvent"
    }, 
    "Volcano": {
      "ancestors": [
        "Thing", 
        "Place", 
        "Landform"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "Volcano", 
      "label": "Volcano", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "Landform"
      ], 
      "url": "http://schema.org/Volcano"
    }, 
    "VoteAction": {
      "ancestors": [
        "Thing", 
        "Action", 
        "AssessAction", 
        "ChooseAction"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "VoteAction", 
      "label": "Vote Action", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "agent", 
        "endTime", 
        "instrument", 
        "location", 
        "object", 
        "participant", 
        "result", 
        "startTime", 
        "option", 
        "candidate"
      ], 
      "specific_properties": [
        "candidate"
      ], 
      "subtypes": [], 
      "supertypes": [
        "ChooseAction"
      ], 
      "url": "http://schema.org/VoteAction"
    }, 
    "WPAdBlock": {
      "ancestors": [
        "Thing", 
        "CreativeWork", 
        "WebPageElement"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "WPAdBlock", 
      "label": "WP Ad Block", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "about", 
        "accessibilityAPI", 
        "accessibilityControl", 
        "accessibilityFeature", 
        "accessibilityHazard", 
        "accountablePerson", 
        "aggregateRating", 
        "alternativeHeadline", 
        "associatedMedia", 
        "audience", 
        "audio", 
        "author", 
        "award", 
        "awards", 
        "citation", 
        "comment", 
        "contentLocation", 
        "contentRating", 
        "contributor", 
        "copyrightHolder", 
        "copyrightYear", 
        "creator", 
        "dateCreated", 
        "dateModified", 
        "datePublished", 
        "discussionUrl", 
        "editor", 
        "educationalAlignment", 
        "educationalUse", 
        "encoding", 
        "encodings", 
        "genre", 
        "headline", 
        "inLanguage", 
        "interactionCount", 
        "interactivityType", 
        "isBasedOnUrl", 
        "isFamilyFriendly", 
        "keywords", 
        "learningResourceType", 
        "mentions", 
        "offers", 
        "provider", 
        "publisher", 
        "publishingPrinciples", 
        "review", 
        "reviews", 
        "sourceOrganization", 
        "text", 
        "thumbnailUrl", 
        "timeRequired", 
        "typicalAgeRange", 
        "version", 
        "video"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "WebPageElement"
      ], 
      "url": "http://schema.org/WPAdBlock"
    }, 
    "WPFooter": {
      "ancestors": [
        "Thing", 
        "CreativeWork", 
        "WebPageElement"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "WPFooter", 
      "label": "WP Footer", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "about", 
        "accessibilityAPI", 
        "accessibilityControl", 
        "accessibilityFeature", 
        "accessibilityHazard", 
        "accountablePerson", 
        "aggregateRating", 
        "alternativeHeadline", 
        "associatedMedia", 
        "audience", 
        "audio", 
        "author", 
        "award", 
        "awards", 
        "citation", 
        "comment", 
        "contentLocation", 
        "contentRating", 
        "contributor", 
        "copyrightHolder", 
        "copyrightYear", 
        "creator", 
        "dateCreated", 
        "dateModified", 
        "datePublished", 
        "discussionUrl", 
        "editor", 
        "educationalAlignment", 
        "educationalUse", 
        "encoding", 
        "encodings", 
        "genre", 
        "headline", 
        "inLanguage", 
        "interactionCount", 
        "interactivityType", 
        "isBasedOnUrl", 
        "isFamilyFriendly", 
        "keywords", 
        "learningResourceType", 
        "mentions", 
        "offers", 
        "provider", 
        "publisher", 
        "publishingPrinciples", 
        "review", 
        "reviews", 
        "sourceOrganization", 
        "text", 
        "thumbnailUrl", 
        "timeRequired", 
        "typicalAgeRange", 
        "version", 
        "video"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "WebPageElement"
      ], 
      "url": "http://schema.org/WPFooter"
    }, 
    "WPHeader": {
      "ancestors": [
        "Thing", 
        "CreativeWork", 
        "WebPageElement"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "WPHeader", 
      "label": "WP Header", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "about", 
        "accessibilityAPI", 
        "accessibilityControl", 
        "accessibilityFeature", 
        "accessibilityHazard", 
        "accountablePerson", 
        "aggregateRating", 
        "alternativeHeadline", 
        "associatedMedia", 
        "audience", 
        "audio", 
        "author", 
        "award", 
        "awards", 
        "citation", 
        "comment", 
        "contentLocation", 
        "contentRating", 
        "contributor", 
        "copyrightHolder", 
        "copyrightYear", 
        "creator", 
        "dateCreated", 
        "dateModified", 
        "datePublished", 
        "discussionUrl", 
        "editor", 
        "educationalAlignment", 
        "educationalUse", 
        "encoding", 
        "encodings", 
        "genre", 
        "headline", 
        "inLanguage", 
        "interactionCount", 
        "interactivityType", 
        "isBasedOnUrl", 
        "isFamilyFriendly", 
        "keywords", 
        "learningResourceType", 
        "mentions", 
        "offers", 
        "provider", 
        "publisher", 
        "publishingPrinciples", 
        "review", 
        "reviews", 
        "sourceOrganization", 
        "text", 
        "thumbnailUrl", 
        "timeRequired", 
        "typicalAgeRange", 
        "version", 
        "video"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "WebPageElement"
      ], 
      "url": "http://schema.org/WPHeader"
    }, 
    "WPSideBar": {
      "ancestors": [
        "Thing", 
        "CreativeWork", 
        "WebPageElement"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "WPSideBar", 
      "label": "WP Side Bar", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "about", 
        "accessibilityAPI", 
        "accessibilityControl", 
        "accessibilityFeature", 
        "accessibilityHazard", 
        "accountablePerson", 
        "aggregateRating", 
        "alternativeHeadline", 
        "associatedMedia", 
        "audience", 
        "audio", 
        "author", 
        "award", 
        "awards", 
        "citation", 
        "comment", 
        "contentLocation", 
        "contentRating", 
        "contributor", 
        "copyrightHolder", 
        "copyrightYear", 
        "creator", 
        "dateCreated", 
        "dateModified", 
        "datePublished", 
        "discussionUrl", 
        "editor", 
        "educationalAlignment", 
        "educationalUse", 
        "encoding", 
        "encodings", 
        "genre", 
        "headline", 
        "inLanguage", 
        "interactionCount", 
        "interactivityType", 
        "isBasedOnUrl", 
        "isFamilyFriendly", 
        "keywords", 
        "learningResourceType", 
        "mentions", 
        "offers", 
        "provider", 
        "publisher", 
        "publishingPrinciples", 
        "review", 
        "reviews", 
        "sourceOrganization", 
        "text", 
        "thumbnailUrl", 
        "timeRequired", 
        "typicalAgeRange", 
        "version", 
        "video"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "WebPageElement"
      ], 
      "url": "http://schema.org/WPSideBar"
    }, 
    "WantAction": {
      "ancestors": [
        "Thing", 
        "Action", 
        "AssessAction", 
        "ReactAction"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "WantAction", 
      "label": "Want Action", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "agent", 
        "endTime", 
        "instrument", 
        "location", 
        "object", 
        "participant", 
        "result", 
        "startTime"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "ReactAction"
      ], 
      "url": "http://schema.org/WantAction"
    }, 
    "WarrantyPromise": {
      "ancestors": [
        "Thing", 
        "Intangible", 
        "StructuredValue"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "WarrantyPromise", 
      "label": "Warranty Promise", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "durationOfWarranty", 
        "warrantyScope"
      ], 
      "specific_properties": [
        "durationOfWarranty", 
        "warrantyScope"
      ], 
      "subtypes": [], 
      "supertypes": [
        "StructuredValue"
      ], 
      "url": "http://schema.org/WarrantyPromise"
    }, 
    "WarrantyScope": {
      "ancestors": [
        "Thing", 
        "Intangible", 
        "Enumeration"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "WarrantyScope", 
      "label": "Warranty Scope", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "Enumeration"
      ], 
      "url": "http://schema.org/WarrantyScope"
    }, 
    "WatchAction": {
      "ancestors": [
        "Thing", 
        "Action", 
        "ConsumeAction"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "WatchAction", 
      "label": "Watch Action", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "agent", 
        "endTime", 
        "instrument", 
        "location", 
        "object", 
        "participant", 
        "result", 
        "startTime"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "ConsumeAction"
      ], 
      "url": "http://schema.org/WatchAction"
    }, 
    "Waterfall": {
      "ancestors": [
        "Thing", 
        "Place", 
        "Landform", 
        "BodyOfWater"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "Waterfall", 
      "label": "Waterfall", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "BodyOfWater"
      ], 
      "url": "http://schema.org/Waterfall"
    }, 
    "WearAction": {
      "ancestors": [
        "Thing", 
        "Action", 
        "ConsumeAction", 
        "UseAction"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "WearAction", 
      "label": "Wear Action", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "agent", 
        "endTime", 
        "instrument", 
        "location", 
        "object", 
        "participant", 
        "result", 
        "startTime"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "UseAction"
      ], 
      "url": "http://schema.org/WearAction"
    }, 
    "WebApplication": {
      "ancestors": [
        "Thing", 
        "CreativeWork", 
        "SoftwareApplication"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "WebApplication", 
      "label": "Web Application", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "about", 
        "accessibilityAPI", 
        "accessibilityControl", 
        "accessibilityFeature", 
        "accessibilityHazard", 
        "accountablePerson", 
        "aggregateRating", 
        "alternativeHeadline", 
        "associatedMedia", 
        "audience", 
        "audio", 
        "author", 
        "award", 
        "awards", 
        "citation", 
        "comment", 
        "contentLocation", 
        "contentRating", 
        "contributor", 
        "copyrightHolder", 
        "copyrightYear", 
        "creator", 
        "dateCreated", 
        "dateModified", 
        "datePublished", 
        "discussionUrl", 
        "editor", 
        "educationalAlignment", 
        "educationalUse", 
        "encoding", 
        "encodings", 
        "genre", 
        "headline", 
        "inLanguage", 
        "interactionCount", 
        "interactivityType", 
        "isBasedOnUrl", 
        "isFamilyFriendly", 
        "keywords", 
        "learningResourceType", 
        "mentions", 
        "offers", 
        "provider", 
        "publisher", 
        "publishingPrinciples", 
        "review", 
        "reviews", 
        "sourceOrganization", 
        "text", 
        "thumbnailUrl", 
        "timeRequired", 
        "typicalAgeRange", 
        "version", 
        "video", 
        "applicationCategory", 
        "applicationSubCategory", 
        "applicationSuite", 
        "countriesNotSupported", 
        "countriesSupported", 
        "device", 
        "downloadUrl", 
        "featureList", 
        "fileFormat", 
        "fileSize", 
        "installUrl", 
        "memoryRequirements", 
        "operatingSystem", 
        "permissions", 
        "processorRequirements", 
        "releaseNotes", 
        "requirements", 
        "screenshot", 
        "softwareVersion", 
        "storageRequirements", 
        "browserRequirements"
      ], 
      "specific_properties": [
        "browserRequirements"
      ], 
      "subtypes": [], 
      "supertypes": [
        "SoftwareApplication"
      ], 
      "url": "http://schema.org/WebApplication"
    }, 
    "WebPage": {
      "ancestors": [
        "Thing", 
        "CreativeWork"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "WebPage", 
      "label": "Web Page", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "about", 
        "accessibilityAPI", 
        "accessibilityControl", 
        "accessibilityFeature", 
        "accessibilityHazard", 
        "accountablePerson", 
        "aggregateRating", 
        "alternativeHeadline", 
        "associatedMedia", 
        "audience", 
        "audio", 
        "author", 
        "award", 
        "awards", 
        "citation", 
        "comment", 
        "contentLocation", 
        "contentRating", 
        "contributor", 
        "copyrightHolder", 
        "copyrightYear", 
        "creator", 
        "dateCreated", 
        "dateModified", 
        "datePublished", 
        "discussionUrl", 
        "editor", 
        "educationalAlignment", 
        "educationalUse", 
        "encoding", 
        "encodings", 
        "genre", 
        "headline", 
        "inLanguage", 
        "interactionCount", 
        "interactivityType", 
        "isBasedOnUrl", 
        "isFamilyFriendly", 
        "keywords", 
        "learningResourceType", 
        "mentions", 
        "offers", 
        "provider", 
        "publisher", 
        "publishingPrinciples", 
        "review", 
        "reviews", 
        "sourceOrganization", 
        "text", 
        "thumbnailUrl", 
        "timeRequired", 
        "typicalAgeRange", 
        "version", 
        "video", 
        "breadcrumb", 
        "isPartOf", 
        "lastReviewed", 
        "mainContentOfPage", 
        "primaryImageOfPage", 
        "relatedLink", 
        "reviewedBy", 
        "significantLink", 
        "significantLinks", 
        "specialty"
      ], 
      "specific_properties": [
        "breadcrumb", 
        "isPartOf", 
        "lastReviewed", 
        "mainContentOfPage", 
        "primaryImageOfPage", 
        "relatedLink", 
        "reviewedBy", 
        "significantLink", 
        "significantLinks", 
        "specialty"
      ], 
      "subtypes": [
        "AboutPage", 
        "CheckoutPage", 
        "CollectionPage", 
        "ContactPage", 
        "ItemPage", 
        "MedicalWebPage", 
        "ProfilePage", 
        "SearchResultsPage"
      ], 
      "supertypes": [
        "CreativeWork"
      ], 
      "url": "http://schema.org/WebPage"
    }, 
    "WebPageElement": {
      "ancestors": [
        "Thing", 
        "CreativeWork"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "WebPageElement", 
      "label": "Web Page Element", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "about", 
        "accessibilityAPI", 
        "accessibilityControl", 
        "accessibilityFeature", 
        "accessibilityHazard", 
        "accountablePerson", 
        "aggregateRating", 
        "alternativeHeadline", 
        "associatedMedia", 
        "audience", 
        "audio", 
        "author", 
        "award", 
        "awards", 
        "citation", 
        "comment", 
        "contentLocation", 
        "contentRating", 
        "contributor", 
        "copyrightHolder", 
        "copyrightYear", 
        "creator", 
        "dateCreated", 
        "dateModified", 
        "datePublished", 
        "discussionUrl", 
        "editor", 
        "educationalAlignment", 
        "educationalUse", 
        "encoding", 
        "encodings", 
        "genre", 
        "headline", 
        "inLanguage", 
        "interactionCount", 
        "interactivityType", 
        "isBasedOnUrl", 
        "isFamilyFriendly", 
        "keywords", 
        "learningResourceType", 
        "mentions", 
        "offers", 
        "provider", 
        "publisher", 
        "publishingPrinciples", 
        "review", 
        "reviews", 
        "sourceOrganization", 
        "text", 
        "thumbnailUrl", 
        "timeRequired", 
        "typicalAgeRange", 
        "version", 
        "video"
      ], 
      "specific_properties": [], 
      "subtypes": [
        "SiteNavigationElement", 
        "Table", 
        "WPAdBlock", 
        "WPFooter", 
        "WPHeader", 
        "WPSideBar"
      ], 
      "supertypes": [
        "CreativeWork"
      ], 
      "url": "http://schema.org/WebPageElement"
    }, 
    "WholesaleStore": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "LocalBusiness", 
        "Store"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "WholesaleStore", 
      "label": "Wholesale Store", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "founder", 
        "founders", 
        "foundingDate", 
        "hasPOS", 
        "legalName", 
        "location", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "vatID", 
        "branchOf", 
        "currenciesAccepted", 
        "openingHours", 
        "paymentAccepted", 
        "priceRange"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "Store"
      ], 
      "url": "http://schema.org/WholesaleStore"
    }, 
    "WinAction": {
      "ancestors": [
        "Thing", 
        "Action", 
        "AchieveAction"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "WinAction", 
      "label": "Win Action", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "agent", 
        "endTime", 
        "instrument", 
        "location", 
        "object", 
        "participant", 
        "result", 
        "startTime", 
        "loser"
      ], 
      "specific_properties": [
        "loser"
      ], 
      "subtypes": [], 
      "supertypes": [
        "AchieveAction"
      ], 
      "url": "http://schema.org/WinAction"
    }, 
    "Winery": {
      "ancestors": [
        "Thing", 
        "Organization", 
        "LocalBusiness", 
        "FoodEstablishment"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "Winery", 
      "label": "Winery", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "brand", 
        "contactPoint", 
        "contactPoints", 
        "department", 
        "duns", 
        "email", 
        "employee", 
        "employees", 
        "founder", 
        "founders", 
        "foundingDate", 
        "hasPOS", 
        "legalName", 
        "location", 
        "makesOffer", 
        "member", 
        "members", 
        "naics", 
        "owns", 
        "seeks", 
        "subOrganization", 
        "taxID", 
        "vatID", 
        "branchOf", 
        "currenciesAccepted", 
        "openingHours", 
        "paymentAccepted", 
        "priceRange", 
        "acceptsReservations", 
        "menu", 
        "servesCuisine"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "FoodEstablishment"
      ], 
      "url": "http://schema.org/Winery"
    }, 
    "WriteAction": {
      "ancestors": [
        "Thing", 
        "Action", 
        "CreateAction"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "WriteAction", 
      "label": "Write Action", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "agent", 
        "endTime", 
        "instrument", 
        "location", 
        "object", 
        "participant", 
        "result", 
        "startTime", 
        "language"
      ], 
      "specific_properties": [
        "language"
      ], 
      "subtypes": [], 
      "supertypes": [
        "CreateAction"
      ], 
      "url": "http://schema.org/WriteAction"
    }, 
    "Zoo": {
      "ancestors": [
        "Thing", 
        "Place", 
        "CivicStructure"
      ], 
      "comment": "", 
      "comment_plain": "", 
      "id": "Zoo", 
      "label": "Zoo", 
      "properties": [
        "additionalType", 
        "alternateName", 
        "description", 
        "image", 
        "name", 
        "sameAs", 
        "url", 
        "address", 
        "aggregateRating", 
        "containedIn", 
        "event", 
        "events", 
        "faxNumber", 
        "geo", 
        "globalLocationNumber", 
        "interactionCount", 
        "isicV4", 
        "logo", 
        "map", 
        "maps", 
        "openingHoursSpecification", 
        "photo", 
        "photos", 
        "review", 
        "reviews", 
        "telephone", 
        "openingHours"
      ], 
      "specific_properties": [], 
      "subtypes": [], 
      "supertypes": [
        "CivicStructure"
      ], 
      "url": "http://schema.org/Zoo"
    }
  }, 
  "valid": "2014-04-03"
}

		
