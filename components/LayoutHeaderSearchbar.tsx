"use client"

import { Input, InputGroup } from "@chakra-ui/react"
import { SearchNormal1 } from "iconsax-reactjs";

const LayoutHeaderSearchbar = () => {
    return (
        <InputGroup w="80" startElement={
            <SearchNormal1 size="16" color="#6B7280" />
        }>
            <Input rounded="md" size="sm" variant="subtle" placeholder="Search your dashboard" />
        </InputGroup>
    )
}

export default LayoutHeaderSearchbar;